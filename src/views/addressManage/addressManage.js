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
        }             
    },
    created() {
        this.setConfig()
    }
}