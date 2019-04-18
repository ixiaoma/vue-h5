import Vue from 'vue'; 
export default {
    name: 'cancelMailing',
    components: {},
    data() {
        return {
            num:1,
            reasonList:[
                {id:'1',name:'计划有变，暂时不需要寄件了',checked:false},
                {id:'2',name:'赶时间，更改为其他寄件方式',checked:false},
                {id:'3',name:'预约信息有误，需要修改',checked:false},
                {id:'4',name:'误发预约',checked:false},
                {id:'-1',name:'其他',checked:false}
            ],
            remark:''
        }
    },
    computed: {},
    methods: {
        setConfig() {
            this.$store.commit("setMenu", [true, true]);
        },
        checkload(item,index){
            this.reasonList.forEach(element => {
                element.checked=false
            });
            item.checked=true
        }
    },
    created() {
        this.setConfig()
    }
}