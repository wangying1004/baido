(function() {
    var kd = document.getElementById('kd');
    var tu = document.getElementById('tu');
    kd.onmouseover = function() {
        if (tu.style.display = "none") {
            tu.style.display = "block";
        } else {
            tu.style.display = "none";
        }
    }
    kd.onmouseout = function() {
        if (tu.style.display = "block") {
            tu.style.display = "none";
        } else {
            tu.style.display = "block";
        }
    }
    var photoschange = document.getElementById('photoschange');
    var click1_photoschange = document.getElementById('click1_photoschange');
    var click_photoschange = document.getElementById('cp');
    click1_photoschange.onclick = function() {
        if (photoschange.src.match("3.jpg")) {
            photoschange.src = "9.jpg";
        } else if (photoschange.src.match("9.jpg")) {
            photoschange.src = "8.jpg";
        } else if (photoschange.src.match("8.jpg")) {
            photoschange.src = "7.jpg";
        } else if (photoschange.src.match("7.jpg")) {
            photoschange.src = "6.jpg";
        } else if (photoschange.src.match("6.jpg")) {
            photoschange.src = "5.jpg";
        } else if (photoschange.src.match("5.jpg")) {
            photoschange.src = "4.jpg";
        } else if (photoschange.src.match("4.jpg")) {
            photoschange.src = "3.jpg";
        }
    }

    click_photoschange.onclick = function() {
        if (photoschange.src.match("3.jpg")) {
            photoschange.src = "4.jpg";
        } else if (photoschange.src.match("4.jpg")) {
            photoschange.src = "5.jpg";
        } else if (photoschange.src.match("5.jpg")) {
            photoschange.src = "6.jpg";
        } else if (photoschange.src.match("6.jpg")) {
            photoschange.src = "7.jpg";
        } else if (photoschange.src.match("7.jpg")) {
            photoschange.src = "8.jpg";
        } else if (photoschange.src.match("8.jpg")) {
            photoschange.src = "9.jpg";
        } else if (photoschange.src.match("9.jpg")) {
            photoschange.src = "3.jpg";
        }
    }
    var deng = document.getElementById("deng");
    deng.onclick=function(){
    	if(document.getElementById('denglu').style.display="none"){
    		document.getElementById('denglu').style.display="block"
    	}
    }
    var img = document.getElementById("img18");
    img.onclick=function(){
    	if(document.getElementById('denglu').style.display="block"){
    		document.getElementById('denglu').style.display="none"
    	}
    }

    var img20 = document.getElementById('img20');
    img20.onclick = function(){
        if(document.getElementById('er').style.display="none"){
            document.getElementById('er').style.display="block";
        }
    }

    var img8 = document.getElementById('img8');
    img8.onclick = function(){
        if(document.getElementById('er').style.display="block"){
            document.getElementById('er').style.display="none";
        }
    }


}(window))