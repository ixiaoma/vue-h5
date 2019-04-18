<style lang="less">
@import './userMailing.less';
</style>
<template>
  <div class="userMailing">
      <div class="address">
          <div class="row_1">
              <span class="iconfont icon-jijian1"></span>
                <input type="text" placeholder="请输入寄件人信息" v-model="mailingInfo"/>
                <i class="fa fa-chevron-right"></i>
          </div>
          <div class="row_2">
              <span class="iconfont icon-shoujian"></span>
                <input type="text" placeholder="请输入收件人信息" v-model="receiptInfo"/>
                <i class="fa fa-chevron-right"></i>
          </div>
      </div>
      <div class="info">
            <mt-field label="快递公司" placeholder="请选择" v-model="expressCompany" readonly @click.native="expressCompanyLoad"></mt-field>
            <mt-field label="寄件类型" placeholder="请选择" v-model="mailingType" readonly @click.native="mailingTypeLoad"></mt-field>
            <mt-field label="寄件方式" placeholder="请输入寄件方式" v-model="mailingWay"></mt-field>
            <mt-field label="付款方式" placeholder="强输入付款方式" v-model="payWay"></mt-field> 
      </div>
      <div class="info">
            <mt-field label="物品信息" placeholder="请选择" v-model="goods" readonly @click.native="toPage(1)"></mt-field>
            <mt-field label="保价" placeholder="请选择" v-model="valuation" readonly @click.native="toPage(2)"></mt-field>          
      </div>   
      <p @click="agreevalue=!agreevalue">
          <i v-if="agreevalue" class="fa fa-check-circle-o blue"></i>
          <i v-else class="fa fa-circle-thin ccc"></i>
          我已阅读并同意《电子运单契约条款》   
      </p>
      <button class="button_blue_long">立即下单</button>
      <mt-popup v-model="popupshowEC" position="bottom" class="popup">
            <div class="mint-msgbox-btns">
            <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancel(1)">取消</button>
            <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirm(1)">确定</button>
            </div>
            <mt-picker :slots="slotExpressCompany" @change="expressCompanyChange" valueKey="name"></mt-picker>    
        </mt-popup>
        <mt-popup v-model="popupshowMT" position="bottom" class="popup">
            <div class="mint-msgbox-btns">
            <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancel(2)">取消</button>
            <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirm(2)">确定</button>
            </div>
            <mt-picker :slots="slotsMailingType" @change="mailingTypeChange" valueKey="name"></mt-picker>    
        </mt-popup>
  </div>
</template>
<script src="./userMailing.js"></script>