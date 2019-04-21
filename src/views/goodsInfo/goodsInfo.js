import Vue from 'vue'; 
export default {
    name: 'goodsInfo',
    components: {},
    data() {
        return {
            goodsType:[
                {id:'1',name:'日用品'},
                {id:'2',name:'食品'},
                {id:'3',name:'文件'},
                {id:'4',name:'数码产品'},
                {id:'5',name:'衣物'},
                {id:'6',name:'其他'}
            ],
            current:-1,
            num:1
        }
    },
    computed: {},
    methods: {
        setConfig() {
            this.$store.commit("setMenu", [true, true]);
        },
        selectgoods(index){
            this.current=index
        },
        add(){
            this.num++
        },
        reduce(){
            if(this.num>1){
                this.num--
            }      
        },
        goodssave(){
            let goodsType=''
            this.goodsType.forEach((item,index)=>{
                if(index==this.current){
                    goodsType=this.goodsType[index].name
                }
            })
            this.$store.commit('goodsVuexLoad',[goodsType,this.num])
            this.$router.go(-1)
        }
    },
    created() {
        this.setConfig()
        this.goods=this.$store.state.goodsVuex
        this.num=this.$store.state.weightVuex
        this.goodsType.forEach((item,index)=>{
            if(item.name==this.goods){
                this.current=index
            }
        })
    }
}