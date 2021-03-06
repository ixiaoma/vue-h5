export default {
  name: 'personal',
  components: {
  },
  data() {
    return {
      userInfo:{
        wechatImage:'',
        nickname:''
      },
      userType:''
    }
  },
  filters: {
    typeFilter( e ){
      let name = '';
      if (e == 'courier') {
        name = "派送员";
      } else if (e == "customer") {
        name = "普通会员"
      }
      return name;
    }
  },
  methods: {
    userInfoLoad(){
      var url = this.GLOBAL.PERSONAL_INFO;
      var params={
        openid:sessionStorage.getItem('openid')
      }
      this.$get(url,params).then(res=>{
        if(res.data.retCode==200){
            this.userInfo=res.data.data;    
            sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))
        }
      })
    },
    toPage(value){
      this.$router.push({
          name:'bindPhoneEmail',
          query:{
              type:value
          }
      })
    }
  },
  created(){
    this.$store.commit("setMenu", [false, true]);
    this.userType=sessionStorage.getItem('userType')
    this.userInfoLoad()
  }
}