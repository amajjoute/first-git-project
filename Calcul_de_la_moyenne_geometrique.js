const prompt = require("prompt-sync")();

const num1 = Number(prompt("Saisir le nombre 1 : "));
const num2 = Number(prompt("Saisir le nombre 2 : "));
const num3 = Number(prompt("Saisir le nombre 3 : "));

const moyenneGeo = Math.pow((num1 * num2 * num3), (1.00 / 3.00));

console.log(`Votre moyenne géométrique est : ${moyenneGeo.toFixed(2)}`);
