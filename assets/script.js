var cityInput = document.querySelector("#cityInput");
var searchBtn = document.getElementById("searchBtn");
var availableTags = [
    "Angier",
    "Fuquay-Varina",
    "Raleigh"
  ];

$('#cityInput').autocomplete({
    source: availableTags
});
var APIKey = '8e7dfd8a11ead85b1484cbd7aad925cc';
var cityWeather = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&appid=" + APIKey;

function getInfo() {
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&appid=" + APIKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      });
}


searchBtn.addEventListener("click", getInfo)