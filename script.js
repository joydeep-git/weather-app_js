const form = document.getElementById("form");
const searchBar = document.getElementById("search-bar");
const searchIcon = document.getElementById("search-icon");
const weather = document.getElementById("weather");
const weatherCondition = document.getElementById("weather-condition");
const weatherDetails = document.getElementById("weather-details");

const api_key = "057ea19ec41498ef7d0861d91f158904";

searchIcon.addEventListener("click", (e) => {
    if (searchBar.value == "") {
        alert('enter city name');
    } else {
        e.preventDefault();
        getWeather(searchBar.value);
        searchBar.value = "";
    }
})

form.addEventListener("submit", (e) => {
    if (searchBar.value == "") {
        alert('enter city name');
    } else {
        e.preventDefault();
        getWeather(searchBar.value);
        searchBar.value = "";
    }
})

const getWeather = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const response = await (await fetch(url)).json();
    showData(response);
    console.log(response);
}

const showData = (data) => {
    if (data.cod == '404') {
        alert("city not found, enter again");
        return;
    } else {
        weatherCondition.innerHTML = `
        <img class="weather-image" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" id="weather-image" class="weather-image">
        <h5 class="city-condition">${data.weather[0].main}</h5>`;

        weatherDetails.innerHTML = `
        <div>
        <h3> City</h3>
        <p>${data.name.toUpperCase()}</p>
        </div>

        <div>
        <h3> Temperature </h3>
        <p>${data.main.temp} ℃</p>
        </div>

        <div>
        <h3>Max Temp</h3>
        <p> ${data.main.temp_max} ℃</p>
        </div>

        <div>
        <h3> Min Temp</h3>
        <p>${data.main.temp_min} ℃</p>
        </div>

        <div>
        <h3> Humidity</h3>
        <p>${data.main.humidity}</p>
        </div>

        <div>
        <h3> Wind Speed</h3>
        <p>${data.wind.speed} KM / h</p>
        </div>
        `
    }
}