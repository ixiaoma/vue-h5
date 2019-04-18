<style lang="less">
@import './personal.less';
</style>
<template>
    <div class="personal">
        <div class="personalInformation">
            <img :src="userInfo.wechatImage">
            <div class="personalInfo">
                <p>昵称：{{userInfo.nickname}}({{userInfo.userType|typeFilter}})</p>
                <p>关注时间：{{userInfo.createdTime}}</p>
            </div>
        </div>
        <div class="personalList">
            <mt-cell title="我的订单" is-link to="./order"></mt-cell>
            <mt-cell title="收货地址" is-link to="./addressList"></mt-cell>
            <mt-cell title="会员登录" is-link to="./login"></mt-cell>
        </div>
    </div>
</template>
<script src="./personal.js"></script>



