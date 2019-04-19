import { baseUrl } from "@/config/env"

const API_AUTH = `${baseUrl}auth/`

//授权回调域名
let authUrl = "m.express.ui-tech.cn"//"m.express.ui-tech.cn"
//图片回显
let API_FILE_PATH ="http://file.ui-tech.cn/"
//换取access_token
let API_WECHAT_LOGIN = `${API_AUTH}wechatlogin`
//派送员 换取access_token
let API_MEMBER_WECHAT_LOGIN = `${API_AUTH}memberwechatlogin`
//微信config配置
let API_WECHATLOGIN_GET_WECHAT_SIGN = `${baseUrl}wechat/sign`
//登陆接口
let API_LOGIN =baseUrl +'auth/login'
//个人中心获取用户信息
let PERSONAL_INFO=`${baseUrl}user/app/userinfo`
//个人信息获取
let API_USER_INFO_DETAIL = `${baseUrl}app/user_info/detail`
//个人信息保存
let API_USER_INFO_INSERT = `${baseUrl}app/user_info/insertOrUpdate`
//给后端code
let API_LOGIN_CODE=`${baseUrl}wechat/building`




export default{
  authUrl,
  API_FILE_PATH,
  API_WECHAT_LOGIN,
  API_MEMBER_WECHAT_LOGIN,
  API_WECHATLOGIN_GET_WECHAT_SIGN,
  API_LOGIN,
  PERSONAL_INFO,
  API_USER_INFO_DETAIL,
  API_USER_INFO_INSERT,
  API_LOGIN_CODE
}
