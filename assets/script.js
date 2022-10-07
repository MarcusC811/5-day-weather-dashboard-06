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
var hisIndex = 0;
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
      var historyBtn = $("<button data-city=" + responseCity + "class='hisBtn'>" + responseCity + "</button>");
      $('#searchHistory').append(historyBtn);
      hisStore (hisIndex, responseCity);
      hisIndex++;
      // 1st Day Card
      var Day0Temp = Math.floor(((data.daily[0].feels_like.day) - 273.15) * 9/5 + 32);
      var dateString0 = moment.unix(data.daily[0].dt).format("MM/DD/YYYY");
      var humPerc0 = data.daily[0].humidity;
      var wCode0 = data.daily[0].weather[0].icon;
      $("#pic0").attr( "src", "https://openweathermap.org/img/wn/" + wCode0 + "@2x.png");
      sameTempSpan.innerText = Day0Temp + '°F';
      cityFill.innerText = responseCity + " Wind: " + data.daily[0].wind_speed + "MPH - " + "Humidity: " + humPerc0 + "% " +  dateString0;

      // 2nd Day Card
      var Day1Temp = Math.floor(((data.daily[1].feels_like.day) - 273.15) * 9/5 + 32);
      var dateString1 = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
      var humPerc1 = data.daily[1].humidity;
      var wCode1 = data.daily[1].weather[0].icon;
      $("#pic1").attr( "src", "https://openweathermap.org/img/wn/" + wCode1 + "@2x.png");
      nextdaySpan.innerText = Day1Temp + '°F';
      cityFill1.innerText = "Wind: " + data.daily[1].wind_speed + "MPH - " + "Humidity: " + humPerc1 + "% " + dateString1;

      // 3rd Day Card
      var Day2Temp = Math.floor(((data.daily[2].feels_like.day) - 273.15) * 9/5 + 32);
      var dateString2 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
      var humPerc2 = data.daily[2].humidity;
      var wCode2 = data.daily[2].weather[0].icon;
      $("#pic2").attr( "src", "https://openweathermap.org/img/wn/" + wCode2 + "@2x.png");
      followdaySpan.innerText = Day2Temp + '°F';
      cityFill2.innerText = "Wind: " + data.daily[2].wind_speed + "MPH - " + "Humidity: " + humPerc2 + "% " + dateString2;

      // 4th Day Card
      var Day3Temp = Math.floor(((data.daily[3].feels_like.day) - 273.15) * 9/5 + 32);
      var dateString3 = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
      var humPerc3 = data.daily[3].humidity;
      var wCode3 = data.daily[3].weather[0].icon;
      $("#pic3").attr( "src", "https://openweathermap.org/img/wn/" + wCode3 + "@2x.png");
      followdaySpan2.innerText = Day3Temp + '°F';
      cityFill3.innerText = "Wind: " + data.daily[3].wind_speed + "MPH - " + "Humidity: " + humPerc3 + "% " + dateString3;

      // 5th Day Card
      var Day4Temp = Math.floor(((data.daily[4].feels_like.day) - 273.15) * 9/5 + 32);
      var dateString4 = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");
      var humPerc4 = data.daily[4].humidity;
      var wCode4 = data.daily[4].weather[0].icon;
      $("#pic4").attr( "src", "https://openweathermap.org/img/wn/" + wCode4 + "@2x.png");
      followdaySpan3.innerText = Day4Temp + '°F';
      cityFill4.innerText = "Wind: " + data.daily[4].wind_speed + "MPH - " + "Humidity: " + humPerc4 + "% " + dateString4;
      $(".hisBtn").on("click", test);
      }
    );
}

function test (event) {
  
}

function hisStore (hisIndex, responseCity) {
  localStorage.setItem("city"+hisIndex, responseCity)
}

searchBtn.addEventListener("click", getInfo)

// "https://openweathermap.org/img/wn/" + wCode0 + "@2x.png";
