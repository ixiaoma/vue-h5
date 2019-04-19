export default {
    name: 'newNo',
    components: {
    },
    data() {
      return {
        phone:'',
        email:'',
        oldpass:'',
        newpass:'',
        confirmpass:''
      }
    },
    methods: {
        submit(){
            this.$router.go(-1)
        }
    },
    created(){
      this.$store.commit("setMenu", [true, false]);
    }
  }