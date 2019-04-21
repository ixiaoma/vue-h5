<template>
    <div class="order-page box-style">
        <div v-if='showSearch' class="search">
            <form action="" target="frameFile" onsubmit="return false;">
                <mt-search v-model="searchvalue" cancel-text="取消" placeholder="搜索" @keyup.enter.native="loadMore"></mt-search>
            </form>
        </div>
        <mt-navbar class="nav-bar border-style" v-model="selected" @click.native="loadMore">
            <mt-tab-item v-for="(item,index) in navList" :key='index' :id='item.key'>{{item.name}}</mt-tab-item>
        </mt-navbar>
        <mt-loadmore class="order-list" :top-method="loadTop" ref="loadmore">
            <ul v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <li class="order-li border-style" v-for="(item,index) in listData" :key='index'>
                    <div v-if='showSearch' class="courier-order">
                        <div class="courier-order-top" @click="toDetail(item.id)">
                            <img src="#" alt="图片">
                            <div class="courier-info">
                                <p class="courier-info-top">
                                    <span>{{item.expressCompanyName}}</span>
                                    <span class="little-font">{{item.sendTime}}</span>
                                </p>
                                <p>{{item.senderCity}}→{{item.receiverCity}}</p>
                                <p class="little-font">{{item.senderName}}  {{item.senderTel}}</p>
                            </div>
                        </div>
                        <div class="courier-order-btm">
                            <span v-if='item.status == "已取件"' class="little-font red-font">状态：已签收</span>
                            <button v-if='item.status == "待接单"' class="grayBtn blueBtn"  @click='getOrder(item)'>接单</button>
                        </div>
                    </div>
                    <div v-else class="user-order">
                        <p class="order-top">
                            <span class="order-number">快递单号: {{item.orderNum}}</span>
                            <span class="order-state blue-font">{{item.status}}</span>
                        </p>
                        <p class="order-mid" @click="toDetail(item.id)">
                            {{item.senderCity}} ——— {{item.receiverCity}}
                        </p>
                        <p class="order-btm">
                            <button v-if = 'item.status == "待支付"' class="grayBtn redBtn" @click='toPayOrder(item)'>去支付</button>
                            <button class="grayBtn blueBtn cancal-btn" v-if='routerName == "orderList" && (item.status == "待支付" || item.status == "待取件")'  @click='cancleOrder(item)'>取消</button>
                        </p>
                    </div>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>
<script src='./orderList.js'></script>
<style lang='less'>
    @import './orderList.less';
</style>


