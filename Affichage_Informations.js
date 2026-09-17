const prompt = require("prompt-sync")();

const nom = prompt("Entrez votre nom : ");
const prénom = prompt("Entrez votre prénom : ");
const âge = prompt("Entrez votre âge : ");
const sexe = prompt("Entrez votre sexe : ");
const adresseEmail = prompt("Entrez votre adresse email : ");

console.log(`Bonjour ${prénom} ${nom}! Vous avez ${âge} ans et votre sexe est ${sexe}. Votre adresse email est ${adresseEmail}.`);