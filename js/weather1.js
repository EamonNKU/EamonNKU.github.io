(function (d) {
  var c = d.createElement('link')
  c.rel = 'stylesheet'
  c.href = '/css/he-simple.css'
  var s = d.createElement('script')
  s.src = 'https://widget.qweather.net/simple/static/js/he-simple.js?v=1.4.0'
  var sn = d.getElementsByTagName('script')[0]
  sn.parentNode.insertBefore(c, sn)
  sn.parentNode.insertBefore(s, sn)
})(document)