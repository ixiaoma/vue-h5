<template>
    <div class="Advert">
        <mt-popup v-model="popupVisible" :closeOnClickModal='false'>
            <div class="content">
                <p @click="cancel()">关闭</p>
                <img src ='../../../static/images/advert.png'>
            </div>
        </mt-popup>
    </div>
</template>
<script>
export default {
    name: 'Advert',
    data() {
        return {
            popupVisible: false,
            homelist:0
        }
    },
    methods: {
        cancel() {
            this.popupVisible=false
            if(this.homelist==1){
                this.$router.push({
                    name:'homeList'
                });
            }else if(this.homelist==2){
                this.$emit("toParentrefash")
            }else if(this.homelist==3){
                this.$router.push({
                    name:'order'
                });
            }
             
        },
    },
    mounted(){       

    }
}
</script>
<style lang="less">
.Advert{
    overflow: hidden;
    p{
        float: right;
        font-size: 16px;
        padding: 5px;
        color: #fff;
    }
    .mint-popup{
        width: 90%;
        background-color: rgba(255,255,255,0);
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>


