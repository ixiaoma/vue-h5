<style lang="less">
@import './newNo.less';
</style>
<template>
    <div class="newNo">
        <div class="info">
            <mt-field v-show="$route.query.type=='phone'" label="手机号" placeholder="请输入手机号码" v-model="phone">      
            </mt-field>
            <mt-field v-show="$route.query.type=='email'" label="邮箱" placeholder="请输入邮箱地址" v-model="email">      
            </mt-field>
            <mt-field v-show="$route.query.type=='pass'" type="password" label="原密码" placeholder="请输入原密码" v-model="oldpass">      
            </mt-field>  
            <mt-field v-show="$route.query.type=='pass'" type="password" label="新密码" placeholder="请输入新密码" v-model="newpass">      
            </mt-field>  
            <mt-field v-show="$route.query.type=='pass'" type="password" label="确认新密码" placeholder="请确认新密码" v-model="confirmpass">      
            </mt-field>                    
        </div>
        <button class="button_blue_long" @click="submit">提交</button> 
    </div>
</template>
<script src="./newNo.js"></script>
