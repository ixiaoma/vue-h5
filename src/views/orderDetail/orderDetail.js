export default{
    data(){
        return {
            detail:{},
            state:null,
            courier:false,
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
        btncode:function(){
            let code = ''
            if(this.detail.orderStatus === 0){
                if(courier){
                    code = this.btnList[3].btncode
                }else{
                    code = this.btnList[0].btncode
                }
            }
            if(this.detail.paymentStatus === 0){
                code = this.btnList[1].btncode
            }
            if(this.detail.orderStatus === 3 || this.detail.orderStatus === 1){
                code = this.btnList[2].btncode
            }
            return code
        },
        btnName:function(){
            let name = ''
            if(this.detail.orderStatus === 0){
                name = this.btnList[this.state].btnName
            }
            return name
        },
        orderNumberShow:function(){
            let numShow = false
            if(this.detail.orderStatus === 0  || this.detail.orderStatus === 1 || this.detail.orderStatus === 3 || this.detail.paymentStatus === 0){
                numShow = true
            }
            return numShow
        },
        moneyShow:function(){
            let moneyShow = false
            if(this.detail.orderStatus === 3 || this.detail.paymentStatus === 0){
                moneyShow = true
            }
            return moneyShow
        },
        statusDetail:function(){
            let detailShow = false
            if(this.detail.orderStatus === 3 || this.detail.orderStatus === 1 ){
                detailShow = true
            }
            return detailShow
        }
    },
    methods:{
        toPay(){
            this.$router.push({
                name:'orderNumber'    
            })
        },
        btnClick(code){
            switch (code){
                case 'calcle':
                    this.$router.push({
                        name:'cancelMailing',
                        query:{orderNum:this.detail.orderNum}
                    })
                    break;
                case 'toPay':
                    //去支付
                    break;   
                case 'checkInfo':
                    //查看物流信息
                    break;
                case 'gotBox':
                    //已取件
                    break;  
            }
        },
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
      this.state = 0
      this.$store.commit("setMenu", [true, false]);
      this.getdetail()
    }
}