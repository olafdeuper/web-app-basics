"use strict";

let flag = false;
const btn = document.querySelector("button");
const sky = document.querySelector("body");
const title = document.querySelector("title");

const toggleLight = function (e) {
  flag = !flag;
  sky.classList.toggle("nightSky");
  btn.classList.toggle("nightButton");
  if (flag === true) {
    title.innerHTML = "Good night!";
  } else {
    title.innerHTML = "Good Morning!";
  }
};

btn.addEventListener("click", toggleLight);
