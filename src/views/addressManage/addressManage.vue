<style lang="less">
@import "./addressManage.less";
</style>
<template>
  <div class="addressManage">
    <div class="page-search">
      <form action="" target="frameFile" onsubmit="return false;">
         <mt-search v-model="searchvalue" cancel-text="取消" placeholder="搜索" @keyup.enter.native="loadListData"></mt-search>
      </form>
    </div>
    <div class="navbar">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">收件人地址</mt-tab-item>
        <mt-tab-item id="2">寄件人地址</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="info">
        <div class="list-item" v-for="(item,key) in addressData" :key="key">
        <div class="address-text" @click="toPage(item)">
          <p>
            <span>{{item.userName}}</span>
            <span>{{item.telephone}}</span>
          </p>
          <p>{{ item.address }}</p>
        </div>
        <div class="handle">
          <div class="operation">
            <p @click="toAdd(2,item.id)">
              <i class="fa fa-pencil fa-fw"></i>编辑
            </p>
            <p @click="openDele(item.id)">
              <i class="fa fa-trash-o fa-fw"></i>删除
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="button_blue_long" @click="toPage">新增地址</button>
  </div>
</template>
<script src="./addressManage.js"></script>