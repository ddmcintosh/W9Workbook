"use strict";

window.onload = init;

function init() {
  retreiveMemes();
}

function retreiveMemes() {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((memesdata) => {
      let memes = memesdata.data.memes;
      processAllMemes(memes);
    });
}

function processAllMemes(memes) {
  const columnsPerRow = 4;
  const numberOfRows = 2;

  let nextMemeIndex = 0;

  const imglist = document.getElementById("imglist");

  for (
    let currentRowIndex = 0;
    currentRowIndex < numberOfRows;
    currentRowIndex++
  ) {
    let currentRow = document.createElement("div");
    currentRow.className = "row";

    imglist.appendChild(currentRow);
    let memesForRow = getArrayForSingleRow(memes, nextMemeIndex, columnsPerRow);

    for (let meme of memesForRow) {
      createMemeCard(meme, currentRow);
    }

    nextMemeIndex += columnsPerRow;
  }

  function createMemeCard(memedata, parentRow) {
    //createMemeCard will take in memedata

    // {
    //     "id": "124822590",
    //     "name": "Left Exit 12 Off Ramp",
    //     "url": "https://i.imgflip.com/22bdq6.jpg",
    //     "width": 804,
    //     "height": 767,
    //     "box_count": 3,
    //     "captions": 0
    // }

    // <div class="col">
    //     <div class="card memecard">
    //         <img src="https://i.imgflip.com/22bdq6.jpg" class="card-img-top" alt="Left Exit 12 Off Ramp">
    //         <div class="card-body">
    //         <p class="card-text">Left Exit 12 Off Ramp</p>
    //         </div>
    //     </div>
    // </div>

    let coldiv = document.createElement("div");
    coldiv.className = "col";
    let carddiv = document.createElement("div");
    carddiv.className = "card memecard";
    coldiv.appendChild(carddiv);
    let memeimg = document.createElement("img");
    memeimg.src = memedata.url;
    memeimg.className = "card-img-top";
    memeimg.alt = memedata.name;
    carddiv.appendChild(memeimg);
    let bodydiv = document.createElement("div");
    bodydiv.className = "card-body";
    carddiv.appendChild(bodydiv);
    let bodyp = document.createElement("p");
    bodyp.innerText = memedata.name;
    bodydiv.appendChild(bodyp);

    parentRow.appendChild(coldiv);
  }

  function getArrayForSingleRow(
    arrayWithAllMemes,
    nextMemeIndex,
    columnsPerRow
  ) {
    let result = arrayWithAllMemes.slice(
      nextMemeIndex,
      nextMemeIndex + columnsPerRow
    );
    return result;
  }
}
