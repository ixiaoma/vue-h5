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
      this.title = newRoute.meta.title
    }
  },
  mounted(){
    this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
    this.title=this.$route.meta.title  
  }
}
