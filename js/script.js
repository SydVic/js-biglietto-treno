// raccolta input utente (km da percorrere e età del passeggero)
const userDistance = parseInt(prompt("Quanti km devi percorrere?"));
console.log(userDistance, typeof(userDistance));

const userAge = parseInt(prompt("Qual'è la tua età?"));
console.log(userAge, typeof(userAge));

// calcolo del prezzo al lordo dello sconto (km da pecorrere * 0,21 al km)
const pricePerKm = 0.21;

const fullTicketPrice = userDistance * pricePerKm;
console.log(fullTicketPrice, typeof(fullTicketPrice));

// determinazione della percentuale di sconto (SE età < 18 = 20% - SE età > 65 = 40% - ALTRIMENTI niente sconto )
// e calcolo dello sconto
let finalTicketPrice;

if ( userAge < 18 ) {
    finalTicketPrice = fullTicketPrice * 0.8;
} else if (userAge > 65) {
    finalTicketPrice = fullTicketPrice * 0.6;
} else {
    finalTicketPrice = fullTicketPrice;
}

const finalPriceRounded = finalTicketPrice.toFixed(2);

// stampa in HTML del prezzo finale
const outputFinalPrice= `Il prezzo del tuo biglietto è: ${finalPriceRounded} \u20ac`;
console.log(finalTicketPrice, typeof(finalTicketPrice));
document.getElementById('final-price').innerHTML = outputFinalPrice;