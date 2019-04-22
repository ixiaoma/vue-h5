export default{
  data(){
    return {
      selected:'全部',
      searchvalue:'',
      routerName:'',
      searchData:{
        "objectType":"3",
        "take":"10",
        "skip":0,
        "page":0,
        "pageSize":"10",
        "searchFilter":{"filters":[],"logic":"and"}
      },
      loading:false,
      listData:[]
    }
  },
  computed:{
    showSearch:function (){
      let flag = this.routerName != 'orderList'
      return flag
    },
    navList:function(){
      let list = this.routerName == 'orderList' ? ['全部','待取件','待支付','已签收'] : ['全部','待接单','待取件','已取件','已取消']
      return list
    }
  },
  methods:{
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
      this.loadMore()
    },
    loadMore(flag) {
      this.loading = true;
      !flag && this.searchData.page ++
      let searchObj = {}
      if(this.searchvalue){
        searchObj = {
          searchConditionQO : this.searchData,
          nameTelephone:this.searchvalue
        }
      }else{
        searchObj = this.searchData
      }
      let url = this.routerName == 'orderList' ? this.GLOBAL.API_USER_ORDER_LIST : this.GLOBAL.API_ORDER_LIST
      this.$post(url,searchObj).then(res=>{
        res.data.records.forEach(item=>{
          let status = ''
          switch (item.orderStatus){
            case 0:
              status = '待取件'
              break;
            case 1:
              status = '已取件'
              break;
            case 2:
              status = '已发出'
              break;
            case 3:
              status = '已签收'
              break;
            case 4:
              status = '已取消'
              break;
            case 5:
              status = '待接单'
              break;
          }
          item.status = item.paymentStatus === 0 ? '待支付' : status
        })
          this.listData = res.data.records
      })
    },
    searchFn(){
      this.searchData.page = 1
      this.searchData.searchFilter.filters=[]
      if(this.selected != '全部'){
        let fieldKey = this.selected == '待支付' ? "orderStatus" : 'paymentStatus'
        this.searchData.searchFilter.filters.push({value: this.selected, operator: "eq", field: fieldKey})
      }
      this.loadMore(1)
    },
    toPayOrder(item) { //2.使用orderCode唤起支付
      var url = 'http://api.bookshop.ui-tech.cn/pay/order/1';
      this.$post(url).then(res => {
        if (res.data.retCode == 200) {
          let params = JSON.parse(res.data.data);
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
              document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
          } else {
            this.onBridgeReady(params);
          }
        } else {
          this.Toast({
            message: res.data.message,
            position: 'center',
            duration: 5000
          })
        }
      }).catch(res => {
        console.log(res);
      })
    },
    onBridgeReady(params) { //3.使用微信内部方法完成支付操作
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', params,
        res=>{
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            this.$router.push('orderDetail');
          } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
            this.$router.push('orderDetail');
          } else {
            alert("支付失败!");
          }
        });
    },
    cancleOrder(item){
      this.$router.push({
        name:'cancelMailing',
        query:{
          orderNum:item.orderNum
        }
      })
    },
    toDetail(detailId){
      let routerQuery = {
        detailId:detailId
      }
      if(this.routerName != 'orderList'){
          routerQuery.courier = 1
      }
      this.$router.push({name:'orderDetail',query:routerQuery})
    }
  },
  created(){
    this.routerName = this.$route.name
    if(this.$route.name != 'orderList'){
      this.$route.meta.title = this.$route.name == 'nowUser' ? '现结用户' : '月结用户'
    }
    this.$store.commit("setMenu", [true, false]);
  }
}