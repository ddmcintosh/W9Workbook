"use strict";

let cities = [
    { 
    name: "Chicago, Illinois",
    coords: {
    latitude: 41.8781 N,
    longitude: 87.6298 W,
    },
},

{ 
    name: "Dallas, Texas",
    coords: {
    latitude: 32.7767 N,
    longitude: 96.7970 W,
    },
},

{
    name: "Los Angeles, California",
    coords: {
    latitude: 34.0522 N,
    longitude: 118.2437 W,
    }, 
},

{
    name: "Miami, Florida",
    coords: {
    latitude: 25.7617 N,
    longitude: 80.1918 W,
    }, 
},

{
    name: "New York, New York",
    coords: {
    latitude: 40.7128 N,
    longitude: 74.0060 W,
    }, 
},

 ];

window.onload = init; 

function init() {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = SearchBtnOnClick;

    const searchTypeDropdown = document.getElementById("searchTypeDropdown");
    searchTypeDropdown.onclick = SearchTypeDropDownOnClick;
}

SearchBtnOnClick () {
    const searchBtn = document.getElementById("searchBtn");


}

SearchTypeDropDownOnClick() {
    const searchTypeDropdown = document.getElementById("searchTypeDropdown");
}