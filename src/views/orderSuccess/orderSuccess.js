import Vue from 'vue'; 
export default {
    name: 'orderSuccess',
    components: {},
    data() {
        return {
            num:1
        }
    },
    computed: {},
    methods: {
        setConfig() {
            this.$store.commit("setMenu", [true, true]);
        },
        toPage(){
            this.$router.push({
                name:'orderDetail'
            })
        }
    },
    created() {
        this.setConfig()
    }
}