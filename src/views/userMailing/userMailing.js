import Vue from 'vue'; 
export default {
    name: 'userMailing',
    components: {},
    data() {
        return {
            mailingInfo: '',//寄件人信息
            receiptInfo: '',//收件人信息
            expressCompany: '',//快递公司
            mailingType: '',//寄件类型
            mailingWay: '楼点点（上门取件）',//寄件方式
            payWay: '现结',//付款方式  0
            goods:'',//物品信息
            valuation:'',//保价
            agreevalue:true,//同意复选框
            options:[{label: '我已阅读并同意《电子运单契约条款》',value: '1'}],//同意复选框
            popupshowEC: false,//快递公司 下拉框
            slotExpressCompany: [
                {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }
            ],
            expressCompanyhide: '',
            expressCompanyhideid: '',
            expressCompanyId: '',
            popupshowMT: false,//寄件类型 下拉框
            slotsMailingType: [
                {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }
            ],
            mailingTypehide: '',
            mailingTypehideid: '',
            mailingTypeId: '',
        }
    },
    computed: {},
    methods: {
        setConfig() {
            this.$store.commit("setMenu", [true, true]);
        },
        expressCompanyLoad() {//快递公司
            this.slotExpressCompany[0].values = []
            let url = this.GLOBAL.API_SUBORDINATE_COMPANY
            let params={
                customerType:'C'
            }
            this.$post(url,params).then(res => {
                if (res.status == 200) {
                    let slotExpressCompany = res.data.data
                    slotExpressCompany.map(item => {
                        let obj = {
                            name: item.name,
                            value: item.id
                        }
                        this.slotExpressCompany[0].values.push(obj)
                    })
                }
            })
            this.popupshowEC = true
        },
        expressCompanyChange(picker, values) {//快递公司 改变  
            if (values[0]) {
                this.expressCompanyhide = values[0].name
                this.expressCompanyhideid = values[0].value
            }
        },
        mailingTypeLoad() {//寄件类型
            if(this.expressCompanyId){
                this.slotsMailingType[0].values = []
                let params = {
                    expressCompanyId:this.expressCompanyId
                }
                let url = this.GLOBAL.API_SUBORDINATE_TYPE
                this.$get(url, params).then(res => {
                    if (res.status == 200) {
                        let slotsMailingType = res.data
                        slotsMailingType.map(item => {
                            let obj = {
                                name: item.businessTypeName,
                                value: item.businessType
                            }
                            this.slotsMailingType[0].values.push(obj)
                        })
                    }
                })
                this.popupshowMT = true
            }
        },
        mailingTypeChange(picker, values) {//寄件类型 改变
            if (values[0]) {
                this.mailingTypehide = values[0].name
                this.mailingTypehideid = values[0].value
            }
        },
        confirm(value) {
            if (value == 1) {
                this.popupshowEC = false
                this.expressCompany = this.expressCompanyhide
                this.expressCompanyId = this.expressCompanyhideid
            } else if (value == 2) {
                this.popupshowMT = false
                this.mailingType = this.mailingTypehide
                this.mailingTypeId = this.mailingTypehideid
            }
        },
        cancel(value) {
            if (value == 1) {
                this.popupshowEC = false
            } else if (value == 2) {
                this.popupshowMT = false
            }
        },
        toPage(value){
            let pushName=''
            if(value==0){
                pushName='senderAdd'
            }else if(value==1){
                pushName='addressManage'
            }else if(value==2){
                pushName='goodsInfo'
            }else if(value==3){
                pushName='insuredPrice'
            }else if(value==4){
                pushName='orderSuccess'
                let params={
                    orderType: 'LC',
                    paymentMethod:0,
                    mailingWay:this.mailingWay,
                    receiverMessage:this.receiptInfo, //收件人地址
                    senderMessage:this.mailingInfo, //寄件人地址
                    expressCompanyId:this.expressCompanyId,//快递公司
                }
                this.$post(this.GLOBAL.API_ME_MAILING,params).then(res => {
                    if (res.status == 200) {                    
                        sessionStorage.setItem('access_token', res.headers.authorization)
                        sessionStorage.setItem('userType','courier');
                        this.userInfoLoad()        
                        Cookies.set('username',this.name) 
                        Cookies.set('password',this.password)             
                    }
                }).catch(err => {
                    console.log('接口异常')
                })
            }
            this.$router.push({
                name:pushName
            })
        },
    },
    created() {
        this.setConfig()
        this.goods=this.$store.state.goodsVuex
        this.$store.state.weightVuex
        this.$store.state.receiptInfoid//收件人id
        this.$store.state.receiptInfoname//收件人姓名
        this.$store.state.receiptInfotelephone//收件人电话
        this.$store.state.receiptInfoprovince//收件人省
        this.$store.state.receiptInfocity//收件人市
        this.$store.state.receiptInfocounty//收件人区
        this.receiptInfo=this.$store.state.receiptInfoprovince+this.$store.state.receiptInfocity+this.$store.state.receiptInfocounty+this.$store.state.receiptInfodetailedAddress//收件人详细地址
    }
}