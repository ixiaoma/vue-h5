export default {
    name: 'setting',
    components: {
    },
    data() {
      return {
      
      }
    },
    methods: {

    },
    created(){
      this.$store.commit("setMenu", [true, false]);
    }
  }