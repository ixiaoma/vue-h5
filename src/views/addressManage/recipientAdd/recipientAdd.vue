<style lang="less">
@import './recipientAdd.less';
</style>
<template>
  <div class="recipientAdd">
      <div class="info">
            <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
            <mt-field label="电话" placeholder="强输入电话" v-model="tele"></mt-field>          
            <mt-field label="省份" placeholder="请选择省份" v-model="province" readonly @click.native="selectTypeLoad(1)">
            </mt-field>
            <mt-field label="市级" placeholder="请选择市区" v-model="city" readonly @click.native="selectTypeLoad(2)">
            </mt-field>
            <mt-field label="县级" placeholder="请选择县区" v-model="county" readonly @click.native="selectTypeLoad(3)">
            </mt-field>
            <mt-field label="详细地址" placeholder="请输入详细地址" type="textarea" rows="3" v-model="address"></mt-field>
      </div>  
      <button class="button_blue_long">保存</button>
      <!-- 省份 -->
      <mt-popup v-model="ProvinceShow" position="bottom" class="popup">
        <div class="mint-msgbox-btns">
          <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancelType()">取消</button>
          <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirmType(1)">确定</button>
        </div>
        <mt-picker :slots="ProvinceArr" v-if="ProvinceArr[0].values.length" :value-key="'name'" @change="provinceChange"></mt-picker>
      </mt-popup>
      <!-- 市级 -->
      <mt-popup
        v-model="CityShow"
        position="bottom" class="popup">
        <div class="mint-msgbox-btns">
          <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancelType()">取消</button>
          <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirmType(2)">确定</button>
        </div>
        <mt-picker :slots="CitylArr" v-if="CitylArr[0].values.length" :value-key="'name'" @change="cityChange"></mt-picker>
      </mt-popup>
      <!-- 县区 -->
      <mt-popup
        v-model="countyShow"
        position="bottom" class="popup">
        <div class="mint-msgbox-btns">
          <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancelType()">取消</button>
          <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirmType(3)">确定</button>
        </div>
        <mt-picker :slots="countyArr" v-if="countyArr[0].values.length" :value-key="'name'" @change="conntyChange"></mt-picker>
      </mt-popup>
  </div>
</template>
<script src="./recipientAdd.js"></script>