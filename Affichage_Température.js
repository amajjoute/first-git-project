const prompt = require("prompt-sync")();

const c = prompt("Entrer votre température en Celsius : ");
if (c < 0) {
    console.log("La température est Solide.");
} else if (0 <= c < 100) {
    console.log("La température est Liquide.");
} else if (c >= 100) {
    console.log("La température est Gazeuse.");
}