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
        }
    },
    created() {
        this.setConfig()
    }
}