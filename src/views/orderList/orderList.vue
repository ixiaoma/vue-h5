<template>
    <div class="order-page box-style">
        <div v-if='showSearch' class="search">
            <form action="" target="frameFile" onsubmit="return false;">
                <mt-search v-model="searchvalue" cancel-text="取消" placeholder="搜索" @keyup.enter.native="loadListData"></mt-search>
            </form>
        </div>
        <mt-navbar class="nav-bar border-style" :selected.sync="selected" v-model="selected">
            <mt-tab-item v-for="(item,index) in courierNav" :key='index' :id='item.key'>{{item.name}}</mt-tab-item>
        </mt-navbar>
        <mt-loadmore class="order-list" :top-method="loadTop" ref="loadmore">
            <ul v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <li class="order-li border-style" v-for="item in listData" :key='item'>
                    <div v-if='showSearch' class="courier-order">
                        <div class="courier-order-top" @click="toDetail(item)">
                            <img src="#" alt="图片">
                            <div class="courier-info">
                                <p class="courier-info-top">
                                    <span>京东</span>
                                    <span class="little-font">今天 12:00</span>
                                </p>
                                <p>北京→天津</p>
                                <p class="little-font">丁小凡  133-3344-5566</p>
                            </div>
                        </div>
                        <div class="courier-order-btm">
                            <span class="little-font red-font">状态：已签收</span>
                            <button class="grayBtn blueBtn"  @click='getOrder(item)'>接单</button>
                        </div>
                    </div>
                    <div v-else class="user-order">
                        <p class="order-top">
                            <span class="order-number">快递单号: {{item}}</span>
                            <span class="order-state" :class='item%2 ? "red-font" : "blue-font"'>{{item%2 ? '待取件' : '待支付'}}</span>
                        </p>
                        <p class="order-mid" @click="toDetail(item)">
                            北京 ——— 北京
                        </p>
                        <p class="order-btm">
                            <button class="grayBtn redBtn" @click='toPayOrder(item)'>去支付</button>
                            <button class="grayBtn blueBtn cancal-btn"  @click='cancleOrder(item)'>取消</button>
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


