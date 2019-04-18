<style lang="less">
@import './personal.less';
</style>
<template>
    <div class="personal">
        <div class="personalInformation">
            <img :src="userInfo.wechatImage">
            <div class="personalInfo">
                <p>昵称：{{userInfo.nickname}}({{userInfo.userType|typeFilter}})</p>
                <!-- <p>关注时间：{{userInfo.createdTime}}</p> -->
                <p>总金额：{{moneyInfo.orderAmount}}元</p>
                <p class="lastP">
                    <span>已提现：{{moneyInfo.withdrawCash}}元</span>
                    <span>余额：{{moneyInfo.balance}}元</span>
                </p>
            </div>
        </div>
        <div class="personalList">
            <mt-cell title="录入个人资料" is-link to="./personMessage" v-if="userInfo.userType==1||userInfo.userType==2"></mt-cell>
            <mt-cell title="学校录入和设置" is-link to="./schoolSet" v-if="userInfo.userType==1||userInfo.userType==2"></mt-cell>
            <mt-cell title="我的学校账户、密码" is-link to="./schoolNamePass" v-if="userInfo.userType==1||userInfo.userType==2"></mt-cell>
            <mt-cell title="我的销售人员" is-link to="./salesman" v-if="userInfo.userType==1"></mt-cell>
        </div>
         <div class="personalList">
            <mt-cell title="我的销售二维码" is-link to="./qrcode" v-if="userInfo.userType==1||userInfo.userType==2"></mt-cell>
            <mt-cell title="统计配送-组长" is-link to='./salesStatistics2' v-if="userInfo.userType==1"></mt-cell>
            <mt-cell title="统计配送-组员" is-link to='./salesStatistics' v-if="userInfo.userType==1||userInfo.userType==2"></mt-cell>
            <mt-cell title="学校订单统计" is-link to='./salesStatisticsSchool' v-if="userInfo.userType==4"></mt-cell>
            <mt-cell title="班级订单统计" is-link to='./gradeStatisticsSchool' v-if="userInfo.userType==5"></mt-cell>
            <mt-cell title="所有订单信息" is-link to="./selectOrder" v-if="userInfo.userType==1||userInfo.userType==2||userInfo.userType==4||userInfo.userType==5"></mt-cell>
            <mt-cell title="订单检索及状态" is-link to="./booksOrder" v-if="userInfo.userType==1||userInfo.userType==2"></mt-cell>
            <!--<mt-cell title="订单检索及状态" is-link to="./bookOrderSchool" v-if="userInfo.userType==4||userInfo.userType==5"></mt-cell>-->
        </div>
        <div class="personalList">
            <mt-cell title="商城预览" @click.native="shopsee" v-if="userInfo.userType==1||userInfo.userType==2||userInfo.userType==6"></mt-cell>
            <mt-cell title="书籍管理" is-link to="./bookTypeSort" v-if="userInfo.userType==1||userInfo.userType==2"></mt-cell>
            <mt-cell title="书籍管理" is-link to="./bookManage" v-if="userInfo.userType==6"></mt-cell>
            <!--<mt-cell title="我的订单" is-link to="./order"></mt-cell>
            <mt-cell title="收货地址" is-link to="./addressList"></mt-cell>-->
            <mt-cell title="会员登录" is-link to="./login"></mt-cell>
        </div>
    </div>
</template>
<script src="./personal.js"></script>



