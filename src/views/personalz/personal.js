export default {
  name: 'personal',
  components: {
  },
  data() {
    return {
      userInfo:{
        wechatImage:'',
        nickname:'',
        userType:'',
        createdTime:''
      },
      moneyInfo:{
        orderAmount:0,
        withdrawCash:0,
        balance:0
      }
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
      let url=this.GLOBAL.PERSONAL_INFO
      this.$get(url).then(res=>{
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
    this.userInfoLoad()
  }
}