export default {
    name: 'accountSafe',
    components: {
    },
    data() {
      return {
        phone:'13661064232',
        email:'2055108207@qq.com'
      }
    },
    methods: {
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
      this.$store.commit("setMenu", [true, false]);
    }
  }