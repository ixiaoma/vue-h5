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

  },
  created(){
    this.$store.commit("setMenu", [false, true]);
  }
}