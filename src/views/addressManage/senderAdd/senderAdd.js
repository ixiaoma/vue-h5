import Vue from 'vue'; 
export default {
    name: 'senderAdd',
    components: {},
    data() {
        return {
            saveobj:{
                name:'',
                telephone:'',
                detailedAddress:'',
                type:'2'
            },
            store: '',
            //快递公司
            popupshowStore: false,//快递公司 下拉框
            slotstore: [
                {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }
            ],
            storehide: '',
            storehideid: '',
            storeId: ''
        }
    },
    computed: {},
    methods: {
        sendersave(){
            if(this.$route.query.id){//编辑保存
                this.$post(this.GLOBAL.API_EDIT_ADDRESS,this.saveobj).then(res=>{
                    this.$router.push({
                        name:'addressManage',
                        query:{
                            select:'5'
                        }
                    })
                })
            }else{//新增保存
                this.$post(this.GLOBAL.API_ADD_ADDRESS,this.saveobj).then(res=>{
                    this.$router.push({
                        name:'addressManage',
                        query:{
                            select:'5'
                        }
                    })
                })
            }
        },
        setConfig() {
            this.$store.commit("setMenu", [true, true]);
        },
        storeLoad() {//快递公司
            // this.slotstore[0].values = []
            // let params = {

            // }
            // let url = ''
            // this.$post(url, params).then(res => {
            //     if (res.data.retCode == 200) {
            //         let slotstore = res.data.data
            //         slotstore.map(item => {
            //             let obj = {
            //                 name: item.className,
            //                 value: item.id
            //             }
            //             this.slotstore[0].values.push(obj)
            //         })
            //     }
            // })
            this.slotstore[0].values=[
                {name:'测试1',value:'1'},
                {name:'测试2',value:'2'}
            ]
            this.popupshowStore = true
        },
        storeChange(picker, values) {//快递公司 改变  
            if (values[0]) {
                this.storehide = values[0].name
                this.storehideid = values[0].value
            }
        },
        confirm(value) {
            if (value == 1) {
                this.popupshowStore = false
                this.store = this.storehide
                this.storeId = this.storehideid
            }
        },
        cancel(value) {
            if (value == 1) {
                this.popupshowStore = false
            }
        },
    },
    created() {
        this.setConfig()
        this.$route.query.id && this.$get(this.GLOBAL.API_GET_ADDRESS_DETAILS+this.$route.query.id).then(res=>{
            this.saveobj =res.data
        })
    }
}