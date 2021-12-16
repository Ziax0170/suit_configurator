"use strict";

let colorPicker = new iro.ColorPicker("#usersPick", {
  // Set the size of the color picker
  width: 320,
  // Set the initial color to pure red
  color: "#f00",
});

// Variabler på farverne
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
const color5 = document.querySelector("#color5");
const color6 = document.querySelector("#color6");
const color7 = document.querySelector("#color7");
const color8 = document.querySelector("#color8");

// Variabler på elementerne
let leftEye;
let rightEye;
let valgtTing;
let leftButton = document.querySelector("#leftButton");
let rightButton = document.querySelector("#rightButton");
let selectedButton;

let selectedColor;

document.addEventListener("DOMContentLoaded", start);

async function start() {
  console.log("start");
    let response = await fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg");
    let mySvg = await response.text();
  document.querySelector("section").innerHTML = mySvg;

  // Variabler på elementerne
  leftEye = document.querySelector("#path352");
  rightEye = document.querySelector("#path304");
  console.log(colorPicker.color.rgb);

  const knapper = document.querySelectorAll(".buttons");
	knapper.forEach(knap => knap.addEventListener("click", valgtKnap));

  addColorsToDiv();
  buttonCase();
}

function addColorsToDiv() {
  console.log("addColorsToDiv");
    color1.style.backgroundColor = "#ff89a2";
    color2.style.backgroundColor = "#C9CEFF";
    color3.style.backgroundColor = "#5A83CC";
    color4.style.backgroundColor = "#525a3d";
    color5.style.backgroundColor = "#AACC5A";
    color6.style.backgroundColor = "#FFEB5C";
    color7.style.backgroundColor = "#DF74FF";
    color8.style.backgroundColor = "#35CC5B";
  }

function valgtKnap(){
    console.log ("begyndKnapper");

    selectedButton = this.id;
    console.log(selectedButton);
    buttonCase();
  }

function buttonCase() {
    console.log("init");
switch (selectedButton){
  case 'leftButton':
    setColor(leftEye, selectedColor);
    leftEye.classList.add("valgt");
    rightEye.classList.remove("valgt");
    console.log("leftEye");
    break;
  case 'rightButton':
    setColor(rightEye, selectedColor);
    rightEye.classList.add("valgt");
    leftEye.classList.remove("valgt");
    console.log("rightEye");
  break;
};
        
document.querySelectorAll(".color").forEach((element) => {
  element.addEventListener("click", (event) => {
      selectedColor = event.target.style.backgroundColor;
  });
});

}

    function setColor(element, selectedColor) {
        element.style.fill = selectedColor;
        element.style.stroke = selectedColor;
      }

/* // -------------------------------- BACKUP ----------------------------------
let colorPicker = new iro.ColorPicker("#usersPick", {
  // Set the size of the color picker
  width: 320,
  // Set the initial color to pure red
  color: "#f00",
});

// Variabler på farverne
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
const color5 = document.querySelector("#color5");
const color6 = document.querySelector("#color6");
const color7 = document.querySelector("#color7");
const color8 = document.querySelector("#color8");

// Variabler på elementerne
let leftEye;
let rightEye;
let leftButton = document.querySelector("#leftButton");
let rightButton = document.querySelector("#rightButton");

let selectedColor;

document.addEventListener("DOMContentLoaded", start);

async function start() {
    let response = await fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg");
    let mySvg = await response.text();
  document.querySelector("section").innerHTML = mySvg;

  // Variabler på elementerne
  leftEye = document.querySelector("#path352");
  rightEye = document.querySelector("#path304");
  console.log(colorPicker.color.rgb);

  addColorsToDiv();
  init();
}

function addColorsToDiv() {
    color1.style.backgroundColor = "#ff89a2";
    color2.style.backgroundColor = "#C9CEFF";
    color3.style.backgroundColor = "#5A83CC";
    color4.style.backgroundColor = "#525a3d";
    color5.style.backgroundColor = "#AACC5A";
    color6.style.backgroundColor = "#FFEB5C";
    color7.style.backgroundColor = "#DF74FF";
    color8.style.backgroundColor = "#35CC5B";
  }

  function init() {
      leftButton.addEventListener("click",() =>{
          setColor(leftEye, selectedColor);
      });
      rightButton.addEventListener("click",() =>{
        setColor(rightEye, selectedColor);
    });
    document.querySelectorAll(".color").forEach((element) => {
        element.addEventListener("click", (event) => {
            selectedColor = event.target.style.backgroundColor;
        });
      });
    }

    function setColor(element, selectedColor) {
        element.style.fill = selectedColor;
        element.style.stroke = selectedColor;
      }

// ----------------------- BACKUP SLUT ------------------------ */