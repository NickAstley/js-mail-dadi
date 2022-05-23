/* Gioco dei dadi
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve? */

// Prendo un bottone che lancia i dadi
const rollButton = document.getElementById("rollButton");

// Aggiungo un EventListener al bottone che lancia i dadi alla pressione
rollButton.addEventListener("click", function() {
    // Creo due array vuoti dove inserirò i risultati
    const userResults = [];
    const cpuResults = [];

    // Creo due variabili che contano i totali dei lanci
    let userScore = 0;
    let cpuScore = 0;

    // Genero casualmente i risultati e calcolo i totali
    for (let i = 0; i < 10; i++) {
        userResults[i] = Math.floor(Math.random() * 6 + 1);
        userScore += userResults[i];
        cpuResults[i] = Math.floor(Math.random() * 6 + 1);
        cpuScore += cpuResults[i];
    }
    
    // Prendo degli span dove inserire i risultati dell'utente, quelli della cpu e se l'utente ha vinto
    const divUserResults = document.getElementById("userResults");
    const divCpuResults = document.getElementById("cpuResults");
    const divGameResult = document.getElementById("gameResult");

    divUserResults.innerHTML = `I tuoi lanci: ${userResults}. Totale: ${userScore}`;
    divCpuResults.innerHTML = `I lanci del computer: ${cpuResults}. Totale: ${cpuScore}`;

    if (userScore > cpuScore) {
        divGameResult.innerHTML = "Hai vinto!";
    } else if (userScore === cpuScore) {
        divGameResult.innerHTML = "Pareggio!";
    } else {
        divGameResult.innerHTML = "Hai perso!";
    }
});