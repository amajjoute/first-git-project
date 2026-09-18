const prompt = require("prompt-sync")();

const long = Number(prompt("Entrer votre longueur : "));
const larg = Number(prompt("Entrer votre largeur : "));

const surf = long * larg;

console.log(`Voici la surface de votre triangle : ${surf.toFixed(2)}`);
