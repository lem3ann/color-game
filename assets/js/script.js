// RANDOM COLOR GENERATOR
let rgbHeader = document.querySelector("p.large-fs");

function createRandomColor() {
    let arr = [
        Math.floor(Math.random() * 255) + 1,
        Math.floor(Math.random() * 255) + 1,
        Math.floor(Math.random() * 255) + 1,
    ];

    return arr;
}
let trueColor = createRandomColor();
rgbHeader.textContent = `rgb(${trueColor[0]}, ${trueColor[1]}, ${trueColor[2]})`;

// CREATE BOX (with color array)
let mainContent = document.querySelector(".main-content");
let mainContent2 = document.querySelector(".main-content-2");

function createRandomArr() {
    let mixArrNew = [trueColor];
    for (let index = 0; index < 5; index++) {
        mixArrNew.unshift(createRandomColor());
    }
    return shuffle(mixArrNew);
};


function createRandomArrFor3Box() {
    let mixArr = [trueColor];
    for (let index = 0; index < 2; index++) {
        mixArr.unshift(createRandomColor());
    }
    return $shuffle(mixArr);
};

console.log(createRandomArr());
console.log(createRandomArrFor3Box());

// shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function $shuffle(array) {
    for (let i = 2; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// 2 defe shuffle function yaz birinci ilk 3-e qeder shuffle etsin,ikincisi 6 denesi arasinda 
// create 3 colors with function
function createColorBox(array) {
    mainContent.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        let box = document.createElement("div");
        box.classList.add("div-style");
        box.style.backgroundColor = `rgb(${array[i]})`;
        mainContent.appendChild(box);
    }
}

// ! create 6 colors with function
function createSixColor(array) {
    mainContent2.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        let box = document.createElement("div");
        box.classList.add("div-style");
        box.style.backgroundColor = `rgb(${array[i]})`;
        mainContent2.appendChild(box);
    }
}

createColorBox(createRandomArrFor3Box());
createSixColor(createRandomArr());
// iki function eyni anda cagirilanda shuffle sehv isleyir ,izolyasiyali arrayi duzeldersen

// NAVTABS ---easy ---hard
let hardBtn = document.getElementsByClassName("hard")[0];
let allTab = document.querySelectorAll(".toggle div");
console.log(allTab);
let allContent = document.querySelectorAll(".cards");

for (let index = 0; index < allTab.length; index++) {
    allTab[index].addEventListener("click", function () {
        headerBg.style.backgroundColor = "steelblue";
        comment.textContent = "";
        for (let j = 0; j < allTab.length; j++) {
            allContent[j].style.display = "none";
            allTab[j].classList.remove("active-class");
        }
        allContent[index].style.display = "flex";
        allTab[index].classList.add("active-class");
        if (allTab[0].classList.contains("active-class")) {
            changeHeaderAndBoxColor(3);
        } else {
            changeHeaderAndBoxColor(6);
        }
    });

};

// new colors button functionality
let newColorBtn = document.getElementsByClassName("active-btn")[0];
let comment = document.getElementsByClassName("comment")[0];
let headerBg = document.getElementsByClassName("header")[0];

// check  functionality
setClickEffect();

function setClickEffect() {
    let allColorCards = document.querySelectorAll(".cards div");
    allColorCards.forEach((element) => {
        element.addEventListener("click", function () {
            console.log("test");
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
}
// New color button functionality
function changeHeaderAndBoxColor(numb) {
    trueColor = createRandomColor();
    rgbHeader.textContent = `rgb(${trueColor[0]}, ${trueColor[1]}, ${trueColor[2]})`;
    if (numb === 3) {
        createColorBox(createRandomArrFor3Box());
        setClickEffect();
    } else {
        createSixColor(createRandomArr());
        setClickEffect();
    }
}
// function for  reset
newColorBtn.addEventListener("click", function () {
    if (newColorBtn.textContent === "PLAY AGAIN?") {
        newColorBtn.textContent = "NEW COLORS";
        comment.textContent = "";
    }
    let active = document.querySelector(".toggle .active-class");
    headerBg.style.backgroundColor = "steelblue";
    if (active === allTab[0]) {
        changeHeaderAndBoxColor(3);
        setClickEffect();
    } else {
        changeHeaderAndBoxColor(6);
        setClickEffect();
    }
});
// set load effect
let loadImg = document.getElementsByClassName("loading-img")[0];
setTimeout(() => {
    loadImg.style.display = "none";
}, 4000);