import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({ 
  state: {  
    isHeader: true,//头部是否显示 
    isFooter: true,//底部部是否显示
    clearAllShop:false,
    goodsVuex:'',//包裹类型
    weightVuex:1,//包裹重量
    receiptInfoid:'',//收件人id
    receiptInfoname:'',//收件人姓名
    receiptInfotelephone:'',//收件人电话
    receiptInfoprovince:'',//收件人省
    receiptInfocity:'',//收件人市
    receiptInfocounty:'',//收件人区
    receiptInfodetailedAddress:'',//收件人详细地址
  },
  mutations: {
    setMenu( state, statusArr ){
      state.isHeader = statusArr[ 0 ];
      state.isFooter = statusArr[ 1 ];
      state.clearAllShop=statusArr[ 2 ];
    },  
    goodsVuexLoad(state, goodsArr) {
      state.goodsVuex=goodsArr[0]
      state.weightVuex=goodsArr[1]
    },
    toUserMailVuex(state, addressArr) {
      state.receiptInfoid=addressArr.id
      state.receiptInfoname=addressArr.name
      state.receiptInfotelephone=addressArr.telephone
      state.receiptInfoprovince=addressArr.province
      state.receiptInfocity=addressArr.city
      state.receiptInfocounty=addressArr.county
      state.receiptInfodetailedAddress=addressArr.detailedAddress
    }
  }
});

export default store;
