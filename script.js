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
        <h3 class="city-name">${data.name.toUpperCase()}</h3>
        <h3 class="city-temp">${data.main.temp} ℃</h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        `
    }
}