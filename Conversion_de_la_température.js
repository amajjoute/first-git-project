const prompt = require("prompt-sync")();

const c = prompt("Entrer votre température en Celsius : ");
const k = c + 273.15;
console.log(`La température en Kelvin est : ${Number(k).toFixed(2)} `);