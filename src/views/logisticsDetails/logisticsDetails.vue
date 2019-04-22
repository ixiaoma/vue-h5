<template>
    <div class="order-detail box-style">
        <div v-if="showCourier" class="courier border-style">
            <span class="courier-left"><span class="iconfont icon-lianxiren blue-font"></span> 快递员</span>
            <span> {{detail.courierName}}:{{detail.courierTel}}</span>
            <a :href="'tel:'+detail.courierTel"><span class="iconfont icon-weibiaoti phoneicon"></span></a>
        </div>
        <div class="express-company border-style">
            <p>快递公司 : <span>{{detail.expressCompanyName}}</span></p>
            <p>寄件类型 : <span>{{detail.expressType}}</span></p>
            <p>快递单号 : <span>{{detail.expressNumber}}</span></p>
        </div>
        <div class="logistics border-style">
            <div class="logistics-row">
                <div class="row-left">
                    <p>2019/10/10</p>
                    <p>20:33</p>
                    <i class="fa fa-circle rowicon blue-font"></i>
                </div>
                <p class="row-right">北京北京</p>
            </div>
            <div class="logistics-row">
                <div class="row-left">
                    <p>2019/10/10</p>
                    <p>20:33</p>
                    <i class="fa fa-circle rowicon"></i>
                </div>
                <p class="row-right">北京北京   北京北京北京北京北京北京北京北京北京北京北京北京北京北京</p>
            </div>
        </div>
    </div>
</template>
<script src='./logisticsDetails.js'></script>
<style lang='less'>
    @import './logisticsDetails.less';
</style>

