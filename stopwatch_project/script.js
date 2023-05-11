let watchTxt = document.getElementById('watch');
let ms = 0, secs = 0 ,mins = 0;
let timeRef = null;

document.getElementById('start').onclick = function() {
    timeRef = setInterval(updateTime,10);
}

function updateTime() {
    ms = ms + 10;
    if(ms == 1000) {
        secs = secs + 1;
        ms = 0;
    }
    if(secs == 60) {
        mins = mins + 1;
        secs = 0;
    }
    if(mins == 60) {
        secs = 0;
        ms = 0;
    }

    let m,s;
    if(secs < 10) {
        s = '0' + secs;
    }
    else {
        s = secs;
    }

    if(mins < 10) {
        m = '0' + mins;
    }
    else {
        m = mins;
    }

    watchTxt.innerHTML = m + ' : ' + s + ' : ' + ms;
}

document.getElementById('stop').onclick = function() {
    clearInterval(timeRef);
}

document.getElementById('reset').onclick = function() {
    clearInterval(timeRef);
    ms = 0;
    secs = 0;
    mins = 0;
    watchTxt.innerHTML = '00:00:00';
}