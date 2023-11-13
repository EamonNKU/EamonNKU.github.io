//音乐快捷按钮
function playMusic() {
    var xxx=document.getElementsByClassName("aplayer-pic");
    xxx[0].click();
    return;
}
//随即文章，from(https://blog.leonus.cn/2022/randomPost.html)
function randomPost() {
    fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        while (true) {
            let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
            if (location.href == url) continue;
			pjax.loadUrl("https://www."+url.substring(8));
            return;
        }
    })
}
//根据日间和夜间模式自动更换默认封面
var zzz= $("#page-header").css("background-image");
if(zzz == 'url("https://eamonimgbed.oss-cn-beijing.aliyuncs.com/cover/default_top_dark.webp")' && (document.documentElement.getAttribute('data-theme') === 'light'))
{
	$("#page-header").css("background-image",function(){return 'url("https://eamonimgbed.oss-cn-beijing.aliyuncs.com/cover/default_top_light.webp")'})
}

