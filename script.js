"use strict";

window.addEventListener("DOMContentLoaded", getData);

let selectedColor;

// Features that can be modified "physically" (not just change color)
const features = {
  fabric: false,
  lapel: false,
  tie: true,
  bowtie: false,
  pocketsquare: true,
  pocketflaps: false,
  buttons: false,
};

async function getData() {
  console.log("getData");
  let response = await fetch("images/suit-01.svg");
  let svgData = await response.text();
  document.querySelector("#product-preview").innerHTML = svgData;
  document.getElementById("suit_lapel").style.display = "none";
  document.getElementById("suit_bowtie").style.display = "none";
  init();
}

function init() {
  // Register clicks
  document.querySelectorAll(".attribute").forEach((attribute) => attribute.addEventListener("click", displayFlyout));

  const radioButtons = document.querySelectorAll(`input[type="radio"]`);
  radioButtons.forEach((radiobtn) => radiobtn.addEventListener("change", clickedButton));

  document.querySelectorAll(".color").forEach((element) => {
    element.addEventListener("click", (event) => {
      selectedColor = event.target.style.backgroundColor;
    });
  });
}

function displayFlyout(event) {
  let target = event.currentTarget;
  let feature = target.dataset.feature;
  console.log("displayFlyout", target.dataset.feature);
  let currentFlyout = document.querySelector(`#flyout-menu [data-feature=${feature}]`);
  let oldFlyout = document.querySelector("#flyout-menu .flyout-panel-display");

  currentFlyout.classList.add("flyout-panel-display");
  oldFlyout.classList.remove("flyout-panel-display");
  displayDashes();

  function displayDashes() {
    console.log("displayDashes");
    let currentFeature = document.querySelector(`#product-preview [data-feature=${feature}]`);
    let oldFeature = document.querySelector("#product-preview .feature-chosen");

    currentFeature.classList.add("feature-chosen");
    oldFeature.classList.remove("feature-chosen");
  }
}

function clickedButton(event) {
  console.log("clickedButton");
  const selectedRadio = event.currentTarget;

  toggleFeature(selectedRadio.name, selectedRadio.value);
}

function toggleFeature(name, value) {
  console.log("toggleFeature", name, value);
  switch (name) {
    case "radio-lapel":
      toggleLapel(value);

      break;
    case "radio-tie":
      toggleTie(value);
      setColor(value);
      break;
    case "radio-bowtie":
      toggleBowtie(value);
      setColor();
      break;
    case "radio-pocketsquare":
      togglePocketsquare(value);
      setColor();
      break;
    case "radio-pockets":
      togglePockets(value);
      setColor();
      break;
    case "radio-buttons":
      toggleButtons(value);
      setColor();
      break;
  }
}

function toggleLapel(value) {
  let x = document.getElementById("suit_lapel");
  if (value === "lapel-wide") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleTie(value) {
  let x = document.getElementById("suit_tie");
  if (value === "tie-true") {
    x.style.display = "block";
    document.querySelector(`input[id="bowtie-false"]`).checked = true;
    document.getElementById("suit_bowtie").style.display = "none";
    setColor(value);
  } else {
    x.style.display = "none";
  }
}

function toggleBowtie(value) {
  let x = document.getElementById("suit_bowtie");
  if (value === "bowtie-true") {
    x.style.display = "block";
    document.querySelector(`input[id="tie-false"]`).checked = true;
    document.getElementById("suit_tie").style.display = "none";
    setColor(value);
  } else {
    x.style.display = "none";
  }
}

function togglePocketsquare(value) {
  let x = document.getElementById("suit_pocketsquare");
  if (value === "pocketsquare-true") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function togglePockets(value) {
  let x = document.getElementById("suit_pockets");
  if (value === "pockets-true") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleButtons(value) {
  let x = document.getElementById("suit_buttons");
  if (value === "buttons-true") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function setColor(element, selectedColor) {
  console.log(element, selectedColor);
  element.style.fill = selectedColor;
  element.style.stroke = selectedColor;
}
