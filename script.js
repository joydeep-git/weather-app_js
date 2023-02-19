//ELEMENT import
const form = document.getElementById("form");
const searchBar = document.getElementById("search-bar");
const searchIcon = document.getElementById("search-icon");
const imageHolder = document.getElementById("image-holder");
const showDetails = document.getElementById('show-details');
const detailsHolder = document.getElementById("details-holder");
//

//API details
const api_key = "057ea19ec41498ef7d0861d91f158904";
// img link = " http://openweathermap.org/img/wn/${.......}@2x.png";
// API link = "https://api.openweathermap.org/data/2.5/weather?q={......}&appid={.......}&units=metric";
//

// WHEN SEARCH ICON IS USED
searchIcon.addEventListener("click", (e) => {
    if (searchBar.value == "") {
        alert('enter city name');
    } else {
        e.preventDefault();
        getWeather(searchBar.value);
        searchBar.value = "";
    }
})
//

// WHEN ENETR BTN IS USED
form.addEventListener("submit", (e) => {
    if (searchBar.value == "") {
        alert('enter city name');
    } else {
        e.preventDefault();
        getWeather(searchBar.value);
        searchBar.value = "";
    }
})
//

const getWeather = async (city) => {
    detailsHolder.innerHTML = `<h3 class="city-name">Loading....</h3>`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    showData(data);
}

const showData = (data) => {
    if (data.cod == '404') {
        alert("city not found, enter again");
        return;
    } else {
        imageHolder.innerHTML = `<img class="weather-image" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" id="weather-image" class="weather-image">`

        detailsHolder.innerHTML = `
        <h3 class="city-name">${data.name.toUpperCase()}</h3>
        <h3 class="city-temp">${data.main.temp} ℃</h3>
        <h5 class="city-condition">${data.weather[0].main}</h5>`
    }
}