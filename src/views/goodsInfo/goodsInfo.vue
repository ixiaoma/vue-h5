<style lang="less">
@import './goodsInfo.less';
</style>
<template>
  <div class="goodsInfo">
      <div class="info">      
          <p>包裹类型</p>    
         <div class="goodslist" v-for="(item,index) in goodsType" :key="index" @click="selectgoods(index)">
             <div :class="current==index?'goodsred':'goods'">{{item.name}}</div>
         </div>
      </div>  
      <div class="weightInfo"> 
          <div class="weight_add_reduce">
           <p>预估重量</p>
            <div class="add_reduce">
                <span class="iconfont icon-jian" @click="reduce"></span>
                <input type="number" v-model="num"/>公斤
                <span class="iconfont icon-jia" @click="add"></span>
            </div>      
           </div>    
           <span class="zhu">注：实际重量以收派员确定为准</span>       
      </div>  
      <button class="button_blue_long" @click="goodssave">保存</button>
  </div>
</template>
<script src="./goodsInfo.js"></script>