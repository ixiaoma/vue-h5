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
                password: this.password
            }
            if (!params.username) {
                this.Toast('请输入用户名')
            } else if (!this.password) {
                this.Toast('请输入密码')
            } else {
                this.$post(url, params).then(res => {
                    if (res.status == 200) {                    
                        sessionStorage.setItem('access_token', res.headers.authorization)
                        sessionStorage.setItem('userType','customer');
                        // sessionStorage.setItem('userType','courier');
                        this.userInfoLoad()        
                        Cookies.set('username',this.name) 
                        Cookies.set('password',this.password)             
                    }
                }).catch(err => {
                    this.Toast('用户名密码错误')
                })
            }
        },
        userInfoLoad(){           
            this.$router.push({
                name:'personalz'
            })
        }
    },
    created() {
        this.setConfig();
        this.name=Cookies.get('username')?Cookies.get('username'):''
        this.password=Cookies.get('password')?Cookies.get('password'):''  
    }
}