<style lang="less">
@import './personal.less';
</style>
<template>
    <div class="personal">
        <div class="personalInformation">
            <img :src="userInfo.wechatImage">
            <div class="personalInfo">
                <p>昵称：{{userInfo.nickname}}({{userType|typeFilter}})</p>
                <!--<p>关注时间：{{userInfo.createdTime}}</p>-->
            </div>
            <div class="topage"><i class="fa fa-chevron-right"  @click="toPage"></i></div>
        </div>
        <div class="personalList">
            <mt-cell title="我的订单" is-link to="./orderList"></mt-cell>
            <mt-cell title="地址管理" is-link to="./addressManage"></mt-cell>
            <mt-cell title="设置" is-link to="./setting"></mt-cell>
        </div>
    </div>
</template>
<script src="./personal.js"></script>