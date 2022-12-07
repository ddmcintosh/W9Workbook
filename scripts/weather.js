"use strict";

let cities = [
  {
    name: "Chicago, Illinois",
    latitude: 41.8781,
    longitude: -87.6298,
  },

  {
    name: "Dallas, Texas",

    latitude: 32.7767,
    longitude: -96.797,
  },

  {
    name: "Los Angeles, California",

    latitude: 34.0522,
    longitude: -118.2437,
  },

  {
    name: "Miami, Florida",

    latitude: 25.7617,
    longitude: -80.1918,
  },

  {
    name: "New York, New York",

    latitude: 40.7128,
    longitude: -74.006,
  },
];

window.onload = init;

function init() {
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.onclick = SearchBtnOnClick;

  const searchTypeDropdown = document.getElementById("searchTypeDropdown");

  for (let city of cities) {
    let option = new Option(city.name, city.name);
    searchTypeDropdown.appendChild(option);
  }
}

function SearchBtnOnClick() {
  //const divResults = document.getElementById("divResults");
  const tableForWeather = document.getElementById("tableForWeather");

  const searchTypeDropdown =
    document.getElementById("searchTypeDropdown").value;

  tableForWeather.innerHTML = "--" + searchTypeDropdown;
  console.log(searchTypeDropdown);

  for (let city of cities) {
    console.log(city.name);
    if (city.name == searchTypeDropdown) {
      console.log(
        `https://api.weather.gov/points/${city.latitude},${city.longitude}`
      );
      fetch(`https://api.weather.gov/points/${city.latitude},${city.longitude}`)
        .then((response) => response.json())
        .then((data) => {
          let weatherUrl = data.properties.forecast;
          test(weatherUrl);
        });
    }
  }
}

function testsecondAPI(forecastUrl) {
  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data.properties.periods);
    });
}

function displayWeather(cities) {
  const tableForWeather = document.getElementById("tableForWeather");

  for (let city of cities) {
    let row = tableForWeather.insertRow(-1);
    //loop through each of the properties of the object
    for (let y in city) {
      //only if the ACTUAL property(not its value) is one of the specified ones, include its value, otherwise leave it
      switch (y) {
        case "name":
          let cell1 = row.insertCell(0);
          cell1.innerHTML = city.name;
          break;
        case "temperature":
          let cell2 = row.insertCell(1);
          cell2.innerHTML = city.temperature;
          break;
        case "windSpeed":
          let cell3 = row.insertCell(2);
          cell3.innerHTML = `${city.windDirection} ${city.windSpeed}`;
          break;
        case "shortForecast":
          let cell4 = row.insertCell(-1);
          cell4.innerHTML = city.shortForecast;
          break;
      }
    }
  }
}
