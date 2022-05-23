/* la coda dell’array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, 
anche se non conosciamo a priori quanti elementi contiene. */

// Prendo il bottone di invio
const submitButton = document.getElementById("submitButton");

// Aggiungo un Event Listener sul bottone
submitButton.addEventListener("click", function() {
    // Prendo il numero specificato dall'utente
    const arrayLength = parseInt(document.getElementById("arrayLength").value);

    // Prendo uno span dove specificare i numeri e ne resetto il contenuto
    const arrayEnd = document.getElementById("arrayEnd");
    arrayEnd.innerHTML = "";

    // Controllo che sia stata specificata una lunghezza di almeno 5
    if (arrayLength < 5) {
        arrayEnd.innerHTML = "I numeri devono essere almeno 5!";
    } else {
        // Creo l'array
        const randomNumbers = [];

        // Genero i numeri casuali e li inserisco nell'array
        for(let i = 0; i < arrayLength; i++) {
            randomNumbers[i] = Math.floor(Math.random() * 100);
        }  
        console.log(randomNumbers);

        for (let i = randomNumbers.length - 5; i < randomNumbers.length; i++) {
            arrayEnd.innerHTML += `${randomNumbers[i]} `;
        }
    }
});