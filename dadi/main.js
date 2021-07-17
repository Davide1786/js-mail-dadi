/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


// Genero numeri random utente
var giocatore = Math.floor(Math.random () * 6);

// Genero numeri random pc
var computer = Math.floor(Math.random () * 6);

// Stampo il risultato sul ispector
console.log('Il giocatore ha tirato il numero ' + giocatore);
console.log('Il computer ha tirato il numero ' + computer);

// Possibilita di vincita
if (giocatore > computer) {
   console.log('Vince Giocatore');

} else if (computer > giocatore) {
   console.log('Vince Computer');

} else { (computer == giocatore)
   console.log('Pareggio');

}









   