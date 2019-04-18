<template>
    <div class="order-page">
        <mt-navbar class="nav-bar border-style" :selected.sync="selected" v-model="selected">
            <mt-tab-item id="0">全部</mt-tab-item>
            <mt-tab-item id="1">待取件</mt-tab-item>
            <mt-tab-item id="2">待支付</mt-tab-item>
            <mt-tab-item id="4">已签收</mt-tab-item>
        </mt-navbar>
        <mt-loadmore class="order-list" :top-method="loadTop" ref="loadmore">
            <ul v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <li class="order-li border-style" v-for="item in listData" :key='item' @click="toDetail(item)">
                    <p class="order-top">
                        <span class="order-number">快递单号: {{item}}</span>
                        <span class="order-state" :class='item%2 ? "red-font" : "blue-font"'>{{item%2 ? '待取件' : '待支付'}}</span>
                    </p>
                    <p class="order-mid">
                        北京 ——— 北京
                    </p>
                    <p class="order-btm">
                        <button class="grayBtn redBtn" @click='toPayOrder(item)'>去支付</button>
                        <button class="grayBtn blueBtn cancal-btn"  @click='cancleOrder(item)'>取消</button>
                    </p>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>
<script src='./orderList.js'></script>
<style lang='less'>
    @import './orderList.less';
</style>


