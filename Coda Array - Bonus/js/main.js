/* la coda dell’array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, 
anche se non conosciamo a priori quanti elementi contiene. 

Extra Bonus
Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti numeri interi casuali 
quanti sono gli elementi da inserire.
Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array. */

// Prendo il bottone di invio
const submitButton = document.getElementById("submitButton");

// Aggiungo un Event Listener sul bottone
submitButton.addEventListener("click", function() {
    // Prendo i numeri specificato dall'utente
    const arrayLength = parseInt(document.getElementById("arrayLength").value);
    const displayNumber = parseInt(document.getElementById("displayNumber").value);

    // Prendo uno span dove specificare i numeri e ne resetto il contenuto
    const arrayEnd = document.getElementById("arrayEnd");
    arrayEnd.innerHTML = "";

    // Controllo che sia stata specificata una lunghezza coerente al numero di elementi da mostrare
    if (displayNumber <= 0) {
        arrayEnd.innerHTML = "Inserisci un numero maggiore di 0!";
    } else if (arrayLength < displayNumber) {
        arrayEnd.innerHTML = "I numeri casuali non sono abbastanza per essere mostrati!";
    } else {
        // Creo l'array
        const randomNumbers = [];

        // Genero i numeri casuali e li inserisco nell'array
        for(let i = 0; i < arrayLength; i++) {
            randomNumbers[i] = Math.floor(Math.random() * 100);
        }  
        console.log(randomNumbers);

        for (let i = randomNumbers.length - displayNumber; i < randomNumbers.length; i++) {
            arrayEnd.innerHTML += `${randomNumbers[i]} `;
        }
    }
});