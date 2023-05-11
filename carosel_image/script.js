let allData = [];

let i = 0;
let bwd = document.getElementById('backward');
let fwd = document.getElementById('forward');

window.onload = async function getAllData() {
    let reponse = await fetch('https://fakestoreapi.com/products');
    let data = await reponse.json();
    data.filter(item => {
        delete item.id;
        delete item.category;
        delete item.price;
        delete item.rating;
        allData.push(item);
    })
}
 console.log(allData);

function updateData(id) {
    if(id >= 0) {
    let itemOne = allData[id];
    console.log(itemOne);
    document.getElementById('myTitle').innerHTML = itemOne.title;
    document.getElementById('myImg').src = itemOne.image;
    document.getElementById('myDesc').innerHTML = itemOne.description;
    }
    else {
        bwd.style.backgroundColor = 'wheat';
        bwd.style.opacity = '0.2';
    }
} 

fwd.addEventListener('click',function() {
    updateData(++i);
})

bwd.addEventListener('click',function() {
    updateData(--i);
})


