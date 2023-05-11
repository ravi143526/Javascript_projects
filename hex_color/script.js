function toggleData() {
    let arrData = [];
    do{
        arrData.push(Math.floor(Math.random() * 300));
    }while(arrData.length < 3);
    let str = arrData.join(" , ");
    document.getElementById('txt').innerHTML = `rgb(${str})`;
    document.getElementById('div1').style.backgroundColor = `rgb(${str})`;
}

