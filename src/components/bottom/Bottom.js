export default {
  name: 'Bottom',
  components: {},
  data(){
    return {
      userType:1,
      menu: [
        {
          icon: "fa fa-home",
          name: "首页",
          routeName: "homeList",
          active: false,
          isShow: true
        },
        {
          icon: "iconfont icon-jijian-copy",
          name: "寄件",
          routeName: "userMailing",
          active: false,
          isShow: true
        },
        // {
        //   icon: "iconfont icon-xingtaiduICON_sousuo--",
        //   name: "查件",
        //   routeName: "bookList",
        //   active: false,
        //   isShow: true
        // },
        {
          icon: "iconfont icon-icon--copy",
          name: "订单",
          routeName: "orderList",
          active: false,
          isShow: true
        },
        {
          icon: "fa fa-user-o fa-fw",
          name: "我的",
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
    // this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
    // this.menu[2].routeName=this.userInfo.userType==1?'personalz':'personal'
  }
}
