import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({ 
  state: {  
    isHeader: true,//头部是否显示 
    isFooter: true,//底部部是否显示
    clearAllShop:false,
    selectedDataStore:[]
  },
  mutations: {
    setMenu( state, statusArr ){
      state.isHeader = statusArr[ 0 ];
      state.isFooter = statusArr[ 1 ];
      state.clearAllShop=statusArr[ 2 ];
    },  
    selectedDataLoad(state, selectedData) {
      state.selectedDataStore=selectedData
    }
  }
});

export default store;
