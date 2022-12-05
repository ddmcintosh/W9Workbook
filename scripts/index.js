"use strict";

window.onload = init;

function init() {
  const toDoBtn = document.getElementById("toDoBtn");
  toDoBtn.onclick = toDoBtnClicked;
}

function toDoBtnClicked() {
  const messageDiv = document.getElementById("messageDiv");
  const toDoId = document.getElementById("toDoId");
  fetch("https://jsonplaceholder.typicode.com/todos/" + toDoId.value)
    .then((result) => result.json())
    .then((data) => {
      messageDiv.innerHTML = data.title;
    });
}
