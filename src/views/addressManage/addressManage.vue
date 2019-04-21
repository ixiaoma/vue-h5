<style lang="less">
@import "./addressManage.less";
</style>
<template>
  <div class="addressManage">
    <div class="page-search">
      <form action="" target="frameFile" onsubmit="return false;">
         <mt-search v-model="searchvalue" cancel-text="取消" placeholder="搜索" @keyup.enter.native="getAddress"></mt-search>
      </form>
    </div>
    <div class="navbar">
      <mt-navbar v-model="selected" @click.native="getAddress">
        <mt-tab-item id="13">收件人地址</mt-tab-item>
        <mt-tab-item id="5">寄件人地址</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="info" >
            <ul>
                <li class="list-item" v-for="(item,key) in addressData" :key="key">
                    <div class="address-text" @click="toUserMail(item)">
                      <p>
                        <span>{{item.name}}</span>
                        <span>{{item.telephone}}</span>
                      </p>
                      <p>{{ item.province + item.city + item.county}}</p>
                    </div>
                    <div class="handle">
                      <div class="operation">
                        <p @click="toAdd(item.id)">
                          <i class="fa fa-pencil fa-fw"></i>编辑
                        </p>
                        <p @click="openDele(item.id)">
                          <i class="fa fa-trash-o fa-fw"></i>删除
                        </p>
                      </div>
                    </div>
                </li>
            </ul>
    </div>
    <button class="button_blue_long" @click="toPage">新增地址</button>
  </div>
</template>
<script src="./addressManage.js"></script>