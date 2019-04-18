export default {
  name: 'Bottom',
  components: {},
  data(){
    return {
      userType:1,
      menu: [
        {
          icon: "fa fa-home fa-fw",
          name: "首页",
          routeName: "homeList",
          active: false,
          isShow: true
        },
        {
          icon: "fa fa-list",
          name: "商品列表",
          routeName: "bookList",
          active: false,
          isShow: true
        },
        {
          icon: "fa fa-user-o fa-fw",
          name: "个人中心",
          routeName: "personal",
          active: false,
          isShow: true
        }
      ],
      userInfo:null
    }
  },
  computed: {},
  watch: {
    $route: {
      handler() {
        this.menu.forEach( ele=> {
          ele.active = false;
          if(this.$route.name == ele.routeName) {
            ele.active = true;
          }
        })
      },
      immediate: true
    }
  },
  methods: {
    linkeTo( type, router ){
      this.$router.push({
        name: router,
        query: {
          num: parseInt(Math.random() * 100)
        }
      });
    }
  },
  created(){
    this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
    // this.menu[2].routeName=this.userInfo.userType==0||this.userInfo.userType==1||this.userInfo.userType==2||this.userInfo.userType==6?'personalz':'personal'
  }
}
