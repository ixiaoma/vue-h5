export default{
  data(){
    return {
      selected:'0',
      listData:[1,2,3,4,5,6,7,8,9,10]
    }
  },
  methods:{
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.listData[this.listData.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.listData.push(last + i);
        }
        this.loading = false;
      }, 2500);
    },
    toPayOrder(item){

    },
    cancleOrder(item){

    },
    toDetail(item){
      this.$router.push({name:'orderDetail'})
    }
  },
  created(){
    this.$store.commit("setMenu", [true, false]);
  }
}