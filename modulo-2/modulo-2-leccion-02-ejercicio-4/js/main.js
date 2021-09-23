"user strict";
const bill = 128 - 2;
const totalBill = bill / 9;
const annaBill = totalBill + 2;
const js_singleBill = document.querySelector(".js_singleBill");
js_singleBill.innerHTML = js_singleBill.innerHTML + totalBill + "€";
const js_anaBill = document.querySelector(".js_anaBill");
js_anaBill.innerHTML = js_anaBill.innerHTML + annaBill + "€";
