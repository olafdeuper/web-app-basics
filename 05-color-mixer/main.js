"use strict";
let greenValue;
let bhex;
let ghex;
let rhex;

const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const cword = document.querySelector("header>p");
const header = document.querySelector("header");
const backgr = document.querySelector("main");

const colorMix = function (e) {
  let rhex = red.value;
  let ghex = green.value.toString(16);
  let bhex = blue.value.toString(16);
  let strg = "rgb(" + red.value + ", " + green.value + ", " + blue.value + ")";
  let opstrg =
    "rgba(" + red.value + ", " + green.value + ", " + blue.value + ", 0.5)";
  console.log(strg);
  cword.innerHTML = strg;
  backgr.style.background = strg;
  header.style.background = opstrg;
};

red.addEventListener("click", colorMix);
green.addEventListener("click", colorMix);
blue.addEventListener("click", colorMix);
