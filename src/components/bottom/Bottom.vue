<template>
  <div class="bottom">
    <div v-for="(item,key) in menu" :key="key" v-if="item.isShow">
      <div class="btm-text" @click="linkeTo(item.name,item.routeName)">
        <div :class="{ active : item.active}">
          <i :class="item.icon"></i>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Bottom.js"></script>
<style scoped>
  .bottom {
    background-color: #f7f7fa;
    display: flex;
    color: #999999;
    text-align: center;
    height: 42px;
    font-size: 12px;
    padding: 5px 0;
    border-top: 1px solid #cccccf;
  }

  .bottom > div {
    flex: 1;
  }

  .btm-text {
    line-height: 20px;
  }

  .btm-text > div > i {
    font-size: 26px;
  }

  .active {
    color: #f97910;
  }
</style>
