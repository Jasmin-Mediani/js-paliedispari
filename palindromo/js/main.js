//alla funzione "palindroma" passo il risultato del prompt;
// credo la funzione "palindroma", il suo argument/variabile è "parola";
//all'interno creo una variabile isPalindroma che dovrà essere uguale a parola messa al rovescio.
//parola messa al rovescio si può fare con .split (ogni lettera diventa un array a sé), .reverse (mettere le lettere degli array in ordine inverso) e poi .join (riunisce le lettere in un unico array)
//se isPalindroma === parola, abbiamo un palindromo. Sennò no.  



palindroma(prompt("inserisci una parola e ti dirò se è palindroma"));
/* oppure */
// var testo = prompt("inserisci una parola e ti dirò se è palindroma");
// palindroma(testo);


//var palindroma = (parola) => {
function palindroma(parola) {
    var isPalindroma = parola.split("").reverse().join("");
    //console.log(parola === isPalindroma);
    if (parola.toLowerCase() === isPalindroma.toLowerCase()) {
        console.log("la parola è palindroma: " + parola + " == " + isPalindroma)
    } else {
        console.log("la parola non è palindroma: " + parola + " =/= " + isPalindroma)
    }
}


