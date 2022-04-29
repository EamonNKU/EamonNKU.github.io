window.onload=function(){
	var div = document.getElementById('background-tcpop');
	var tcclose = document.getElementById("close-tcbutton");
	tcshow=function(){  
		div.style.display = "block";
        	}
          tcclose.onclick = function tcclose() {
          	div.style.display = "none";
          }
          window.onclick = function tcclose(e) {
          	if (e.target == div) {
              		div.style.display = "none";
           	}
        	}
}