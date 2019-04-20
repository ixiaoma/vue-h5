export default {
  name: 'auth',
  data(){
    return {}
  },
  methods: {
    getUserInfo() {//获取用户信息
      var url = this.GLOBAL.PERSONAL_INFO;
      this.$get(url).then(res=>{
        if(res.data.retCode == 200){
          this.userInfo=res.data.data;                
          sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))
          let beforeUrl = sessionStorage.getItem("beforeUrl");
          if(beforeUrl) {
            this.$router.push(beforeUrl);
          } else {
            this.$router.push('personalz');
          }
        }else{
          this.$Message.error({content:res.data.message,duration:5});
        }
      }).catch(res=>{
        console.log(res);
      })
    }
  },
  created(){
    /**
     * 如果url中有code，并且本地session中没有token，那么就用code去换取access_token,如果失败login
     * 如果url中有code，并且本地session中有token，则跳转到个人中心
     */
    if (this.$route.query.code && !sessionStorage.getItem('wechataccess_token')) {
      var url = this.GLOBAL.API_MEMBER_WECHAT_LOGIN;
      var params = {
        code:this.$route.query.code
      }
      this.$post(url,params).then(res => {
        if(res.status == 200){
          // sessionStorage.setItem('wechataccess_token', res.headers.authorization);
          sessionStorage.setItem('wechataccess_token', res.data.data.accessToken);
          if(res.data.data.accessToken){
          // if(res.headers.authorization){
            this.getUserInfo();   
          }else{
            this.$router.push('login');  
          }        
        }else{
          this.$router.push('login');        
        }
      }).catch(err=>{
        this.$router.push('login');  
      })
    } else if (this.$route.query.code && sessionStorage.getItem('wechataccess_token')){
      this.$router.push('personalz');
    }
  },
  mounted(){
  }
}
