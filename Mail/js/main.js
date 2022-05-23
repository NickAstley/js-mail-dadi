/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf) */

// Creo un array di e-mail da controllare
const emailsToCheck = ["andreanicastro1994@gmail.com", "ciao@hotmail.it", "boolean@gmail.com","test@test.test", "corretto@bravo.net"];

// Prendo il bottone che serve ad inserire l'email
const submitButton = document.getElementById("bottoneInvia");

// Aggiungo un EventListener sul click
submitButton.addEventListener("click", function() {
    // Prendo il valore dell'email inserita dall'utente
    const userMail = document.getElementById("mailUtente").value;

    // Creo una variabile che rimarrà falsa se l'email non è nella lista, mentre sarà vera se è presente
    let emailCheck = false;

    // Controllo che sia inserita nella lista
    for (let i = 0; i < emailsToCheck.length; i++) {
        if (userMail === emailsToCheck[i]) {
            emailCheck = true;
        }
    }

    // Prendo lo span in cui inserire il risultato della ricerca
    const spanEsito = document.getElementById("esitoRicerca");

    // Stampo un messaggio in base all'esito del controllo
    if (emailCheck === false) {
        spanEsito.innerHTML = "L'email non è corretta!"
    } else {
        spanEsito.innerHTML = "L'email è giusta!"
    }
});