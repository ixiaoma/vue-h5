export default{
  data(){
    return {
      selected:'0',
      searchvalue:'',
      routerName:'',
      systemUser:'courier',//courier
      loading:false,
      listData:[1,2,3,4,5,6,7,8,9,10],
      userNav:[
        {
          key:'100',
          name:'全部'
        },
        {
          key:'0',
          name:'待取件'
        },
        {
          key:'26',
          name:'待支付'
        },
        {
          key:'3',
          name:'已签收'
        }
      ],
      courierNav:[
        {
          key:'100',
          name:'全部'
        },
        {
          key:'5',
          name:'待接单'
        },
        {
          key:'0',
          name:'待取件'
        },
        {
          key:'1',
          name:'已取件'
        },
        {
          key:'4',
          name:'已取消'
        }
      ]
    }
  },
  computed:{
    showSearch:function (){
      let flag = this.routerName != 'orderList'
      return flag
    }
  },
  methods:{
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    getInitData(){
      let obj = {
        "objectType":"3",
        "take":"10",
        "skip":0,
        "page":1,
        "pageSize":"10",
        "searchFilter":{"filters":[],"logic":"and"}
      }
      this.$post(this.GLOBAL.API_ORDER_LIST,obj).then(res=>{

      })
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
    this.routerName = this.$route.name
    this.$store.commit("setMenu", [true, false]);
    this.getInitData()
  }
}