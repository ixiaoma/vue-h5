export default {
    name: 'personalEdit',
    components: {
    },
    data() {
        return {
            userInfo: {
                wechatImage: '',
                nickname: '叶落森',
            },
            nickname: '',
            sex: '',
            company: '',
            popupshowSex: false,//快递公司 下拉框
            slotsex: [
                {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }
            ],
            sexhide: '',
            sexhideid: '',
            sexId: ''
        }
    },
    methods: {
        editImage() {//拍照。选择图片。功能
            let that = this;
            let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
            let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            let request_url = ''
            if (isAndroid) {
                this.isIOS = false;
                request_url = encodeURIComponent(location.href);
            }
            if (isIOS) {
                this.isIOS = true;
                request_url = encodeURIComponent(window.entryUrl);
            }
            let params = {
                url: request_url
            }
            let url = this.GLOBAL.API_WECHATLOGIN_GET_WECHAT_SIGN;
            this.$post(url, params).then((res) => {
                if (res.data.retCode == 200) {
                    that.resulted = res.data.data;
                    that.wx.config({ //配置微信接口
                        debug: false,
                        appId: that.resulted.appId,
                        timestamp: that.resulted.timestamp,
                        nonceStr: that.resulted.noncestr,
                        signature: that.resulted.signature,
                        jsApiList: [ // 所有要调用的 API 都要加到这个列表中,要调用的微信接口
                            'chooseImage',
                            'uploadImage',
                            'downloadImage',
                            'getLocalImgData'
                        ]
                    });
                    that.wx.ready(function () {
                        that.wx.chooseImage({
                            count: 1, // 默认9
                            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                            success: function (res) {
                                that.images.localIds = res.localIds; //返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片（目前PC版不可用）
                                if (that.images.localIds.length) {
                                    that.wx.uploadImage({
                                        localId: that.images.localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
                                        isShowProgressTips: 1, // 默认为1，显示进度提示
                                        success: function (res) {
                                            that.images.serverId.push(res.serverId); //图片上传完成之后，进行图片的下载，图片上传完成之后会返回一个在腾讯服务器的存放的图片的ID--->serverId
                                            that.wx.downloadImage({
                                                serverId: res.serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                                                isShowProgressTips: 1, // 默认为1，显示进度提示
                                                success: function (res) {
                                                    var localId = res.localId; // 返回图片下载后的本地ID
                                                    that.wx.getLocalImgData({ //通过下载的本地的ID获取的图片的base64数据，通过对数据的转换进行图片的保存
                                                        localId: localId, // 图片的localID
                                                        success: function (res) {
                                                            that.localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                                                        }
                                                    })
                                                }
                                            })
                                        },
                                        fail: function (error) {
                                            alert(JSON.stringify(error));
                                        }
                                    });
                                }
                            }
                        });
                    });
                    that.wx.error(function (res) {
                        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                        alert(JSON.stringify(res));
                    });
                } else {
                    this.Toast({
                        message: res.data.message,
                        position: 'center',
                        duration: 5000
                    })
                }
            })
        },
        sexLoad() {//性别
            this.slotsex[0].values = [
                { name: '男', value: '1' },
                { name: '女', value: '0' }
            ]
            this.popupshowSex = true
        },
        sexChange(picker, values) {//快递公司 改变  
            if (values[0]) {
                this.sexhide = values[0].name
                this.sexhideid = values[0].value
            }
        },
        confirm(value) {
            if (value == 1) {
                this.popupshowSex = false
                this.sex = this.sexhide
                this.sexId = this.sexhideid
            }
        },
        cancel(value) {
            if (value == 1) {
                this.popupshowSex = false
            }
        },
        submit(){
            if(!this.nickname){
                this.Toast("请输入用户名");
                return false;
            }
            if(!this.sex){
                this.Toast("请选择性别");
                return false;
            }
            if(!this.company){
                this.Toast("请输入公司信息");
                return false;
            }
            let url ='';
            let params = {
              nickname:this.nickname,  
              sex:this.sex,
              company:this.company
              // idImage: this.isIOS ? this.localData.split('base64,')[1] : this.localData,
            }
            this.$post(url, params).then(res => {
              if (res.data.retCode == 200) {
                this.Toast({
                  message: "成功！",
                  position: 'center',
                  duration: 2000
                })
                this.$router.go(-1)
              } else {
                this.Toast({
                  message: res.data.message,
                  position: 'center',
                  duration: 5000
                })
              }
            })
        }
    },
    created() {
        this.$store.commit("setMenu", [false, true]);
    }
}