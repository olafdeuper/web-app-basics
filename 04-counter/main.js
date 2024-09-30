"use strict";

const counter = document.querySelector("#counter");
const reset = document.querySelector("button");
const balken = document.querySelector(".balken");
const whiteArea = document.querySelector("main");
let anz = 0;

const countUp = function (e) {
  console.log(e.key);
  if (e.key === undefined || e.key === " " || e.key === "Enter") {
    anz++;
    if (anz === 101) anz = 0;
    console.log(anz);
    counter.innerHTML = anz;

    balken.style.width = anz + "%";
  }
};

const doReset = function (e) {
  anz = 0;
  counter.innerHTML = anz;
  balken.style.width = anz + "%";
};

whiteArea.addEventListener("click", countUp);
document.addEventListener("keydown", countUp);
reset.addEventListener("click", doReset);
