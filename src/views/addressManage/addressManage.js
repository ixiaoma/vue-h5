import Vue from 'vue'; 
export default {
    name: 'addressManage',
    components: {},
    data() {
        return {
            selected:'13',
            searchvalue:'',
            addressData:[],
            loading:false,
            page:1,
            num:0
        }
    },
    computed: {},
    methods: {
        selectchang(){
            this.page = 1 
            this.num = 1
            this.addressData =[] 
            this.getAddress()
        },
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
            // this.getAddress()
        },
        down(){
            this.page = ++ this.num 
            this.getAddress()
        },
        getAddress(){
            let params ={
                "objectType":this.selected,
                "take":"10",
                "skip":0,
                "page":this.page,
                "pageSize":"10",
                "searchFilter":{"filters":[],"logic":"and"}
            }
            this.searchvalue && params.searchFilter.filters.push({field: "name", operator: "contains", value: this.searchvalue})
            this.$post(this.GLOBAL.API_GET_ADDRESS,params).then(res=>{
                if(res.status==200){
                    this.addressData = this.addressData.concat(res.data.records)
                }else{
                    this.addressData =[] 
                }
            }).catch(err=>{
                this.addressData =[] 
            })
        },
        loadListData(){
            this.page = 1 
            this.num = 1
            this.addressData =[] 
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
                        if(res.status==200){
                            for (let i = 0; i <  this.addressData.length; i++) {
                                if(this.addressData[i].id==id){
                                    this.addressData.splice(i,1)
                                }
                            }
                        }
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
        this.$store.commit("setMenu", [false, true]);
        this.$route.query.select && (this.selected = this.$route.query.select)
    }
}