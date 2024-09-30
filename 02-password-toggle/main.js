"use strict";

const btn = document.querySelector("button");
const inpt = document.querySelector(".input");
let swtch = true;
const visiblePwd = function (e) {
  if (swtch === true) {
    btn.innerHTML = "hide Password";
    inpt.type = "text";
    swtch = !swtch;
  } else {
    btn.innerHTML = "show Password";
    inpt.type = "password";
    swtch = !swtch;
  }
};

btn.addEventListener("click", visiblePwd);
