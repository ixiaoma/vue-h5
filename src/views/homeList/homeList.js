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
        
    }
  },
  created() {
    this.setConfig()
  }
}