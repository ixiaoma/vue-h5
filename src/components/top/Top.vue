<template>
  <div class="top">
    <mt-header :title="title">
      <!--<router-link to="/" slot="left">-->
        <mt-button icon="back" slot="left" @click.native="back">返回</mt-button>
      <!--</router-link>-->
      <!--<router-link  to="" slot="right" >-->
        <mt-button v-if="$store.state.clearAllShop" @click.native="clearAllCar"  slot="right">清空购物车</mt-button>
      <!--</router-link>-->
    </mt-header>
  </div>
</template>
<script src="./Top.js"></script>
<style>
.mint-header-title {
  font-size: 14px;
}
.icon-bar {
  padding: 0 10px;
}
/*.top {
  margin-bottom: 2px;
}*/
</style>
