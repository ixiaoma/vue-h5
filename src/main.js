import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../src/store'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css';
import './main.css'

import { postFn, getFn } from './libs/http.js'
import {Header,Button,Toast,InfiniteScroll,Spinner,Cell,Field,Popup,Picker,Radio,Checklist,Switch,TabContainer,TabContainerItem,Navbar,TabItem,Loadmore,Search } from 'mint-ui';
import wx from 'weixin-js-sdk';
import _API from '@/libs/api'

Vue.component('mt-header', Header);
Vue.component('mt-button', Button);
Vue.component('mt-spinner', Spinner);
Vue.component('mt-cell', Cell);
Vue.component('mt-field', Field);
Vue.component('mt-popup', Popup);
Vue.component('mt-picker', Picker);
Vue.component('mt-radio', Radio);
Vue.component('mt-switch', Switch);
Vue.component('mt-navbar', Navbar);
Vue.component('mt-tab-item', TabItem);
Vue.component('mt-tab-container', TabContainer);
Vue.component('mt-tab-container-item', TabContainerItem);
Vue.component('mt-loadmore', Loadmore);
Vue.component('mt-checklist', Checklist);
Vue.component('mt-search', Search);
Vue.use(InfiniteScroll);
Vue.config.productionTip = false;

Vue.prototype.$post = postFn;
Vue.prototype.$get = getFn;
Vue.prototype.Toast = Toast;
Vue.prototype.wx = wx;
Vue.prototype.bus = new Vue();
Vue.prototype.GLOBAL = _API;

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
