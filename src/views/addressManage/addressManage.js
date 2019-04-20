import Vue from 'vue'; 
export default {
    name: 'addressManage',
    components: {},
    data() {
        return {
            selected:'1',
            searchvalue:'',
            addressData:[
                {
                    userName:'叶落森',
                    telephone:'13661064232',
                    address:'北京市海淀区联想北研' 
                },
                {
                    userName:'叶落森',
                    telephone:'13661064232',
                    address:'北京市海淀区联想北研' 
                },
                {
                    userName:'叶落森',
                    telephone:'13661064232',
                    address:'北京市海淀区联想北研' 
                },
                {
                    userName:'叶落森',
                    telephone:'13661064232',
                    address:'北京市海淀区联想北研' 
                },
                {
                    userName:'叶落森',
                    telephone:'13661064232',
                    address:'北京市海淀区联想北研' 
                },
                {
                    userName:'叶落森',
                    telephone:'13661064232',
                    address:'北京市海淀区联想北研' 
                },
                {
                    userName:'叶落森',
                    telephone:'13661064232',
                    address:'北京市海淀区联想北研' 
                }
            ]
        }
    },
    computed: {},
    methods: {
        setConfig() {
            this.$store.commit("setMenu", [false, true]);
        },
        loadListData(){

        },
        toPage(){
            if(this.selected=='1'){
                this.$router.push({
                    name:'recipientAdd'
                })
            }else if(this.selected=='2'){
                this.$router.push({
                    name:'senderAdd'
                })
            }
        },
        toAdd(value,id){
            if(this.selected=='1'){
                this.$router.push({
                    name:'recipientAdd',
                    query:{
                        type:'addressedit',
                        id:id
                    }
                })
            }else if(this.selected=='2'){
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
    }
}