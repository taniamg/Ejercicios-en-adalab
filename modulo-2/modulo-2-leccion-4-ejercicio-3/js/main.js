"user strict";

function vat(price) {
  return price * 0.21;
}
const amount = vat(10);
const vatResult = amount;
const finalPrice = vat + vatResult;
console.log(
  `El precio sin IVa es ${amount}, el IVA ${vatResult}y el total ${finalPrice}`
);
