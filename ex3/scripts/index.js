"use strict";

window.onload = function () {
  let btn = document.getElementById("nextBtn");
  btn.onclick = btnOnClick;
};

function btnOnClick() {
  // {
  //   "id": 273,
  //   "type": "general",
  //   "setup": "What musical instrument is found in the bathroom?",
  //   "punchline": "A tuba toothpaste."
  // },

  let jokes = document.getElementById("displayJokes");
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        jokes.innerHTML =
          "<span style='color: Red ; '> Setup : </span>" +
          data[i].setup +
          "<br/>" +
          "<span style='color: Red ; '> Punchline : </span>" +
          data[i].punchline;
      }
    });
}
