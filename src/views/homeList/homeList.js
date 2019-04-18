import Vue from 'vue';
import NoData from '@/components/NoData/NoData.vue';
export default {
  name: 'homeList',
  components: {
    NoData
  },
  data() {
    return {
      
    }
  },
  computed: {},
  methods: {
    setConfig() {
      this.$store.commit("setMenu", [true, false]);
    },
    toPage(value){
      let toName = ''
        if(value == 1){
          toName = 'userOrder'
        }
        this.$router.push({
          name:toName
        })
    }
  },
  created() {
    this.setConfig()
  }
}