import { baseUrl } from "@/config/env"

// const API_AUTH = `${baseUrl}auth/`
const API_AUTH = `${baseUrl}`

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
let PERSONAL_INFO=`${baseUrl}wechatlogin/user/info`
//个人信息获取
let API_USER_INFO_DETAIL = `${baseUrl}app/user_info/detail`
//个人信息保存
let API_USER_INFO_INSERT = `${baseUrl}app/user_info/insertOrUpdate`
//给后端code
let API_LOGIN_CODE=`${baseUrl}wechat/building`
//用户的订单列表
let API_USER_ORDER_LIST=`${baseUrl}order/page`
//快递员的订单列表
let API_ORDER_LIST=`${baseUrl}order/courierOrder`
//根据id获取订单详情
let API_GET_ORDERDETAIL = `${baseUrl}order/query/`
//取消订单
let API_CANCEL_ORDER = `${baseUrl}order/orderState/update`
// 查询地址列表
let API_GET_ADDRESS= `${baseUrl}addressbooks/page`
//地址新增
let API_ADD_ADDRESS = `${baseUrl}addressbooks/add`
//地址编辑
let API_EDIT_ADDRESS = `${baseUrl}addressbooks/edit`
//地址删除
let API_DEL_ADDRESS = `${baseUrl}addressbooks/dels`
//根据id获取地址详情
let API_GET_ADDRESS_DETAILS = `${baseUrl}addressbooks/`


//----------------我要寄件页面 jiangyx-----------------
//我要寄件
let API_ME_MAILING =baseUrl +'order/save'
//快递公司
let API_SUBORDINATE_COMPANY=baseUrl+'order/optionalExpressCompany'
// let API_SUBORDINATE_COMPANY= baseUrl+'subordinateCompany/query'
//寄件类型
let API_SUBORDINATE_TYPE= baseUrl+'express/price/query/expresscompany'




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
  API_LOGIN_CODE,
  API_USER_ORDER_LIST,
  API_ORDER_LIST,
  API_GET_ADDRESS,
  API_ADD_ADDRESS,
  API_DEL_ADDRESS,
  API_GET_ADDRESS_DETAILS,
  API_EDIT_ADDRESS,
  API_ME_MAILING,
  API_SUBORDINATE_COMPANY,
  API_SUBORDINATE_TYPE,
  API_GET_ORDERDETAIL,
  API_CANCEL_ORDER
}
