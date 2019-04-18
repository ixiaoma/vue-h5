<template>
    <div class="ad_pay">
        <mt-popup v-model="popupVisible" :closeOnClickModal='false'>
            <div class="content">
                <h2>请核对订单信息</h2>
                <p>地址：{{school}}&nbsp;&nbsp;{{grade}}&nbsp;&nbsp;{{classes}}</p>
                <p>联系人：{{studentName}}&nbsp;&nbsp;{{phone}}</p>
                <div class="content_book">                        
                        <p v-for="item in orderItems">{{item.bookName}}&nbsp;&nbsp;
                            <span>￥{{item.price}}</span>x{{Number(item.buyNumber)}}&nbsp;&nbsp;          
                        </p>                             
                </div>            
            </div>
            <div class="mint-msgbox-btns">
                <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancel()">取消付款</button>
                <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirm()">确定付款</button>
            </div>
        </mt-popup>
        <div class="ad_pay_2">
        <mt-popup v-model="popupVisible2">
            <div class="content2">
                <img src="../../../static/images/baoxian.png">
                <p>价格保障</p>
                <br>   
                <mt-spinner color="#0093E2" type="triple-bounce"></mt-spinner>
            </div>     
        </mt-popup>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ad_pay',
    data() {
        return {
            popupVisible: false,
            orderId:'',
            school:'',
            grade:'',
            classes:'',
            studentName:'',
            phone:'',
            shopItem:[],
            orderItems:[],
            popupVisible2:false
        }
    },
    methods: {
        cancel() {
            this.popupVisible=false
             this.$router.push({//订单列表
                name:'order'
            });
        },
        confirm() {
            let self=this
            this.popupVisible=false
            this.popupVisible2=true
            setTimeout(()=>{
                self.popupVisible2=false
                self.$emit("toParentpay")
            },2000)       
        }
    },
    mounted(){       
        this.shopItem=JSON.parse(this.$route.query.item)?JSON.parse(this.$route.query.item):[]
        if(this.shopItem.length){
            this.orderItems=this.shopItem
        }
    }
}
</script>
<style lang="less">
.ad_pay {
    .content {
        padding: 0 10px 10px 10px;
        width: 90%;      
        h2 {
            text-align: center;
            font-size: 18px;
            padding: 0;
        }
        .content_book{
            margin-top: 10px;
        }
        p{font-size: 14px; }
    }
    .ad_pay_2{
        .mint-popup{
            border-radius: 10px;
            width:140px;   
            background-color: rgba(0, 0, 0, 0.4);            
            .content2{
                background-color: rgba(0, 0, 0, 0.4);
                border-radius: 10px;
                padding:10px;
                text-align:center;
                img{
                    width:100px;
                }
                p{
                    font-size: 14px;
                    color: #fff;
                }
            }     
        }
    }
    .mint-popup{
            border-radius: 10px;
            width:80%;             
    }  
    .mint-msgbox-confirm{
        border-radius:0 0 10px 0;
        color:#f97910;
        border-top:1px solid #efefef;
    }
    .mint-msgbox-cancel{
         border-radius:0 0 0 10px;
         border-top:1px solid #efefef;
    }
}
</style>


