<template>
    <div class="qrcode">
        <img class="qrcodebackground" :src="imgUrlBackground"/>
        <div id='code' ref="qrcode">
            <!-- <img class="logo" src="../../../static/images/logo.png"> -->
            <h1>{{userInfo.nickname}}的销售二维码</h1>
            <canvas id="canvas" style="display:none"></canvas>      
            <img class="canvasimg" :src="imgUrl"/>
            <p>超码科技 让您的工作更轻松</p>
            <div class="save_btn">
                长按页面保存成图片
            </div> 
        </div> 
    </div>
</template>
<script>
import QRCode from 'qrcode'
import html2canvas from 'html2canvas'
export default {
    data() {
        return {
            codes: '',
            userInfo:null,
            imgUrl:'',
            imgUrlBackground:''
        }
    },
    components: {
        QRCode: QRCode
    },
    methods: {
        useqrcode() {
            let canvas = document.getElementById('canvas')
            let url=this.userInfo.qrCode
            // let url="http://www.baidu.com"
            QRCode.toCanvas(canvas, url, function(error) {
                if (error) { console.error(error) } else { console.log('success!'); }
            })
            this.saveImg()
        },
        //保存图片
        saveImg(){
            let myCanvas = document.getElementsByTagName('canvas');
            this.imgUrl=myCanvas[0].toDataURL('image/png')    
            html2canvas(this.$refs.qrcode, { backgroundColor: '#fff' }).then((canvas) => {
                let dataURL = canvas.toDataURL("image/jpeg");
                this.imgUrlBackground = dataURL
            });    
            this.$nextTick(()=>{
                document.getElementById("code").style.display="none"
            })           
        },
    },
    mounted() {
        this.useqrcode();         
        this.$store.commit("setMenu", [false, false]);
    },
    created(){
        this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'))     
    }
}
</script>
<style scoped>
 .qrcode{
     height: 100%; 
     width: 100%;
 }
#code{
    background: url('./static/images/codeback.png') no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%; 
    width: 100%;       
}
#code h1{
    font-size: 20px;
    color: #fff;
    margin-top: 60%;
}
#code p{
    color: #fff;
}
#code .logo{
    width: 80px;
    height: 80px;
}
#canvas{
    width:220px !important;
    height: 220px !important;
    margin-top: -90px;
}
.qrcode .save_btn{
      padding: 10px;  
      color:orange;
}
#code .canvasimg{
    /* margin-top: 30% */
 }
 .qrcode .qrcodebackground{
     width: 100%;
     height: 100%;
 }
</style>

