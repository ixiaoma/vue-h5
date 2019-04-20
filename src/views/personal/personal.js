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
    toPage(){
      this.$router.push({name:'personalEdit'})
    }
  },
  created(){
    this.$store.commit("setMenu", [false, true]);
  }
}