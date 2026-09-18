const prompt = require('prompt-sync')();

const r = Number(prompt("Entrer votre rayon de la sphèr : "));
console.log("hello");

const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

console.log(`Voila votre volume du sphère : ${volume.toFixed(2)}`);
