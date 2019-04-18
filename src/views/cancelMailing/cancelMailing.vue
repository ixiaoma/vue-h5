<style lang="less">
@import "./cancelMailing.less";
</style>
<template>
  <div class="cancelMailing">
    <div class="info">
      <p>预约已取消,请告诉我们原因</p>
      <span>我们会为您提供更好的服务</span>
    </div>
    <div class="info_remark">
      <p>取消原因</p>
      <div>
        <p v-for="item in reasonList" @click="checkload(item)">
            <i class="fa fa-dot-circle-o blue-font"  v-if="item.checked"></i>
          <i class="fa fa-circle-o color999-font" v-else></i>      
          {{item.name}}
        </p>
        <textarea v-model="remark" placeholder="请输入10个字以上"/>
      </div>
    </div>
    <button class="button_blue_long">提交</button>
  </div>
</template>
<script src="./cancelMailing.js"></script>