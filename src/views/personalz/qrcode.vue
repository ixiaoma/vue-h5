<template>
    <div class="qrcode">
        <img class="qrcodebackground" :src="imgUrlBackground"/>
        <div id='code' ref="qrcode">
           <h1>致家长一封信</h1>
            <p class="p_left"><strong>家长您好:</strong></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据各级教育部门文件精神要求，为了鼓励和培养孩子“多读书、读好书、善读书的好习惯”，推进“书香校园”建设，现将互联网+图书的浏览选购学习平台推荐给你们，家长可在<strong>平台永久免费使用</strong>学习内容，也可自愿选订图书，请家长积极参与书香校园活动! </p>
            <br>
            <p class="p_left">具体操作如下:</p>
            <p>&nbsp;&nbsp;1. <strong>扫描</strong>  请使用“微信”<strong>长按识别下方二维码</strong>，关注“中教校园优选”。</p>
            <p>&nbsp;&nbsp;2. <strong>浏览</strong>  点击底部菜单进入“校园商城”，浏览查阅精品书目，点击图书查看详细信息。</p>
            <p>&nbsp;&nbsp;3. <strong>选购</strong>  点击“+”号选择订购数量，点击提交结算，选择孩子所在的学校，填写收货信息、提交、支付。</p>
            <p>&nbsp;&nbsp;4.  <strong>配送</strong> 图书统一配送到班级发给孩子。</p>
            <canvas id="canvas" style="display:none"></canvas>      
            <div class="canvasimgdiv"><img class="canvasimg" :src="imgUrl"/></div>
            <p style="text-align:center">用<strong>微信</strong>扫码（或长按二维码识别）进入订阅</p>
            <p><strong>使用步骤</strong></p>
            <p>扫描二维码关注→进入校园商城浏览图书→提交结算→填写收货信息→统一配送</p> <br>                    
            <div class="qrcode_bottom">  
                <p>{{userInfo.nickname}}</p>
                <!-- <p>温馨提示：转发或打印前请剪切掉“{{userInfo.nickname}}的销售二维码”</p> -->
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
     /* height: 100%;  */
     width: 100%;
     overflow-y: scroll;
 }
#code{
    width: 100%;
     overflow-y: scroll;
    background: #fff;
    /* background-size: 100%; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: 100%; 
    width: 100%;   
    color: #000;    
    padding: 20px;
}
#code h1{
    font-size: 20px;
    text-align: center;
}
#code p{
    font-size:14px;
}
#code .p_left{
    font-size:14px;
}
#code p strong{
        font-size:14px;
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
#code .canvasimgdiv{
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
}
#code .canvasimgdiv .canvasimg{
    display: flex;
    justify-content: center;
    width:220px !important;
    height: 220px !important;
    }
 .qrcode .qrcodebackground{
     width: 100%;
     /* height: 100%; */
 }
 .qrcode .qrcode_bottom{
     width: 100%;
     /* color: rgb(248, 26, 26); */
     color: #000;
     text-align: right;
 }
</style>

