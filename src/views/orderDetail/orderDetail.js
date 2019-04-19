export default{
    data(){
        return {
            tel:1234567890
        }
    },
    methods:{
        toPay(){
            this.$router.push({
                name:'orderNumber'    
            })
        }
    },
    created(){
      this.$store.commit("setMenu", [true, false]);
    }
}