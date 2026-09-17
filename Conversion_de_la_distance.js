const prompt = require("prompt-sync")();

const km = prompt("Entrez la distance en kilomètres : ");
const yards = km * 1093.61;
console.log(`La distance en yards est : ${Number(yards).toFixed(2)}`);