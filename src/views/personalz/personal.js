export default {
  name: 'personal',
  components: {
  },
  data() {
    return {
      personalImg:'./static/images/headImg.jpg',
      nickname:'北京联创锐鑫',
      attentionTime:'2018年5月2号',
      //1:组长 2:组员 3:家长 4:校长 5:班主任 (组员组长除了我的订单收货地址)（家长我的订单收货地址）（班主任+校长，只能看所有订单+订单检索及状态）
      userType:3,
      userInfo:null,
      moneyInfo:{
        orderAmount:0,
        withdrawCash:0,
        balance:0
      }
    }
  },
  filters: {//1:组长 2:组员 3:家长 4:校长 5:班主任
    typeFilter( e ){
      let name = '';
      if (e == '1') {
        name = "组长";
      } else if (e == "2") {
        name = "组员"
      }else if (e == "3") {
        name = "家长"
      }else if (e == "4") {
        name = "学校"
      }else if (e == "5") {
        name = "班主任"
      }else if (e == "6") {
        name = "董事长"
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
            // this.userInfo.userType=1   
            sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))
        }
      }).then(()=>{
        this.getPersonalMoney();
      })
    },
    getPersonalMoney() {//获取用户总金额、已提现、余额
      let url = this.GLOBAL.API_STATISTICAL_USER;
      let params = {
        code:JSON.parse(sessionStorage.getItem('userInfo')).code
      }
      this.$post(url,params).then(res=>{
        if(res.data.retCode==200){
          this.moneyInfo = res.data.data;
        }
      }).catch((res)=>{
        console.log(res);
      })
    },
    shopsee(){
      this.$router.push({
        name:'homeList'
      })
      sessionStorage.setItem("bottomnav",true)
      // this.$store.commit("setMenu", [false, true]);
    }
  },
  created(){
    // if(sessionStorage.getItem("bottomnav")){
    //   this.$store.commit("setMenu", [false, true]);
    // }else{
    //   this.$store.commit("setMenu", [false, false]);
    // }  
    this.$store.commit("setMenu", [false, false]);
    this.userInfoLoad()
    // let selectedData=[]//4.12改vuex
    // this.$store.commit("selectedDataLoad",selectedData); //4.12改vuex
    sessionStorage.removeItem("selectedData")
    // this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
  }
}