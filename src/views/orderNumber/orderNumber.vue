<template>
    <div class="order-number box-style">
        <div class="border-style num-box">
            <mt-field label="快递单号" placeholder="请输入快递单号" readonly v-model="number">
                <button class="grayBtn blueBtn">获取快递单号</button>
            </mt-field>
            <mt-field label="快递费用" placeholder="请输入快递费用" v-model="money"></mt-field>
            <div class="btm-btn">
                <button class="grayBtn redBtn">确定</button>
                <button class="grayBtn blueBtn cancal-btn">取消</button>
            </div>
            
        </div>
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
        padding-bottom: 10px
    }
    .btm-btn{
        display: flex;
        justify-content:center;
        .cancal-btn{
            margin-left: 80px
        }
    }
</style>
