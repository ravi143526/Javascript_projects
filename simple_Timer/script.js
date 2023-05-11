let text = document.getElementById('cst-counter');
let ms = 0;
let secs = 0;
let mins = 0;
let timeRef = null;

function startFun() {
    timeRef = setInterval(getStart,10);
}

function getStart() {
    ms = ms + 10;
    if(ms == 1000) {
        secs = secs + 1;
        ms = 0;
    }
    if(secs == 60){
        mins = mins + 1;
        secs = 0;
    }
    if(mins == 60) {
        secs = 0;
        ms = 0;
    }
    let m,s;
    if(secs < 10){
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
    text.innerHTML = m + ' : ' + s + ' : ' + ms;
}

 function pauseFun() {
    clearInterval(timeRef);
 }

 function resetFun() {
    clearInterval(timeRef);
    text.innerHTML = 00 + ' : ' + 00 + ' : ' + 00;
 }