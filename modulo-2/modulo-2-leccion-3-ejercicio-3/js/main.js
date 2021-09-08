"user strict";

const numberTocompare = 40;

if (numberTocompare === 0) {
  console.log("El número es 0");
} else if (numberTocompare < 0) {
  console.log("El número es negativo");
} else if (numberTocompare + 2 > 13 && numberTocompare + 2 <= 20) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (numberTocompare > 20 && numberTocompare < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}
