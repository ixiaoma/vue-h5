<template>
    <div class="order-detail box-style">
        <div class="courier border-style">
            <span class="courier-left"><span class="iconfont icon-lianxiren blue-font"></span> 快递员</span>
            <span> 丁小凡:{{tel}}</span>
            <a :href="'tel:'+tel"><span class="iconfont icon-weibiaoti phoneicon"></span></a>
        </div>
        <div class="mailing border-style">
            <div class="mailing-box mailing-top">
                <span class="iconfont icon-jijian1 blue-font"></span>
                <div class="mailing-info">
                    <p>
                        <span>{{detail.senderName}}</span>
                        <span>{{detail.senderTel}}</span>
                    </p>
                    <p>{{detail.senderProvince + detail.senderCity + detail.senderCounty + detail.receiverAddress}}}</p>
                </div>
            </div>
            <div class="mailing-box">
                <span class="iconfont icon-shoujian orange-font"></span>
                <div class="mailing-info">
                    <p>
                        <span>{{detail.receiverName}}</span>
                        <span>{{detail.receiverTel}}</span>
                    </p>
                    <p>{{detail.receiverProvince + detail.receiverCity + receiverCounty + detail.receiverAddress}}}</p>
                </div>
            </div>
        </div>
        <div class="express-company border-style">
            <p>快递公司 : <span>{{detail.expressCompanyName}}</span></p>
            <p>寄件类型 : <span>{{detail.expressType}}</span></p>
            <p>快递单号 : <span>{{detail.expressNumber}}</span></p>
            <p>包裹 : <span>{{detail.packageItemName}}</span></p>
            <p>付款方式 : <span>{{detail.paymentMethod==1 ? '协议结算(月结)' : '寄付(现结)' }}</span></p>
            <p>保价 : <span>{{detail.isInsured}}</span></p>
            <p>总金额 : <span><i class="red-font">{{detail.expressCost}}</i> 元</span></p>
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
        <button class="button_blue_long btm-btn" @click="btnClick(btncode)">{{btnName}}</button>
    </div>
</template>
<script src='./orderDetail.js'></script>
<style lang='less'>
    @import './orderDetail.less';
</style>

