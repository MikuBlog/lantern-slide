
var showPictureBox = (function() {

    return function(obj) {

        // 获取图片盒子元素
        var picBox = document.querySelector('.pic-box')

        // 获取底幕元素
        var backElem = document.querySelector('.pic-back')

        // 获取图片元素
        var images = document.querySelectorAll('.img-slide')

        // 获取盒子图片元素
        var img = document.querySelector('.pic-img')

        // 获取关闭按钮
        var close = document.querySelector('.pic-close')

        // 获取左按钮元素
        var leftArrow = document.querySelector('.pic-left')

        // 获取右按钮元素
        var rightArrow = document.querySelector('.pic-right')

        // 获取播放按钮元素
        var playButton = document.querySelector('.pic-play')

        // 获取暂停按钮元素
        var stopButton = document.querySelector('.pic-stop')

        // 获取全屏按钮元素
        var fullScreenButton = document.querySelector('.pic-fullscreen')

        // 存放图片地址列表
        var url = []

        // 记录图片url对应数组的索引值
        var index

        // 存放定时器引用
        var time

        var time_2

        var time_3

        // 保存全屏状态
        var isFullScreen = false

        // 判断是否传入对象
        var config = obj || {}

        // 图片自适应
        var nature = function(url) {

            var image = new Image()

            image.src = url

            //适配pc端与移动端
            if(document.body.clientWidth>document.body.clientHeight) {

                if(image.width > image.height) {

                    img.style.width = "65%"
    
                    img.style.height = "auto"
    
                }else {
    
                    img.style.height = "80%"
    
                    img.style.width = "auto"
    
                }

            }else {

                    img.style.width = "50%"
    
                    img.style.height = "auto"

                    if(document.body.clientWidth < 776) {

                        img.style.width = "90%"

                    }

            }

        }

        // 点击事件回调函数
        var handleClick = function(command) {


            switch(command) {

                case "hide":
                    picBox.classList.add('pic-box-hide')
                    picBox.classList.remove('pic-box-show')
                    break
                case "show":
                    picBox.classList.add('pic-box-show')
                    picBox.classList.remove('pic-box-hide')
                    break
                case "left":
                    if(index == 0) {

                        img.src = url[0]

                        stopTime()

                        showPlayButton()

                        return

                    }
                    showPlayButton()
                    nature(url[--index])
                    img.src = url[index]
                    stopTime()
                    break
                case "right":
                    if(index == url.length - 1) {

                        img.src = url[url.length - 1]

                        stopTime()

                        showPlayButton()

                        return

                    }
                    showPlayButton()
                    nature(url[++index])
                    img.src = url[index]
                    stopTime()
                    break
            }

        }

        // 暂停轮播
        var stopTime = function () {

            clearInterval(time)

            clearTimeout(time_2)

            clearTimeout(time_3)

        }

        // 显示播放按钮
        var showPlayButton = function() {

            playButton.style.display = "block"

            stopButton.style.display = "none"

        }

        // 显示暂停按钮
        var showStopButton = function() {

            stopButton.style.display = "block"

            playButton.style.display = "none"

        }

        // 淡入图片
        var showPic = function() {

            img.classList.add('pic-img-show')

            img.classList.remove('pic-img-hide')

        }

        // 淡出图片
        var hidePic = function() {

            img.classList.add('pic-img-hide')

            img.classList.remove('pic-img-show')

        }

        // 全屏显示
        var fullScreen = function(element) {

            var requestMethod =element.requestFullScreen

             ||element.webkitRequestFullScreen //谷歌

             ||element.mozRequestFullScreen  //火狐

             ||element.msRequestFullScreen; //IE11

             if(requestMethod) {

                requestMethod.call(element);

             }else if(typeof window.ActiveXObject !== "undefined") {

                var wscript = new ActiveXObject("WScript.Shell"); //创建ActiveX
                
                if (wscript !== null) {    //创建成功

                    wscript.SendKeys("{F11}");//触发f11   

                }   

             }

        }

        // 退出全屏
        var exitFullScreen = function() {

            var exitMethod = document.exitFullscreen || //W3C

            document.mozCancelFullScreen || //Chrome等

            document.webkitExitFullscreen || //FireFox

            document.webkitExitFullscreen; //IE11

            if (exitMethod) {

                exitMethod.call(document);

            }
            else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer

                var wscript = new ActiveXObject("WScript.Shell");

                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }

        }

        // 当屏幕大小发生改变时图片自适应屏幕
        window.addEventListener('resize',function() {

            nature(url[index])

        })

        // 给底幕增加点击事件，用于隐藏图片盒子
        backElem.addEventListener('click',function() {

            handleClick('hide')

            stopTime()

            showPlayButton()

        })

        // 给关闭按钮增加点击事件，用于隐藏图片盒子
        close.addEventListener('click',function() {

            handleClick('hide')

            exitFullScreen()

            stopTime()

            showPlayButton()

        })

        // 给左箭头增加点击事件
        leftArrow.addEventListener('click',function() {

            handleClick("left")

        })

        // 给右箭头增加点击事件
        rightArrow.addEventListener('click',function() {

            handleClick("right")

        })

        // 给播放按钮增加点击事件
        playButton.addEventListener('click',function() {

            showStopButton()

            time_2 = setTimeout(function() {

                hidePic()

            },config.delay - 500 || 3000 - 500)

            time_3 = setTimeout(function() {

                if(index == url.length - 1) {

                    nature(url[index = 0])

                    img.src = url[index]

                    return

                }

                nature(url[++index])

                img.src = url[index]
                
            },config.delay || 3000 )

            time = setInterval(function() {

                showPic()

                time_2 = setTimeout(function() {

                    hidePic()

                    },config.delay - 500 || 3000 - 500)

                time_3 = setTimeout(function() {

                    if(index == url.length - 1) {

                        nature(url[index = 0])
    
                        img.src = url[index]
    
                        return
    
                    }
    
                    nature(url[++index])
    
                    img.src = url[index]
                    
                },config.delay || 3000 )

            },config.delay || 3000)

        })

        // 给暂停按钮增加点击事件,暂停轮播
        stopButton.addEventListener('click',function() {

            showPlayButton()

            stopTime()

        })

        // 给全屏按钮增加点击事件
        fullScreenButton.addEventListener('click',function() {

            if(isFullScreen == false) {

                fullScreen(picBox)

                isFullScreen = true

            }else {

                exitFullScreen()

                isFullScreen = false

            }

        })

        // 遍历获取图片url并给图片增加点击事件
        images.forEach(function(value,ind) {

            value.addEventListener('click',function() {

                handleClick("show")

                nature(value.src)

                img.src = value.src

                index = ind

                showPic()

            })

            url.push(value.src)

        })

    }

})()
