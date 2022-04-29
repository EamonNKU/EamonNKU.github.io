var div = document.getElementById('background-tcpop'); //声明 div,通过元素id获取节点，为了后续对id选择器background-tcpop对应的样式进行操作
        var tcclose = document.getElementById('tcclose-button');  //声明 tcclose 通过元素id获取节点，以便为tcclose添加onclick事件
        function tcshow(){    //函数tcshow()将background-tcpop中的display属性设置为block ，使隐藏的div显示
            div.style.display = "block";
        }
        tcclose.onclick = function tcclose() {  // 点击窗口右上角 ×关闭弹窗；将background-tcpop中的display属性设置为none ，使其隐藏
            div.style.display = "none";
        }
        window.onclick = function tcclose(e) {//点击页面中灰色部分关闭弹窗；将background-tcpop中的display属性设置为none ，使其隐藏
            if (e.target == div) {
                div.style.display = "none";
            }
        }