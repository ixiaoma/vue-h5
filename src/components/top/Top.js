export default {
  name: 'Top',
  components: {},
  data(){
    return {
      clearAllShop:false,
      title:'',
      userInfo:null
    }
  },
  methods:{
    back() {
      this.$router.go(-1);
    },
    clearAllCar() {
      this.bus.$emit('clearAllData');
    }
  },
  watch: {
    $route(newRoute) {
      // console.log(newRoute)
      this.title = newRoute.meta.title
    }
  },
  mounted(){
    this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
    this.title=this.$route.meta.title
    // if(this.$route.name=="order"&&(this.userInfo.userType==1||this.userInfo.userType==4||this.userInfo.userType==5)){
    //   this.title='所有订单'
    // }else{
    //   this.title=this.$route.meta.title
    // }      
  }
}
