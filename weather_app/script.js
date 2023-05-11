const apiKey = '8f4485f5f505ef4d2ad72e90b213a15f' ;

let loc = document.getElementById('txt');

let cityName = document.getElementById('city');
let cloud = document.getElementById('cloud');
let wind = document.getElementById('wind');

document.getElementById('search').onclick = async function() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=${apiKey}`);
    let data = await response.json();
    cityName.innerHTML = data.name;
    cloud.innerHTML = data.clouds.all;
    wind.innerHTML = data.wind.deg + 'Deg';
    console.log(data);
}