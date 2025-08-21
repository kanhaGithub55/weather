const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const humadity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

let apikey= "57ca2a020c1d1e9024e5cd113dfa6f4a";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(town){
    
    const response = await fetch(apiurl + town + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
    
    var data = await response.json();

    city.innerHTML = data.name;
    console.log(town)
    temp.innerHTML= Math.round(data.main.temp) + "°C";
    humadity.innerHTML= data.main.humidity + "%";
    wind.innerHTML= data.wind.speed + "km/h";    

    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


