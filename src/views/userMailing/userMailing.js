import Vue from 'vue'; export default {
    name: 'userMailing',
    components: {},
    data() {
        return {
            mailingInfo: '',//寄件人信息
            receiptInfo: '',//收件人信息
            expressCompany: '',//快递公司
            mailingType: '',//寄件类型
            mailingWay: '',//寄件方式
            payWay: '',//付款方式
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
            // this.slotExpressCompany[0].values = []
            // let params = {

            // }
            // let url = ''
            // this.$post(url, params).then(res => {
            //     if (res.data.retCode == 200) {
            //         let slotExpressCompany = res.data.data
            //         slotExpressCompany.map(item => {
            //             let obj = {
            //                 name: item.className,
            //                 value: item.id
            //             }
            //             this.slotExpressCompany[0].values.push(obj)
            //         })
            //     }
            // })
            this.slotExpressCompany[0].values=[
                {name:'测试1',value:'1'},
                {name:'测试2',value:'2'}
            ]
            this.popupshowEC = true
        },
        expressCompanyChange(picker, values) {//快递公司 改变  
            if (values[0]) {
                this.expressCompanyhide = values[0].name
                this.expressCompanyhideid = values[0].value
            }
        },
        mailingTypeLoad() {//寄件类型
            // this.slotsMailingType[0].values = []
            // let params = {

            // }
            // let url = ''
            // this.$post(url, params).then(res => {
            //     if (res.data.retCode == 200) {
            //         let slotsMailingType = res.data.data
            //         slotsMailingType.map(item => {
            //             let obj = {
            //                 name: item.className,
            //                 value: item.id
            //             }
            //             this.slotsMailingType[0].values.push(obj)
            //         })
            //     }
            // })
            this.slotsMailingType[0].values=[
                {name:'测试1',value:'1'},
                {name:'测试2',value:'2'}
            ]
            this.popupshowMT = true
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
    },
    created() {
        this.setConfig()
    }
}