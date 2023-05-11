let val = document.getElementById('screen');

function getValue(v) {
    val.innerHTML += v;
    console.log(v);
}

function clearData() {
    val.innerHTML = '';
}

function solve() {
    val.innerHTML = eval(val.innerHTML);
}