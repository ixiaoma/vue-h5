<template>
  <div id="home">
    <top class="header" v-if="$store.state.isHeader"></top>
    <article>
      <router-view :key="activeDate"/>
    </article>
    <bottom class="footer" v-if="$store.state.isFooter"></bottom>
  </div>
</template>

<script>
  import bottom from '@/components/bottom/Bottom.vue'
  import top from '@/components/top/Top.vue'

  export default {
    name: 'home',
    components: { bottom, top },
    watch: {
      $route: {
        handler() {
          this.activeDate=new Date().getTime()
        },
        immediate: true
      }
    },
    data(){
      return {
        activeDate:new Date().getTime()
      }
    },
    methods: {},
    created(){}
  }
</script>
<style>
  #home {
    font-size: 12px
  }
</style>

