<template>
    <div class="user-order">
        <mt-navbar class="page-part" :selected.sync="selected" v-model="selected">
            <mt-tab-item id="0">全部</mt-tab-item>
            <mt-tab-item id="1">未付款</mt-tab-item>
            <mt-tab-item id="2">待配送</mt-tab-item>
            <mt-tab-item id="4">已完成</mt-tab-item>
        </mt-navbar>
    </div>
</template>
<script src='./userOrder.js'></script>

