<style lang="less">
@import './personal.less';
</style>
<template>
    <div class="personal">
        <div class="personalInformation">
            <img :src="userInfo.wechatImage">
            <div class="personalInfo">
                <p>昵称：{{userInfo.nickname}}({{userType|typeFilter}})</p>
                <p>关注时间：{{userInfo.createdTime}}</p>
            </div>
            <div class="topage"><i class="fa fa-chevron-right"  @click="toPage"></i></div>
        </div>
        <div class="personalList">
            <mt-cell title="手机号" is-link to="./bindPhoneEmail?type=phone"></mt-cell>
            <mt-cell title="密码" is-link to="./newNo?type=pass"></mt-cell>
            <mt-cell title="用户名" is-link to="./newNo?type=nickname"></mt-cell>
            <mt-cell title="快递公司" is-link to="./newNo?type=ems"></mt-cell>
            <mt-cell title="门店" is-link to="./newNo?type=store"></mt-cell>
            <mt-cell title="绑定微信" is-link to=""></mt-cell>      
            <mt-cell title="关于我们" is-link to=""></mt-cell>
        </div>
    </div>
</template>
<script src="./personal.js"></script>