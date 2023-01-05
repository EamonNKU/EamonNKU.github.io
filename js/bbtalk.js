!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).timeago={})}(this,function(e){"use strict";var r=["second","minute","hour","day","week","month","year"];var a=["秒","分钟","小时","天","周","个月","年"];function t(e,t){n[e]=t}function i(e){return n[e]||n.en_US}var n={},f=[60,60,24,7,365/7/12,12];function o(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function d(e,t){for(var n=e<0?1:0,r=e=Math.abs(e),a=0;e>=f[a]&&a<f.length;a++)e/=f[a];return(0===(a*=2)?9:1)<(e=Math.floor(e))&&(a+=1),t(e,a,r)[n].replace("%s",e.toString())}function l(e,t){return((t?o(t):new Date)-o(e))/1e3}var s="timeago-id";function h(e){return parseInt(e.getAttribute(s))}var p={},v=function(e){clearTimeout(e),delete p[e]};function m(e,t,n,r){v(h(e));var a=r.relativeDate,i=r.minInterval,o=l(t,a);e.innerText=d(o,n);var u,c=setTimeout(function(){m(e,t,n,r)},Math.min(1e3*Math.max(function(e){for(var t=1,n=0,r=Math.abs(e);e>=f[n]&&n<f.length;n++)e/=f[n],t*=f[n];return r=(r%=t)?t-r:t,Math.ceil(r)}(o),i||1),2147483647));p[c]=0,u=c,e.setAttribute(s,u)}t("en_US",function(e,t){if(0===t)return["just now","right now"];var n=r[Math.floor(t/2)];return 1<e&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]}),t("zh_CN",function(e,t){if(0===t)return["刚刚","片刻后"];var n=a[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}),e.cancel=function(e){e?v(h(e)):Object.keys(p).forEach(v)},e.format=function(e,t,n){return d(l(e,n&&n.relativeDate),i(t))},e.register=t,e.render=function(e,t,n){var r=e.length?e:[e];return r.forEach(function(e){m(e,e.getAttribute("datetime"),i(t),n||{})}),r},Object.defineProperty(e,"__esModule",{value:!0})});

document.getElementById('bber-talk').addEventListener('click', () => {
  pjax.loadUrl("/bb");
  window.location.pathname = '/bb/'; // 在这修改你的哔哔页面地址
})

bbtalk();

function bbtalk() {

    let data = JSON.parse(localStorage.getItem('bibi'));
    let nowTime = Date.now();
    let ls;
    if (data == null || nowTime - data.time >= 1800000) { // 设置缓存时长，单位毫秒，默认30分钟，建议10分钟以上，不能为0，想不缓存自己改代码。
        getData();
        return
    } else {
        ls = JSON.parse(data.ls)
    };
    let bberHtml = ''
    ls.forEach((item, i) => {
        let br = /[\s\uFEFF\xA0]+/g;
        item.content = item.content.replace(br, '')
        let d = new Date(item.createdAt)
        let date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        let dataTime = timeago.format(date, 'zh_CN');
        let newdataTime = '<span class="datatime">' + dataTime + '</span>'

        bberHtml += '<li class="item item-' + (i + 1) + '">' + newdataTime + '： ' + urlToLink(item.content) + '</li>'
    });
    document.getElementById("bber-talk").innerHTML += '<i style="margin-right: 10px;" class="fa-regular fa-message"></i><ul class="talk-list">' + bberHtml + '</ul><i class="fa-solid fa-angles-right pass bber-icon"></i>'
}

function getData() {
    let jsonUrl = 'https://kkapi.fanyiming.life/api/ispeak?author=62f986767dea16f35be87804' // 在这修改api
    fetch(jsonUrl)
        .then(res => res.json())
        .then((data) => {
            data = { time: Date.now(), ls: JSON.stringify(data.data.items) }
            localStorage.setItem('bibi', JSON.stringify(data))
        }).then(() => {
            bbtalk();
        }).catch(() => {
            console.log('获取哔哔数据失败！');
        });
}

function urlToLink(str) {
    let re_forimg = /<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g;
    str = str.replace(re_forimg, '<i class="fa-solid fa-image"></i>');
    return str
}

function Roll() {
    try {
        let list_li = Array.prototype.slice.call(document.querySelectorAll('.talk-list li'));
        let tmp = list_li[0];
        list_li.splice(0, 1);
        list_li.push(tmp);
        let list = document.querySelector('ul.talk-list')
        list_li.forEach((item) => {
            list.appendChild(item)
        });
    } catch (error) {}
};
setInterval(Roll, 3000);