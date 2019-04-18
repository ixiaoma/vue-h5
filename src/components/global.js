import Vue from 'vue';

//找到components文件夹及子文件夹下以.vue命名的文件
const requireComponent = require.context(
  '.', true, /\.vue$/
);

function capitalizeFirstLetter( string ){
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function changeName ( comName ) {
  let name = comName;
  if(comName.indexOf("/") != "-1") {
    name = `com-${comName.substring(0,comName.indexOf("/"))}`.toLowerCase();
  }
  return name;
}

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  );
  Vue.component(changeName(componentName), componentConfig.default || componentConfig)
});
