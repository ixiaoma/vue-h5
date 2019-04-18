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
      this.$store.commit("setMenu", [true, true]);
    },
    toPage(value){
      let toName = ''
        if(value == 1){
          toName = 'orderList'
        }else if(value==2){
          toName='userMailing'
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