<template>
    <div class="order-number box-style">
        <div class="border-style num-box">
            <mt-field label="快递单号" placeholder="请输入快递单号" readonly v-model="number">
                <button class="grayBtn blueBtn">获取快递单号</button>
            </mt-field>
            <mt-field label="快递费用" placeholder="请输入快递费用" v-model="money"></mt-field>
        </div>
        <button class="grayBtn button_blue_long">确定</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            number:null,
            money:null
        }
    }
}
</script>
<style lang='less'>
    .num-box{
        margin-bottom: 10px;
    }
    .btm-btn{
        display: flex;
        justify-content:center;
        .cancal-btn{
            margin-left: 80px
        }
    }
</style>
