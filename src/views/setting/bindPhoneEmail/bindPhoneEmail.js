export default {
    name: 'bindPhoneEmail',
    components: {
    },
    data() {
      return {
        phone:'13661064232',
        email:'2055108207@qq.com',
        code:''
      }
    },
    methods: {
        submit(){
            this.$router.push({
                name:'newNo',
                query:{
                    type:this.$route.query.type
                }
            })
        }
    },
    created(){
      this.$store.commit("setMenu", [true, false]);
    }
  }