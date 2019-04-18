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
          // if(beforeUrl == 'homeList' && !res.data.data.relationSchoolId && res.data.data.userType == '3'){
          //   this.$router.push({ name: 'chooseSchool' })
          // }else{
          if(beforeUrl) {
            this.$router.push(beforeUrl);
          } else {
            this.$router.push('homeList');
          }
          // }
        }else{
          this.$Message.error({content:res.data.message,duration:5});
        }
      }).then(()=>{

      }).catch(res=>{
        console.log(res);
      })
    },
    // getSalesPhone() {//获取绑定的销售人员电话
    //   var url = this.GLOBAL.API_APP_USER_SALE_PHONE;
    //   this.$get(url).then(res=>{
    //     if(res.data.retCode == 200){
    //       this.getUserInfo();
    //     }else{
    //       this.$Message.error({content:res.data.message,duration:5});
    //     }
    //   }).catch((res)=>{
    //     console.log(res);
    //   })
    // }
  },
  created(){
    /**
     * 如果url中有code，并且本地session中没有token，那么就用code去换取access_token
     * 如果url中有code，并且本地session中有token，则跳转到个人中心（这种情况发生在第一次登录后点击了返回按钮，重新回到了授权页）
     */
    if (this.$route.query.code && !sessionStorage.getItem('wechataccess_token')) {
      var url = this.GLOBAL.API_WECHAT_LOGIN;
      var params = {
        code:this.$route.query.code
      }
      this.$post(url,params).then(res => {//通过code去获取请求接口所携带的access_token(并非微信的token)
        if(res.status == 200){
          sessionStorage.setItem('wechataccess_token', res.headers.authorization);
          // this.$router.push('personal');
          this.getUserInfo();   
        }else{
          this.Toast({
            message: res.data.message,
            position: 'center',
            duration: 2000
          })
        }
      })
    } else if (this.$route.query.code && sessionStorage.getItem('wechataccess_token')){
      this.$router.push('personal');
    }
  },
  mounted(){
  }
}
