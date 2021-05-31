let time = 10;
	let ovenTimer = setInterval(function(){
	if(time <= 0){
		clearInterval(ovenTimer);
		document.getElementById("countdown").innerHTML = "00 : 00";
	} else {
		if(time < 10){
			document.getElementById("countdown").innerHTML = "00 : 0"+ time + "";
		} else {
			document.getElementById("countdown").innerHTML = "00 : "+ time + "";
		}
	}
	time -= 1;
	}, 1000);