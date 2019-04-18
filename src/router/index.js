import Vue from 'vue'
import Router from 'vue-router'
import _API from '@/libs/api.js'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homeList',
      name: 'home',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/homeList',
          name: 'homeList',
          meta: {
            title: '首页'
          },
          component: () => import('@views/homeList/homeList.vue')
        },
        {
          path: '/orderList',
          name: 'orderList',
          meta: {
            title: '我的订单'
          },
          component: () => import('@views/orderList/orderList.vue')
        },
        {
          path: '/orderDetail',
          name: 'orderDetail',
          meta: {
            title: '我的订单'
          },
          component: () => import('@views/orderDetail/orderDetail.vue')
        },{
          path: '/personal',
          name: 'personal',
          meta: {
            title: '个人中心'
          },
          component: () => import('@views/personal/personal.vue')
        },
        {
          path: '/userMailing',
          name: 'userMailing',
          meta: {
            title: '我要寄件'
          },
          component: () => import('@views/userMailing/userMailing.vue')
        },
        {
          path: '/addAddress',
          name: 'addAddress',
          meta: {
            title: '新增地址'
          },
          component: () => import('@views/addAddress/addAddress.vue')
        },
        {
          path: '/goodsInfo',
          name: 'goodsInfo',
          meta: {
            title: '物品信息'
          },
          component: () => import('@views/goodsInfo/goodsInfo.vue')
        },
        {
          path: '/insuredPrice',
          name: 'insuredPrice',
          meta: {
            title: '物品保价'
          },
          component: () => import('@views/insuredPrice/insuredPrice.vue')
        },
        {
          path: '/orderSuccess',
          name: 'orderSuccess',
          meta: {
            title: '下单成功'
          },
          component: () => import('@views/orderSuccess/orderSuccess.vue')
        },
        {
          path: '/personalz',
          name: 'personalz',
          meta: {
            title: '会员中心'
          },
          component: () => import('@views/personalz/personal.vue')
        },
        {
          path: '/login',
          name: 'login',
          meta: {
            title: '会员登录'
          },
          component: () => import('@views/login/login.vue')
        }
      ]
    },
    {
      path: '/authPage',
      name: 'authPage',
      meta: {
        title: '加载中...'
      },
      component: () => import('@/views/auth/auth.vue'),
    },
    {
      path: '/authzPage',
      name: 'authzPage',
      meta: {
        title: '加载中...'
      },
      component: () => import('@/views/authz/auth.vue'),
    },
    {
      path: '/codePage',
      name: 'codePage',
      meta: {
        title: '加载中...'
      },
      component: () => import('@/views/login/authcode.vue'),
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   if (to.name != 'authPage'&&to.name != 'authzPage'&& to.name != 'login' && to.name != 'freeLearn' && to.name != 'learnTool') {// && to.name != 'homeList' && to.name != 'productDetail'
//     let _token = sessionStorage.getItem('wechataccess_token');
//       if(to.name=="personalz"){
//         //wx877afd1dffed5e38顶点众达   wx5dae3b7d0a4ede8f中教优选
//           if(!_token){
//             sessionStorage.setItem('beforeUrl', to.fullPath);
//             window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx877afd1dffed5e38&redirect_uri=' + encodeURIComponent('http://' + _API.authUrl + '/authzPage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
//             // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dae3b7d0a4ede8f&redirect_uri=' + encodeURIComponent('http://' + _API.authUrl + '/authzPage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
//           }else{
//             next()
//           }
//       }else{
//           if (!_token) {
//             sessionStorage.setItem('beforeUrl', to.fullPath);
//             window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx877afd1dffed5e38&redirect_uri=' + encodeURIComponent('http://' + _API.authUrl + '/authPage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
//             // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dae3b7d0a4ede8f&redirect_uri=' + encodeURIComponent('http://' + _API.authUrl + '/authPage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
//           } else {
//             next();
//           }
//       } 
//   } else {
//     next();
//   }
//   // next();
//   //禁用分享功能（写在路由中是确保刷新后依然没有分享功能）
//   if (typeof WeixinJSBridge == "undefined") {
//     if (document.addEventListener) {
//       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
//     } else if (document.attachEvent) {
//       document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
//       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
//     }
//   } else {
//     onBridgeReady();
//   }
//   //如果是从首页跳转到其他页面，需要把监听事件清除。在页面的destroyed的钩子函数中拿不到DOM元素，所以在路由守卫中去做一下操作
//   if(from.name == 'homeList') {
//     var singel_page = document.getElementsByClassName('homeList')[0];
//     singel_page.removeEventListener('scroll', this.handleScroll);
//     var content_wrap = document.getElementsByClassName('contentWrap')[0];
//     content_wrap.removeEventListener('scroll', this.handleScroll);
//     next();
//   }else if(from.name == 'productDetail'){
//     var pro_detail_page = document.getElementsByClassName('productDetail')[0];
//     pro_detail_page.removeEventListener('scroll', this.handleScroll);
//     next();
//   }else if(from.name == 'bookList'){
//     var book_list = document.getElementsByClassName('bookList')[0];
//     book_list.removeEventListener('scroll', this.handleScroll);
//     next();
//   } else if(from.name == 'personMessage'){
//     var person_message = document.getElementsByClassName('personMessage')[0];
//     person_message.removeEventListener('scroll', this.handleScroll);
//     next();
//   } else if(from.name == 'saleWrap'){
//     var sales_wrap = document.getElementsByClassName('saleWrap')[0];
//     sales_wrap.removeEventListener('scroll', this.handleScroll);
//     next();
//   } else {
//     next();
//   }
// });

router.afterEach((to, from) => {// true 时 为 IOS 设备
  if (window.__wxjs_is_wkwebview) {  // IOS
    if (window.entryUrl == '' || window.entryUrl == undefined) { //记录该地址config配置时使用
      var url = `http://bookshop.jcwl2010.com${to.fullPath}`//var url = `http://bookshop.ui-tech.cn${to.fullPath}`//var url = `http://bookshop.jcwl2010.com${to.fullPath}`
      window.entryUrl = url// 将后面的参数去除
    }
  }
  var timer = setTimeout(() => {
    //禁用分享功能（写在路由中是确保刷新后依然没有分享功能）
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
    clearTimeout(timer);
  }, 500);
})

function onBridgeReady() {
  WeixinJSBridge.call('hideOptionMenu');
}

export default router;

