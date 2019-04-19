export default{
    data(){
        return {
            tel:1234567890,
            state:null,
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
            ]
        }
    },
    computed:{
        btncode:function(){
            let code = ''
            if(this.state == 0){
                code = this.btnList[this.state].btncode
            }
            return code
        },
        btnName:function(){
            let name = ''
            if(this.state == 0){
                name = this.btnList[this.state].btnName
            }
            return name
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
                    //取消订单
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
        }
    },
    created(){
        this.state = 0
      this.$store.commit("setMenu", [true, false]);
    }
}