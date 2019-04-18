import Vue from 'vue'; 
export default {
    name: 'goodsInfo',
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
    },
    created() {
        this.setConfig()
    }
}