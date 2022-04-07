// variabili del prezzo al km, eta per accedere allo sconto e % sconto per età
const pricePerKm = 0.21;
const firstDiscountAge = 18;
const secondDiscountAge = 65;

const firstDiscountPerc = 20;
const secondDiscountPerc = 40;

// raccolta input utente (km da percorrere e età del passeggero)
const userDistance = parseInt(prompt("Quanti km devi percorrere?"));
console.log(userDistance, typeof(userDistance));

const userAge = parseInt(prompt("Qual'è la tua età?"));
console.log(userAge, typeof(userAge));

// calcolo del prezzo al lordo dello sconto (km da pecorrere * 0,21 al km)
const fullTicketPrice = userDistance * pricePerKm;
console.log(fullTicketPrice, typeof(fullTicketPrice));

// determinazione della percentuale di sconto (SE età < 18 = 20% - SE età > 65 = 40% - ALTRIMENTI niente sconto )
// e calcolo dello sconto
const firstDiscountMultiplier = 1 - ( firstDiscountPerc / 100);
console.log(firstDiscountMultiplier, typeof(firstDiscountMultiplier));
const secondDiscountMultiplier = 1 - ( secondDiscountPerc / 100);
console.log(secondDiscountMultiplier, typeof(secondDiscountMultiplier));

let finalTicketPrice;

if ( userAge < firstDiscountAge ) {
    finalTicketPrice = fullTicketPrice * firstDiscountMultiplier;
} else if (userAge > secondDiscountAge) {
    finalTicketPrice = fullTicketPrice * secondDiscountMultiplier;
} else {
    finalTicketPrice = fullTicketPrice;
}

const finalPriceRounded = finalTicketPrice.toFixed(2);
console.log(finalTicketPrice, typeof(finalTicketPrice));
console.log(finalPriceRounded, typeof(finalPriceRounded));

// stampa in HTML del prezzo finale
const outputFinalPrice= `Il prezzo del tuo biglietto è: ${finalPriceRounded} \u20ac`;

document.getElementById('final-price').innerHTML = outputFinalPrice;