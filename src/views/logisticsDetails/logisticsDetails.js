export default{
    data(){
        return {
            detail:{},
            btnList:[
                {
                    btncode:'calcle',
                    btnName:'取消订单'
                },
                {
                    btncode:'toPay',
                    btnName:'去支付'
                },
                {
                    btncode:'checkInfo',
                    btnName:'查看物流信息'
                },
                {
                    btncode:'gotBox',
                    btnName:'已取件'
                }
            ],
            type:[
                {id:1,name:'控温'},
                {id:2,name:'鲜活'},
                {id:3,name:'标准快递'},
                {id:4,name:'特配'},
                {id:5,name:'填仓'},
                {id:6,name:'深冷'},
                {id:7,name:'特准送'},
                {id:8,name:'冷藏'},
                {id:9,name:'冷冻'},
                {id:10,name:'其他'},
            ]
        }
    },
    computed:{
        showCourier:function(){
            return this.$route.query.showCourier
        }
    },
    methods:{
        getdetail(){
            this.$get(this.GLOBAL.API_GET_ORDERDETAIL+ this.$route.query.detailId).then(res=>{
                this.detail = res.data
                this.type.forEach(ele => {
                    if(ele.id == this.detail.expressType){
                        this.detail.expressType = ele.name
                    }
                });
            })
        },
    },
    created(){
      this.$route.meta.title = '物流详情'
      this.$store.commit("setMenu", [true, false]);
      this.getdetail()
    }
}