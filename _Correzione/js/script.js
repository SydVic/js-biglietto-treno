// raccolta input utente (km da percorrere e età del passeggero)
const userDistance = parseInt(prompt("Quanti km devi percorrere?"));
console.log(userDistance, typeof(userDistance));

const userAge = parseInt(prompt("Qual'è la tua età?"));
console.log(userAge, typeof(userAge));

// calcolo del prezzo al lordo dello sconto (km da pecorrere * 0,21 al km)
const pricePerKm = 0.21;

let ticketPrice = userDistance * pricePerKm;

// determinazione della percentuale di sconto (SE età < 18 = 20% - SE età > 65 = 40% - ALTRIMENTI niente sconto )
// e calcolo dello sconto
if ( userAge < 18 ) {
    ticketPrice = ticketPrice * 0.8;
} else if (userAge > 65) {
    ticketPrice = ticketPrice * 0.6;
}
console.log(ticketPrice, typeof(ticketPrice));

// stampa in HTML del prezzo finale
const outputFinalPrice= `Il prezzo del tuo biglietto è: ${ticketPrice.toFixed(2)} \u20ac`;

document.getElementById('final-price').innerHTML = outputFinalPrice;