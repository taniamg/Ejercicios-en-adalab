let avocados;
const avocadoPrice = 1.5;
const money = 1;

/*if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}*/
avocados = money >= avocadoPrice ? money / avocadoPrice : 0;
console.log(`vas a comprar : ${avocados} aguacates`);
