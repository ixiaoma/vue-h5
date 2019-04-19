<style lang="less">
@import './login.less';
</style>
<template>
    <div class="login">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="name"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <button class="button_blue_long" @click="login">登录</button>
    </div>   
</template>
<script src="./login.js"></script>
