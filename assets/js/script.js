// RANDOM COLOR GENERATOR
let rgbHeader = document.querySelector("p.large-fs");

function createRandomColor() {
    let arr = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    rgbHeader.textContent = `RGB(${arr[0]},${arr[1]},${arr[2]})`;
    return arr;
}
createRandomColor();
console.log(createRandomColor());
// CREATE BOX (with color array)
let mainContent = document.querySelector(".main-content");

function createColorBox(array) {
    let firstBox = document.createElement("div");
    firstBox.classList.add("div-style");
    firstBox.style.backgroundColor = `rgb(${array[0]},${array[1]},${array[2]})`;
    let secondBox = document.createElement("div");
    secondBox.classList.add("div-style");
    secondBox.style.backgroundColor = `rgb(${array[0]},${array[1]},${array[2]})`;
    let thirdBox = document.createElement("div");
    thirdBox.classList.add("div-style");
    thirdBox.style.backgroundColor = `rgb(${array[0]},${array[1]},${array[2]})`;

    mainContent.append(firstBox, secondBox, thirdBox);
}
createColorBox(createRandomColor());