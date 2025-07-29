let buttonP = document.querySelector("#p-button");
let buttonImg = document.querySelector("#img-button");
let buttonNull = document.querySelector("#null-button");


let p = document.querySelector("#p-div");
let img = document.querySelector("#img-div");
let nothing = document.querySelector("#null-div")
nothing.style.display = "none"

let pCount = document.getElementById("pCount");
let imgCount = document.getElementById("imgCount");
let nothingCount = document.getElementById("nullCount")



let pNum = 0;
let imgNum = 0;
let nullNum = 0;

buttonP.onclick = function () {
  let newText = document.createElement("p");
  newText.innerHTML = "Hot Chocolate is bad today";

  newText.style.backgroundColor = "black";
  newText.style.color = "white";
  newText.style.padding = "10px";

  img.style.display = "none";
  p.style.display = "block";
  nothing.style.display = "none"

  pNum++;
  pCount.innerHTML = `P Count: ${pNum}`;
  p.appendChild(newText);
};

buttonImg.onclick = function () {
  let newImg = document.createElement("img");
  newImg.src = "images/charmander.png";

  imgNum++;
  imgCount.innerHTML = `Img Count: ${imgNum}`;

  img.style.display = "block";
  p.style.display = "none";
  nothing.style.display = "none"
  
  img.appendChild(newImg);
};


buttonNull.onclick = function () {

  nullNum++;
  nullCount.innerHTML = `Nothing Count: ${nullNum}`;

  img.style.display = "none";
  p.style.display = "none";
  nothing.style.display = "block"
  img.appendChild(newImg);
};