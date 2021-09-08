let year = 2021;
let resto = (year % 4).toString();
switch (resto) {
  case "1":
    console.log(`El próximo año bisiesto será, ${year + 3}`);
    break;
  case "2":
    console.log(`El próximo año bisiesto será, ${year + 2}`);
    break;
  case "3":
    console.log(`El próximo año bisiesto será, ${year + 1}`);
    break;
  default:
    console.log(`Este año, ${year}, ya es bisiesto`);
}
