<style lang="less">
@import './personalEdit.less';
</style>
<template>
    <div class="personalEdit">
        <div class="personalInformation" @click="editImage">
            <img :src="userInfo.wechatImage">
            <div class="topage">修改头像</div>
        </div>
        <div class="personalList">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="nickname"></mt-field>
            <mt-field label="性别" placeholder="请选择" v-model="sex" readonly @click.native="sexLoad"></mt-field>
            <mt-field label="公司信息" placeholder="请输入公司信息" v-model="company"></mt-field>
        </div>
        <button class="button_blue_long" @click="submit">保存</button>
        <mt-popup v-model="popupshowSex" position="bottom" class="popup">
            <div class="mint-msgbox-btns">
            <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancel(1)">取消</button>
            <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirm(1)">确定</button>
            </div>
            <mt-picker :slots="slotsex" @change="sexChange" valueKey="name"></mt-picker>    
        </mt-popup>
    </div>
</template>
<script src="./personalEdit.js"></script>



