(function() {
    var kehuduan = document.getElementById('kehuduan');
    var erweima = document.getElementById('erweima');
    kehuduan.onmouseover = function() {
        if (erweima.style.display = "none") {
            erweima.style.display = "block";
        } else {
            erweima.style.display = "none";
        }
    }
    kehuduan.onmouseout = function() {
        if (erweima.style.display = "block") {
            erweima.style.display = "none";
        } else {
            erweima.style.display = "block";
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

}(window))