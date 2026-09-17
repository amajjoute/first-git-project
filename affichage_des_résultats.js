const prompt = require("prompt-sync")();

const a = Number(prompt("Entrer votre premier nombre : "));
const b = Number(prompt("Entrer votre dexieme nombre : "));

console.log(parseInt(a + b));
console.log(parseInt(a - b));
console.log(parseInt(a * b));
console.log(parseInt(a / b));
