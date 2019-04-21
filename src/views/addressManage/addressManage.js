import Vue from 'vue'; 
export default {
    name: 'addressManage',
    components: {},
    data() {
        return {
            selected:'13',
            searchvalue:'',
            addressData:[]
            
        }
    },
    computed: {},
    methods: {
        selectchang(num){
            this.getAddress()
        },
        getAddress(){
            let params ={
                "objectType":this.selected,
                "take":"10",
                "skip":0,
                "page":1,
                "pageSize":"10",
                "searchFilter":{"filters":[],"logic":"and"}
            }
            this.searchvalue && params.searchFilter.filters.push({field: "name", operator: "contains", value: this.searchvalue})
            this.$post(this.GLOBAL.API_GET_ADDRESS,params).then(res=>{
                    this.addressData = res.data.records
            })
        },
        setConfig() {
            this.$store.commit("setMenu", [false, true]);
        },
        loadListData(){
            this.getAddress()
        },
        toPage(){
            if(this.selected=='13'){
                this.$router.push({
                    name:'recipientAdd'
                })
            }else if(this.selected=='5'){
                this.$router.push({
                    name:'senderAdd'
                })
            }
        },
        toAdd(id){
            if(this.selected=='13'){
                this.$router.push({
                    name:'recipientAdd',
                    query:{
                        type:'addressedit',
                        id:id
                    }
                })
            }else if(this.selected=='5'){
                this.$router.push({
                    name:'senderAdd',
                    query:{
                        type:'addressedit',
                        id:id
                    }
                })
            }
        },
        openDele(id){
            this.MessageBox.confirm('确定执行此操作?').then(action => {
                if(action=='confirm'){
                    this.$post(this.GLOBAL.API_DEL_ADDRESS,[id]).then(res=>{
                        this.getAddress()
                    })
                    this.Toast("ok")
                }else{
                    console.log('取消')
                }
            }).catch(err=>{
                console.log('取消')
            });
        }             
    },
    created() {
        this.setConfig()
        this.$route.query.select && (this.selected = this.$route.query.select)
        this.getAddress()
    }
}