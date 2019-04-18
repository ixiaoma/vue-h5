export default {
  name: 'personal',
  components: {
  },
  data() {
    return {
      //1:组长 2:组员 3:家长 4:校长 5:班主任 (组员组长除了我的订单收货地址)（家长我的订单收货地址）（班主任+校长，只能看所有订单+订单检索及状态）
      userInfo:{
        wechatImage:'',
        nickname:'叶落森',
        userType:'3',
        createdTime:''
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
        name = "校长"
      }else if (e == "5") {
        name = "班主任"
      }else if(e=="6"){
        name="董事长"
      }
      return name;
    }
  },
  methods: {

  },
  created(){
    this.$store.commit("setMenu", [false, true]);
  }
}