import md5 from 'js-md5';
import Cookies from 'js-cookie'
export default {
    name: 'login',
    components: {},
    data() {
        return {
            name: '',
            password: ''
        }
    },
    computed: {},
    methods: {
        setConfig() {
            this.$store.commit("setMenu", [true, false]);
        },
        login() {
            let url = this.GLOBAL.API_LOGIN;
            let md5_password = md5(this.password);
            let params = {
                username: this.name,
                password: md5_password
            }
            if (!params.username) {
                this.Toast('请输入用户名')
            } else if (!this.password) {
                this.Toast('请输入密码')
            } else {
                this.$post(url, params).then(res => {
                    if (res.status == 200) {
                        // sessionStorage.setItem('wechataccess_token', res.headers.authorization);
                        sessionStorage.setItem('wechataccess_token', res.data.data.accessToken);
                        // this.loadCode()
                        // this.userInfoLoad()        
                        Cookies.set('username',this.name) 
                        Cookies.set('password',this.password)             
                    }
                }).catch(err => {
                    this.Toast('用户名密码错误')
                })
            }
        },
        userInfoLoad(){
            // let url=this.GLOBAL.PERSONAL_INFO
            // this.$get(url).then(res=>{
            //     if(res.data.retCode==200){
            //         this.userInfo=res.data.data;     
            //         sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))    
            //         this.$router.push({ name: 'personalz' })             
            //     }
            // })
            this.$router,push({
                name:'personalz'
            })
        },
        loadCode(){
            window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd902e0366907c099&redirect_uri=' + encodeURIComponent('http://' + this.GLOBAL.authUrl + '/codePage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
        }
    },
    created() {
        this.setConfig();
        this.name=Cookies.get('username')?Cookies.get('username'):''
        this.password=Cookies.get('password')?Cookies.get('password'):''  
    }
}