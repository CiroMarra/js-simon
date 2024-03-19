//Descrizione:
//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const randomNumbers = document.querySelector('#numeri');

 const numbers = generateRandomArray(5, 1, 200);
 console.log(numbers);
 function generateRandomArray(arrayLength, min, max) {
// Creiamo un array vuoto
     const numbersArray = [];
     while(numbersArray.length < arrayLength) {
         // genero un numero random
         const randNumber = getRndInteger(min, max);
         // se il numero random non esiste nell'array lo pusho
         if(!numbersArray.includes(randNumber)) {
             numbersArray.push(randNumber);
         }
     }
     return numbersArray;
 }
// fa apparire i numeri all'interno del DOM
 document.querySelector('#numeri').innerHTML = numbers;

 // fa scomparire i numeri dopo 30 secondi
 setTimeout(function() {
    randomNumbers.innerHTML = ''; 

}, 30000);

// fa comparire dopo 31 secondi i prompt per richiedere all'utente le risposte 
setTimeout (function() {
    askUserAnswer()
}, 31000);


// funzione che serve a richiedere all'utente i numeri che sono appena scomparsi
function askUserAnswer() {
    const userGuesses = [];
    for (let i = 0; i < numbers.length; i++) {
        const guess = parseInt(prompt("Inserisci il " + (i + 1) + " numero che hai visto precedentemente"));
        userGuesses.push(guess);
    }

    // serve a determinare con una funzione  quante risposte dell'utente sono corrette
function correctAnswer(numbers, answer) {
    let goodCorrect = [];
    for (let i = 0; i < answer.length; i++) {
        let guess = answer[i];
        if (numbers.includes(guess)) {
            goodCorrect.push(guess);
        }
    }
    return goodCorrect;
}

    //  dopo che è stato determinato il numero esatto di risposte viene mostrato a schermo tramite alert il numero di risposte esatte più i numeri individuati dall'utente.
    const correctGuesses = correctAnswer(numbers, userGuesses);
    alert("Hai indovinato " + correctGuesses.length +  "  numeri e quelli corretti sono: " + correctGuesses.join(' - '));
}
 function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min + 1) ) + min;
}





