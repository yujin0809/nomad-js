const API_KEY = "62ad5ba9ff183707e7605ffe20aef255";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather .weather");
        const city = document.querySelector("#weather .city");
        const temp = document.querySelector("#weather .temp");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
        temp.innerText = `${Math.floor(data.main.temp)} ℃`;
    });
}

function onGeoError(){
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
