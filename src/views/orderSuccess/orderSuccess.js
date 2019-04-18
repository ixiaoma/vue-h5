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
    },
    created() {
        this.setConfig()
    }
}