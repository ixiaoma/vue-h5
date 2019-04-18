<style lang="less">
@import './homeList.less';
</style>
<template>
  <div class="homeList">
   <!-- <NoData></NoData> -->
   <div class="row" @click="toPage(1)">
     <span class="iconfont icon-icon--copy"></span>
     <p>我的订单</p>
   </div>
   <div class="row" @click="toPage(2)">
     <span class="iconfont icon-jijian-copy"></span>
     <p>我要寄件</p>
   </div>
   <div class="row-2">
     <div class="col" @click="toPage(3)"><span class="iconfont icon-xingtaiduICON_sousuo--"></span><p>查询物流</p></div>
     <div class="col" @click="toPage(4)"><span class="iconfont icon-dizhi-copy"></span><p>地址管理</p></div>
   </div>
  </div>
</template>
<script src="./homeList.js"></script>



