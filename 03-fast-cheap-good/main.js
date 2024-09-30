"use strict";

const chfast = document.querySelector("#fast");
const chcheap = document.querySelector("#cheap");
const chgood = document.querySelector("#good");
let last;
const chckControl = function (e) {
  if (chfast.checked && chcheap.checked && chgood.checked) {
    last.checked = false;
  }
  last = e.target;
};

chfast.addEventListener("click", chckControl);
chcheap.addEventListener("click", chckControl);
chgood.addEventListener("click", chckControl);
