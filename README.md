# spmmobile

> spmmobile1.0

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# //移动端适配（考虑>750px的平板和电脑）
方案1
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;/*clientWidth不包含滚动条与工具条*/
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';//或者750  (640和750是设计稿的宽度，我们在写的时候，是按照设计稿来，所以没必要再/2  [如有不理解，请参考物理像素和逻辑像素来理解]。然而本项目并没有按照设计稿来做,因为本没有设计稿,以致于是根据320px来做的,所以我们需要在这里只需要改成clientWidth/320)
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


方案2(此项目采用)   main.css设置html{font-size:31.25vw}
var html=document.documentElement;
console.log(html.clientWidth);/*clientWidth不包含滚动条与工具条*/
if(html.clientWidth > 750) {//或者>640,这是按照设计图来的
  html.style.fontSize="100px"//或者625%
}

方案3  要在main.css写font-size:625%  
(31.25vw是按照屏幕宽度换算的,625%是按照默认字体大小来换算的,两种换算方式不一样，但是结果是一样的，都是font-size:100px)





---------------- ????   3个方案解释  ????------------------  

方案1  是根据屏幕宽度来计算的，上面有解释

方案2  是根据屏幕宽度来计算的。  1rem=100px ,font-size:31.25vw(按照320逻辑像素，640物理像素来的)在使用的时候就需要按照设计稿的px(或者rem)除以2  (设计稿跟咋们做的手机端是以2倍关系来的，这就是物理现象和逻辑像素。当然有部分的设计稿是1080px，那么他的换算是以3倍来的，这种的几乎不常见)

方案3是根据默认字体大小计算的100px/16px=6.25=625%, 100代表100px,这里是以100px来换算的。当然有些地方是10px/16px=62.5%，以10px来换算的。


不同的换算是按照开发者的习惯来的。


