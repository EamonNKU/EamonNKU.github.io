var head=document.getElementsByTagName("head")[0],meta=document.createElement("meta");meta.name="referrer",head.appendChild(meta),ispeak?ispeak.init({el:"#ispeak",api:"https://kkapi.fanyiming.life/",author:"62f986767dea16f35be87804",pageSize:10,loading_img:"https://eamonimgbed.oss-cn-beijing.aliyuncs.com/img/imgloading.gif"}).then((function(){console.log("ispeak 加载完成"),document.getElementById("tip").style.display="none"})):document.getElementById("tip").innerHTML="ipseak依赖加载失败！";