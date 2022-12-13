"use strict";

window.onload = function () {
  let btn = document.getElementById("btn");
  btn.onclick = btnOnClick;
};

function btnOnClick() {
  let input = document.getElementById("input").value;
  let display = document.getElementById("display");

  fetch("http://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: input,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      display.innerHTML = "display here " + data.id;
    });
}
