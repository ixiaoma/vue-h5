export default{
  data(){
    return {
      selected:'0',
      searchvalue:'',
      systemUser:'courier',
      listData:[1,2,3,4,5,6,7,8,9,10],
      userNav:[
        {
          key:'0',
          name:'全部'
        },
        {
          key:'1',
          name:'待取件'
        },
        {
          key:'2',
          name:'待支付'
        },
        {
          key:'3',
          name:'已签收'
        }
      ],
      courierNav:[
        {
          key:'0',
          name:'全部'
        },
        {
          key:'1',
          name:'待取件'
        },
        {
          key:'2',
          name:'已取件'
        },
        {
          key:'3',
          name:'已取消'
        }
      ]
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
      this.$router.push({
        name:'cancelMailing',
        id:item.key
      })
    },
    toDetail(item){
      this.$router.push({name:'orderDetail'})
    },
    loadListData(){
      
    }
  },
  created(){
    this.$store.commit("setMenu", [true, false]);
  }
}