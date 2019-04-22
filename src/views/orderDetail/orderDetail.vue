<template>
    <div class="order-detail box-style">
        <div class="courier border-style">
            <span class="courier-left"><span class="iconfont icon-lianxiren blue-font"></span> 快递员</span>
            <span> {{detail.courierName}}:{{detail.courierTel}}</span>
            <a :href="'tel:'+detail.courierTel"><span class="iconfont icon-weibiaoti phoneicon"></span></a>
        </div>
        <div class="mailing border-style">
            <div class="mailing-box mailing-top">
                <span class="iconfont icon-jijian1 blue-font"></span>
                <div class="mailing-info">
                    <p>
                        <span>{{detail.senderName}}</span>
                        <span>{{detail.senderTel}}</span>
                    </p>
                    <div>{{detail.senderProvince + detail.senderCity + detail.senderCounty + detail.receiverAddress}}</div>
                </div>
            </div>
            <div class="mailing-box">
                <span class="iconfont icon-shoujian orange-font"></span>
                <div class="mailing-info">
                    <p>
                        <span>{{detail.receiverName}}</span>
                        <span>{{detail.receiverTel}}</span>
                    </p>
                    <div>{{detail.receiverProvince + detail.receiverCity + detail.receiverCounty + detail.receiverAddress}}</div>
                </div>
            </div>
        </div>
        <div class="express-company border-style">
            <p v-if='courier'>所属公司 : <span>{{detail.expressCompanyName}}</span></p>
            <p>快递公司 : <span>{{detail.expressCompanyName}}</span></p>
            <p>寄件类型 : <span>{{detail.expressType}}</span></p>
            <p v-if='orderNumberShow'>快递单号 : <span>{{detail.expressNumber}}</span></p>
            <p>包裹 : <span>{{detail.packageItemName}}</span></p>
            <p>付款方式 : <span>{{detail.paymentMethod==1 ? '协议结算(月结)' : '寄付(现结)' }}</span></p>
            <p>保价 : <span>{{detail.isInsured}}</span></p>
            <p v-if='moneyShow'>总金额 : <span><i class="red-font">{{detail.expressCost}}</i> 元</span></p>
            <p v-if='courier'>物品数量 : <span>{{detail.expressCompanyName}}</span></p>
            <p v-if='courier'>重量 : <span>{{detail.expressCompanyName}}</span></p>
            <p v-if='courier'>包裹件数 : <span>{{detail.expressCompanyName}}</span></p>
            <p v-if='courier'>快递费用 : <span>{{detail.expressCompanyName}}</span></p>
        </div>
        <button v-if="detail.orderStatus != 4" class="button_blue_long btm-btn" @click="btnClick(btns.btncode)">{{btns.btnName}}</button>
    </div>
</template>
<script src='./orderDetail.js'></script>
<style lang='less'>
    @import './orderDetail.less';
</style>

