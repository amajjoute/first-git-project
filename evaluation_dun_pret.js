const prompt = require("prompt-sync")();

const revenu = Number(prompt("Entrer votre Revenue: "));
const credit = Number(prompt("Entrer votre Score de Crédit : "));
const duree = Number(prompt("Entrer votre Durée du prêt : "));

if (revenu >= 30000 && credit >= 700 && duree <= 10) {
	console.log("Éligible");
} else if (revenu >= 30000 && credit >= 650 && duree <= 15) {
	console.log("Éligible avec conditions");
} else if (revenu >= 30000 || credit >= 650 || duree <= 15) {
	console.log("Non éligible");
}
