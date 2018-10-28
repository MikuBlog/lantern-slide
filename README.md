# 自制简易幻灯片插件

<br/>

## 效果图

<img src="https://mikuimg.oss-cn-shenzhen.aliyuncs.com/Plugin/lantern_slide/pic.jpg">

<br/>

## 简介

<br/>

>随手自制的一个简易幻灯片插件

>入口js为```image.main.min.js```，入口css为```image.style.min.css```

<br/>

## 使用

<br/>

>头部引入文件

<br/>

```
<link href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" media="screen" href="css/style.min.css"/>
<script src="js/image.main.min.js"></script>
```

<br/>

>在body内引入这段html代码(body作为引入html代码的父元素)

<br/>

```html
<div class="pic-box pic-box-hide">
    <div class="pic-back"></div>
    <div class="pic-button">
        <span class="pic-icon play-stop">
            <i class="fa fa-play fa-lg pic-play"></i>
            <i class="fa fa-pause fa-lg pic-stop"></i>
        </span>
        <span class="pic-icon">
            <i class="fa fa-television fa-lg pic-fullscreen"></i>
        </span>
        <span class="pic-icon pic-close">
            <i class="fa fa-close fa-lg"></i>
        </span>                    
    </div>
    <div class="pic-arrow pic-left">
        <i class="fa fa-arrow-left fa-lg"></i>
    </div>
    <div class="pic-arrow pic-right">
        <i class="fa fa-arrow-right fa-lg"></i>
    </div>
    <img src="" class="pic-img">
</div>
```

<br/>

>为想要作为幻灯片元素的img标签加上 class="img-slide"(img可处于body内的任意位置)

<br/>

```html
<img src="https://mikuimg.oss-cn-shenzhen.aliyuncs.com/background/null-206187d85a18c16b.jpg" class="img-slide">
<img src="https://mikuimg.oss-cn-shenzhen.aliyuncs.com/background/null43e54b18e61b6b64.jpg" class="img-slide">
```

<br/>

>body后引入如下js代码

<br/>

```js
showPictureBox({

    //轮播间隔时间，单位为毫秒(不填或传入空对象则默认3000毫秒)
    delay:3000

})
```

<br/>

## vue使用

<br/>

>在```image.main.min.js```末尾添加```export default showPictureBox;```

>在所需组件内引入```import showPictureBox from "./xxx/image.main.min.js```

>在main.js引入```import './xxx/style.min.css'```

<br/>

## 兼容性

<br/>

>IE10以上浏览器

<br/>

## 下载

<br/>

>git clone https://github.com/MikuBlog/lantern-slide.git
