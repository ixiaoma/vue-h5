<style lang="less">
@import './senderAdd.less';
</style>
<template>
  <div class="senderAdd">
      <div class="info">
            <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
            <mt-field label="电话" placeholder="强输入电话" v-model="tele"></mt-field> 
            <mt-field label="门店" placeholder="请选择" v-model="store" readonly @click.native="storeLoad"></mt-field>
            <mt-field label="详细地址" placeholder="请输入详细地址" type="textarea" rows="3" v-model="address"></mt-field>
      </div>  
      <button class="button_blue_long">保存</button>
      <mt-popup v-model="popupshowStore" position="bottom" class="popup">
            <div class="mint-msgbox-btns">
            <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancel(1)">取消</button>
            <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirm(1)">确定</button>
            </div>
            <mt-picker :slots="slotstore" @change="storeChange" valueKey="name"></mt-picker>    
        </mt-popup>
  </div>
</template>
<script src="./senderAdd.js"></script>