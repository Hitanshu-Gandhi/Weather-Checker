const apiKey = "d486cab7e595d0f61542fae43beb933f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkwhether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        document.querySelector(".lat").innerHTML = data.coord.lat ;
        document.querySelector(".lon").innerHTML = data.coord.lon ;


        document.querySelector(".weather").style.display = "block";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "cloudy.jpg";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.jpg";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }


        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    checkwhether(searchBox.value);
})