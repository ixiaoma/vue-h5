export default {
  name: 'personal',
  components: {
  },
  data() {
    return {
      userInfo:{
        wechatImage:'',
        nickname:'叶落森',
        userType:'2',
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
      if (e == '1') {
        name = "派送员";
      } else if (e == "2") {
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
      }).then(()=>{
        this.getPersonalMoney();
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
    // this.userInfoLoad()
  }
}