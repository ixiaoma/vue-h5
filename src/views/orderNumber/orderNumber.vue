<template>
    <div class="order-number box-style">
        <div class="border-style">
            <mt-field label="快递单号" placeholder="请输入快递单号" readonly v-model="number">
                <button class="grayBtn blueBtn">获取快递单号</button>
            </mt-field>
            <mt-field label="快递费用" placeholder="请输入快递费用" v-model="money"></mt-field>
            <button class="grayBtn redBtn">确定</button>
            <button class="grayBtn blueBtn cancal-btn">取消</button>
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
