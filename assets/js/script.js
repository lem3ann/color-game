// RANDOM COLOR GENERATOR
let rgbHeader = document.querySelector("p.large-fs");

function createRandomColor() {
  let arr = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
  rgbHeader.textContent = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
  return arr;
}
createRandomColor();
// CREATE BOX (with color array)
let mainContent = document.querySelector(".main-content");
let mixArr = [
  [createRandomColor()],
  [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ],
  [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ],
];
// shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// create 3 colors with function
function createColorBox(array) {
  let firstBox = document.createElement("div");
  firstBox.classList.add("div-style");
  firstBox.style.backgroundColor = `rgb(${array[0]})`;
  let secondBox = document.createElement("div");
  secondBox.classList.add("div-style");
  secondBox.style.backgroundColor = `rgb(${array[1]})`;
  let thirdBox = document.createElement("div");
  thirdBox.classList.add("div-style");
  thirdBox.style.backgroundColor = `rgb(${array[2]})`;

  mainContent.append(firstBox, secondBox, thirdBox);
}
// const sixColorArr = [];

// create 6 color with function
// function createSixColor() {}

createColorBox(shuffle(mixArr));

// NAVTABS ---easy ---hard
let hardBtn = document.getElementsByClassName("hard")[0];
let allTab = document.querySelectorAll(".toggle div");

allTab.forEach((element) => {
  element.addEventListener("click", function () {
    allTab.forEach((item) => {
      item.classList.remove("active-class");
    });
    element.classList.add("active-class");
  });
});
// new colors button functionality
let newColorBtn = document.getElementsByClassName("active-btn")[0];
let comment = document.getElementsByClassName("comment")[0];
let headerBg = document.getElementsByClassName("header")[0];

// check  functionality

let allColorCards = document.querySelectorAll(".main-content div");
allColorCards.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.style.backgroundColor === rgbHeader.textContent) {
      comment.textContent = "Correct";
      headerBg.style.backgroundColor = `${element.style.backgroundColor}`;
      newColorBtn.textContent = "PLAY AGAIN?";
      for (const item of allColorCards) {
        item.style.backgroundColor = `${element.style.backgroundColor}`;
        item.style.opacity = 1;
      }
    } else {
      comment.textContent = "Try Again";
      element.style.opacity = 0;
    }
  });
});
function createSixColorBox() {
  let firstBox = document.createElement("div");
  firstBox.classList.add("div-style");
  firstBox.style.backgroundColor = `rgb(${array[0]})`;
  let secondBox = document.createElement("div");
  secondBox.classList.add("div-style");
  secondBox.style.backgroundColor = `rgb(${array[1]})`;
  let thirdBox = document.createElement("div");
  thirdBox.classList.add("div-style");
  thirdBox.style.backgroundColor = `rgb(${array[2]})`;

  mainContent.append(firstBox, secondBox, thirdBox);
}
