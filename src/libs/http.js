import axios from 'axios';
import { Indicator, Toast } from 'mint-ui';
import _API from '@/libs/api';
import {router} from '../router/index.js'

axios.defaults.timeout = 300000;
axios.defaults.baseURL = '';

axios.interceptors.request.use(config => {
  let wechataccess_token = sessionStorage.getItem("wechataccess_token");
  if(config.url == _API.API_LOGIN||config.url == _API.API_WECHAT_LOGIN || config.url == _API.API_COMMODITYS_PHONE_LIST) {//用code换取token的接口不用加token
    config.headers = {
      'Content-Type': 'application/json'
    };
  }else{
    config.headers = {
      'Authorization': `Bearer ${wechataccess_token}`,
      'Content-Type': 'application/json'
    };
  }
  config.url = config.url + '?random=' + new Date().getTime();
  return config;
}, error => {
  Toast(`拦截器报错：${error}`);
  return Promise.reject(error);
});

//错误处理函数
function err( res ){
  console.log(res)
  Indicator.close();
  if(res.request.status==403){
    sessionStorage.removeItem('wechataccess_token');
    let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
    if(userInfo.userType=="3"){//家长
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd902e0366907c099&redirect_uri=' + encodeURIComponent('http://' + _API.authUrl + '/authPage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
    }else if(userInfo.userType=="1"||userInfo.userType=="2"||userInfo.userType=="4"||userInfo.userType=="5"||userInfo.userType=="6"){
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd902e0366907c099&redirect_uri=' + encodeURIComponent('http://' + _API.authUrl + '/authzPage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';  
    }else if(!userInfo){
      router.push('login');
    }
  }else{
    Toast(`接口${res.request.status}错误：${res.config.url}`);
  }
}

//post请求
let postFn = async ( url, params = null ) => {
  let result = null;
  Indicator.open('加载中...');
  await axios.post(url, params).then(res => {
    Indicator.close();
    result = res;
  }).catch(res => {
    err(res);
  });
  return result;
};

//get请求
let getFn = async ( url, params = null ) => {
  let result = null;
  Indicator.open('加载中...');
  await axios.get(url, { params }).then(res => {
    Indicator.close();
    result = res;
  }).catch(res => {
    err(res);
  });
  return result;
};

export {
  postFn,
  getFn
}
