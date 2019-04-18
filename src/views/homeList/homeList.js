import Vue from 'vue';
export default {
  name: 'homeList',
  components: {},
  data() {
    return {
      
    }
  },
  computed: {},
  methods: {
    setConfig() {
      this.$store.commit("setMenu", [false, true]);
    }
  },
  created() {
    this.setConfig()
  }
}