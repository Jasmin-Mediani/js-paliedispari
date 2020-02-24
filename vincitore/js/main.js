// L’utente sceglie pari o dispari              --> prompt;
// L'utente sceglie un numero da 1 a 5.         --> prompt;
// Generiamo un numero random (sempre da 1 a 5) per il computer con Math.random + math floor o math ceil (+ - 1 a seconda di quale uso); 
// Sommo il risultato dell'utente, quello del pc... se esce pari o dispari a seconda di cosa ha scelto l'utente, l'utente ha vinto. --> IF ELSE 


var pariODispari = prompt("scegli: pari o dispari?");
console.log("hai scelto " + pariODispari);
var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("il numero che hai scelto è " + numeroUtente);
var numeroPc = Math.floor(Math.random() * 5) + 1; //nota: aggiungo + 1 perché così i numeri sceglibili partono da 1 invece che da 0... vanno da 1 a 5 invece che da 0 a 4. 
console.log("il numero scelto dal pc è " + numeroPc);

var somma = (numeroUtente + numeroPc);
console.log("la somma dei vostri numeri è: " + somma)




if ((somma % 2 == 0) && (pariODispari === "pari")) {
    console.log("Utente, hai vinto!");
} else if ((somma % 2 !== 0) && (pariODispari === "dispari")) {
    console.log("Utente, hai vinto!")
} else {
    console.log("Utente, hai perso!");
}



