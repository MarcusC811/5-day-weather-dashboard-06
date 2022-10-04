// Geo
// api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}

var sameTempSpan = document.getElementById("same-day");
var cityInput = document.querySelector("#cityInput");
var searchBtn = document.getElementById("searchBtn");
var cityFill = document.getElementById("city-text");
var availableTags = [
    "Angier",
    "Fuquay-Varina",
    "Raleigh"
  ];
var listHistory = document.getElementsByClassName("ui-helper-hidden-accessible");

$('#cityInput').autocomplete({
    source: availableTags
});
var APIKey = '8e7dfd8a11ead85b1484cbd7aad925cc';
const cityWeather = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&cnt=3&appid=" + APIKey;
const city = cityInput.value;

var cityGeo = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput.value+ "&limit=5&appid=" + APIKey;





function getInfo() {
  console.log(cityGeo);


  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&appid=" + APIKey)
    .then(function (response) {
      if(!response.ok) {
        alert("Couldn't find that city, Please Try Again")
        return;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // Formula for calculationg K to F
      var sameDayTemp = Math.floor(((data.list[0].main.feels_like) - 273.15) * 9/5 + 32);
      var responseCity = data.city.name;
      displayWeather(sameDayTemp, responseCity)
      });
}

function displayWeather (sameDayTemp, responseCity) {
  sameTempSpan.innerText = sameDayTemp + '°F';
  cityFill.innerText = responseCity;
}

searchBtn.addEventListener("click", getInfo)
