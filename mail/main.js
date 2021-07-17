/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


// Richiesta mail utente
var mail = (prompt ("Inserisci qui la tua mail per accedere"));
console.log(mail);

// Creazione lista
var lista = ["davidenapolitano@live.it", "pippobaudo@live.it", "leonardodavinci@live.it"]
console.log(lista);

if (lista.includes(mail)){
   console.log("Accesso validato");
   alert("Felici di rivederti");
   
}else{
   console.log("Accesso negato");
   alert("Spiacenti! Non sei registrato");
}



// Prova tre

// if(lista == lista) {
//    console.log("Utente Registrato");

// }else if (!(lista == risultato)) {
//    console.log("Utente non Registrato");
// }

// // Chiedi mail utente
// var inserimentoMail = prompt("Inserisci qui la tua e-mail");
// console.log(inserimentoMail);

// // Creazione lista
// var lista = ["davidenapolitano@live.it", "pippobaudo@live.it", "leonardodavince@gmail"];
// console.log(lista);

// if(lista.includes(inserimentoMail)) {
//    console.log("Utente Registrato");
//    alert("benvenuto");

// }else {
//    console.log("Utente non Registrato");
//    alert("Non puoi accedere se non sei registrato");
// }




// Prova due

// // Chiedi mail utente
// var inserimentoMail = prompt("Inserisci qui la tua e-mail");
// console.log(inserimentoMail);

// // Creazione lista
// var lista = ["davidenapolitano@live.it", "pippobaudo@live.it", "leonardodavince@gmail"];
// console.log(lista);

// if (lista) {

//    for (var i = 0; i < lista.length; i++) {
//       console.log("Utente registrato");
//    } 

// } else{
//    console.log("Utente non registrato");
// }


// Prova uno

// if(lista == lista) {
//    console.log("Utente Registrato");

// }else if (!(lista == risultato)) {
//    console.log("Utente non Registrato");
// }

