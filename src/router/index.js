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
          path: '/monthUser',
          name: 'monthUser',
          meta: {
            title: '月结用户'
          },
          component: () => import('@views/orderList/orderList.vue')
        },
        {
          path: '/nowUser',
          name: 'nowUser',
          meta: {
            title: '现结用户'
          },
          component: () => import('@views/orderList/orderList.vue')
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
            title: '订单详情'
          },
          component: () => import('@views/orderDetail/orderDetail.vue')
        },
        {
          path: '/orderNumber',
          name: 'orderNumber',
          meta: {
            title: '填写订单号'
          },
          component: () => import('@views/orderNumber/orderNumber.vue')
        },
        {
          path: '/personal',//普通用户个人中心
          name: 'personal',
          meta: {
            title: 'slotsems'
          },
          component: () => import('@views/personal/personal.vue')
        },
        {
          path: '/personalEdit',
          name: 'personalEdit',
          meta: {
            title: '个人信息'
          },
          component: () => import('@views/personal/personalEdit.vue')
        }, 
        {
          path: '/setting',
          name: 'setting',
          meta: {
            title: '设置'
          },
          component: () => import('@views/setting/setting.vue')
        },
        {
          path: '/accountSafe',
          name: 'accountSafe',
          meta: {
            title: '账号与安全'
          },
          component: () => import('@views/setting/accountSafe/accountSafe.vue')
        },
        {
          path: '/bindPhoneEmail',
          name: 'bindPhoneEmail',
          meta: {
            title: '绑定校验'
          },
          component: () => import('@views/setting/bindPhoneEmail/bindPhoneEmail.vue')
        },
        {
          path: '/newNo',
          name: 'newNo',
          meta: {
            title: '修改校验'
          },
          component: () => import('@views/setting/newNo/newNo.vue')
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
          path: '/cancelMailing',
          name: 'cancelMailing',
          meta: {
            title: '取消寄件'
          },
          component: () => import('@views/cancelMailing/cancelMailing.vue')
        },
        {
          path: '/addressManage',
          name: 'addressManage',
          meta: {
            title: '地址管理'
          },
          component: () => import('@views/addressManage/addressManage.vue')
        },
        {
          path: '/senderAdd',
          name: 'senderAdd',
          meta: {
            title: '新增地址'//寄件人
          },
          component: () => import('@views/addressManage/senderAdd/senderAdd.vue')
        },
        {
          path: '/recipientAdd',
          name: 'recipientAdd',
          meta: {
            title: '新增地址'//收件人
          },
          component: () => import('@views/addressManage/recipientAdd/recipientAdd.vue')
        },
        {
          path: '/personalz',//派送员个人中心
          name: 'personalz',
          meta: {
            title: '个人中心'
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.name != 'authPage'&&to.name != 'authzPage'&& to.name != 'login') {
    let _token = sessionStorage.getItem('wechataccess_token');
      if(to.name=="personalz"){
          //假设派送员是单独的
          if(!_token){
            sessionStorage.setItem('beforeUrl', to.fullPath);
            window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd902e0366907c099&redirect_uri=' + encodeURIComponent('http://' + _API.authUrl + '/authzPage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
          }else{
            next()
          }
      }else{
          //普通用户
          if (!_token) {
            sessionStorage.setItem('beforeUrl', to.fullPath);
            window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd902e0366907c099&redirect_uri=' + encodeURIComponent('http://' + _API.authUrl + '/authPage') + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
          } else {
            next();
          }
      } 
  } else {
    next();
  }
  //禁用分享功能,因为分享功能存在bug（写在路由中是确保刷新后依然没有分享功能）
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
});

router.afterEach((to, from) => {// true 时 为 IOS 设备
  if (window.__wxjs_is_wkwebview) {  // IOS
    if (window.entryUrl == '' || window.entryUrl == undefined) { //记录该地址config配置时使用
      var url = `http://m.express.ui-tech.cn${to.fullPath}`
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

