"use strict";

let cities = [
  {
    name: "Chicago, Illinois",
    coords: {
      latitude: 41.8781,
      longitude: 87.6298,
    },
  },

  {
    name: "Dallas, Texas",
    coords: {
      latitude: 32.7767,
      longitude: 96.797,
    },
  },

  {
    name: "Los Angeles, California",
    coords: {
      latitude: 34.0522,
      longitude: 118.2437,
    },
  },

  {
    name: "Miami, Florida",
    coords: {
      latitude: 25.7617,
      longitude: 80.1918,
    },
  },

  {
    name: "New York, New York",
    coords: {
      latitude: 40.7128,
      longitude: 74.006,
    },
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
  const divResults = document.getElementById("divResults");

  const searchTypeDropdown = document.getElementById("searchTypeDropdown");
}

function SearchTypeDropDownOnClick() {
  const searchTypeDropdown = document.getElementById("searchTypeDropdown");
}
