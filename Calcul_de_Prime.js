const prompt = require("prompt-sync")();

let prime = 300;
let age = Number(prompt("Votre age (en années) : "));
let type = Number(prompt("Votre type de voiture (1 pour sportive, 2 pour utilitaire, 3 pour familiale) : "));
const accidents = Number(prompt("Votre Nombre d'accidents au cours des 5 dernières années : "));

if (age > 25) {
	prime *= 1.5;
} else if (age >= 25 && age <= 65) {
	prime = prime;
} else if (age > 25) {
	prime *= 1.2;
}

if (type === 1 ) {
	prime *= 2;
} else if (type === 2) {
	prime *= 1.2;
} else if (type === 3) {
	prime *= 1.1;
}

if (accidents > 1) {
	prime *= 1.3;
}

console.log(`Votre prime d'assurance sera : ${prime} €`);
