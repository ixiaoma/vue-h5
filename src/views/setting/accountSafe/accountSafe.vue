<style lang="less">
@import './accountSafe.less';
</style>
<template>
    <div class="accountSafe">
        <div class="personalList">
            <mt-cell title="修改密码" is-link to="./newNo?type=pass"></mt-cell>
            <mt-field label="绑定手机" placeholder="" v-model="phone" readonly @click.native="toPage('phone')"></mt-field>
            <mt-field label="绑定邮箱" placeholder="" v-model="email" readonly @click.native="toPage('email')"></mt-field>
        </div>
        </div>
    </div>
</template>
<script src="./accountSafe.js"></script>