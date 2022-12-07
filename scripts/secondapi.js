"use strict";

window.onload = init;

function init() {
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.onclick = searchBtnClicked;
}

// As of right now this funciton calls fetches and prints data from the api corresponding to the first character who has a name that begins with the string that that user inputs. Will probably be changed to fetch data for all characters who have names that begin with the string that that user inputs and add them to a dropdown list.
function searchBtnClicked() {
  const searchBar = document.getElementById("searchBar");
  const site =
    "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
    searchBar.value +
    "&apikey=e8ea0938ddd75570d0eb6b3ec3632fe9&ts=woahwoahwoah&hash=67207ba7d7a06807a9984b4a112d7e18";
  fetch(site)
    .then((info) => info.json())
    .then((character) => {
      createMessage(character);
    }); // calls function to create message (might end up being called later in order to as a part of an onchange function for the select instead)
}

// this function creates message to show the user about their selected character
function createMessage(character) {
  const messageDiv = document.getElementById("messageDiv");
  messageDiv.innerHTML = "<p>name: " + character.data.results[0].name + "</p>"; // prints name of character
  if (character.data.results[0].description != "") {
    messageDiv.innerHTML +=
      "<p>description: " + character.data.results[0].description + "</p>"; //prints character description
  }
}

// this function should fill the select with all character names that start with the string in the user put in
function fillSelect(input) {}

// "code": 200,
// "status": "Ok",
// "copyright": "© 2022 MARVEL",
// "attributionText": "Data provided by Marvel. © 2022 MARVEL",
// "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2022 MARVEL</a>",
// "etag": "77484658f17b986d65eb97a3ac9464a87bb62f9c",
// "data": {
//     "offset": 0,
//     "limit": 20,
//     "total": 6,
//     "count": 6,
//     "results": [
//         {
//             "id": 1010729,
//             "name": "Wolver-dok",
//             "description": "",
//             "modified": "1969-12-31T19:00:00-0500",
//             "thumbnail": {
//                 "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
//                 "extension": "jpg"
//             },
//             "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010729",
//             "comics": {
//                 "available": 0,
//                 "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010729/comics",
//                 "items": [],
//                 "returned": 0
//             },
//             "series": {
//                 "available": 0,
//                 "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010729/series",
//                 "items": [],
//                 "returned": 0
//             },
//             "stories": {
//                 "available": 0,
//                 "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010729/stories",
//                 "items": [],
//                 "returned": 0
//             },
//             "events": {
//                 "available": 0,
//                 "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010729/events",
//                 "items": [],
//                 "returned": 0
//             },
//             "urls": [
//                 {
//                     "type": "detail",
//                     "url": "http://marvel.com/characters/2593/wolver-dok?utm_campaign=apiRef&utm_source=e8ea0938ddd75570d0eb6b3ec3632fe9"
//                 },
//                 {
//                     "type": "comiclink",
//                     "url": "http://marvel.com/comics/characters/1010729/wolver-dok?utm_campaign=apiRef&utm_source=e8ea0938ddd75570d0eb6b3ec3632fe9"
//                 }
//             ]
//         }
