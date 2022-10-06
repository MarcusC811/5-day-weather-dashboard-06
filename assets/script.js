var sameTempSpan = document.getElementById("day0");
var nextdaySpan = document.getElementById("day1");
var followdaySpan = document.getElementById("day2");
var followdaySpan2 = document.getElementById("day3");
var followdaySpan3 = document.getElementById("day4");
var cityInput = document.querySelector("#cityInput");
var searchBtn = document.getElementById("searchBtn");
var cityFill = document.getElementById("city-text0");
var cityFill1 = document.getElementById("city-text1");
var cityFill2 = document.getElementById("city-text2");
var cityFill3 = document.getElementById("city-text3");
var cityFill4 = document.getElementById("city-text4");
var date0span = document.querySelector("date0");
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
var APIKey3 = '87c21d5655399232649628c513cca2e0';
const cityWeather = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&cnt=3&appid=" + APIKey;
const city = cityInput.value;

var cityGeo = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput.value+ "&limit=5&appid=" + APIKey;

function getInfo() {
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
      var responseCity = data.city.name;
      var cityLat = data.city.coord.lat;
      var cityLog = data.city.coord.lon;
      displayWeather(responseCity, cityLat, cityLog)
      });
}

function displayWeather (responseCity, cityLat, cityLog) {
  fetch("https://api.openweathermap.org/data/3.0/onecall?lat=" + cityLat + "&lon=" + cityLog + "&exclude=hourly,minutely,alerts&appid=" + APIKey3 )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // 1st Day Card
      var Day0Temp = Math.floor(((data.daily[0].feels_like.day) - 273.15) * 9/5 + 32);
      sameTempSpan.innerText = Day0Temp + '°F';

      // 2nd Day Card
      var Day1Temp = Math.floor(((data.daily[1].feels_like.day) - 273.15) * 9/5 + 32);
      nextdaySpan.innerText = Day1Temp + '°F';
      cityFill1.innerText = "Wind: " + data.daily[1].wind_speed + "MPH";

      // 3rd Day Card
      var Day2Temp = Math.floor(((data.daily[2].feels_like.day) - 273.15) * 9/5 + 32);
      followdaySpan.innerText = Day2Temp + '°F';
      cityFill2.innerText = "Wind: " + data.daily[2].wind_speed + "MPH";

      // 4th Day Card
      var Day3Temp = Math.floor(((data.daily[3].feels_like.day) - 273.15) * 9/5 + 32);
      followdaySpan2.innerText = Day3Temp + '°F';
      cityFill3.innerText = "Wind: " + data.daily[3].wind_speed + "MPH";

      // 5th Day Card
      var Day4Temp = Math.floor(((data.daily[4].feels_like.day) - 273.15) * 9/5 + 32);
      followdaySpan3.innerText = Day4Temp + '°F';
      cityFill4.innerText = "Wind: " + data.daily[4].wind_speed + "MPH";
      }
    );
  
  
  cityFill.innerText = responseCity;
}

searchBtn.addEventListener("click", getInfo)
