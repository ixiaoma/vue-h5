<style lang="less">
@import './bindPhoneEmail.less';
</style>
<template>
    <div class="bindPhoneEmail">
        <div class="info">
            <mt-field v-show="$route.query.type=='phone'" label="原手机号" placeholder="请输入原手机号码" readonly v-model="phone">
                <button class="grayBtn blueBtn">获取验证码</button>
            </mt-field>
            <mt-field v-show="$route.query.type=='email'" label="原邮箱" placeholder="请输入原邮箱地址" readonly v-model="email">
                <button class="grayBtn blueBtn">获取验证码</button>
            </mt-field>
            <mt-field label="验证码" placeholder="请输入验证码" v-model="code"></mt-field>         
        </div>
        <button class="button_blue_long" @click="submit">提交</button> 
    </div>
</template>
<script src="./bindPhoneEmail.js"></script>
