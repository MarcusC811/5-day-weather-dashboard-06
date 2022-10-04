var cityInput = document.getElementById("cityInput");
var availableTags = [
    "Angier",
    "Fuquay",
    "Raleigh"
  ];

$('#cityInput').autocomplete({
    source: availableTags
});
var APIKey = '8e7dfd8a11ead85b1484cbd7aad925cc';
var city = 'Raleigh';
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var cityWeather = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

console.log(cityWeather);

function getInfo() {
  
}