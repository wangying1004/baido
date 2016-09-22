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
}(window))