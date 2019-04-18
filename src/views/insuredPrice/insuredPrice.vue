<style lang="less">
@import "./insuredPrice.less";
</style>
<template>
  <div class="insuredPrice">
    <div class="info">
      <div class="info_price">
        <p>声明价值:</p>
        <input type="number" v-model="num">元
      </div>
      <span class="remark">费用：1元</span>
    </div>
    <div class="button">
        <button class="button_blue_long">不保价</button>
        <button class="button_blue_long">确认保价</button>
    </div>
    
  </div>
</template>
<script src="./insuredPrice.js"></script>