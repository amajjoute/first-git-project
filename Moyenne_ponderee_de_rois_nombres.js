const prompt = require("prompt-sync")();

const nb1 = Number(prompt("Saisir Le Nombre 1 : "));
const nb2 = Number(prompt("Saisir Le Nombre 2 : "));
const nb3 = Number(prompt("Saisir Le Nombre 3 : "));

const pond1 = 2;
const pond2 = 3;
const pond3 = 5;

const moyennePond = (pond1 * nb1 + pond2 * nb2 + pond3 * nb3) / pond1 + pond2 + pond3;

console.log(`Moyenne Ponderee est : ${moyennePond.toFixed(2)}`);
