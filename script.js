console.log('ok js');

// creare generatoere di password dove chiedere:

// Name
// cognome
// età
// aggiungere testo+21

// 1) recupero il nome dall'utente
// 2) recupero il cognome dall'utente
// 3) recupero colore preferito dall'utente
// 4) recupero elemento da stampare
// 5) aggiungo testo+21
// 6) stampo


// recupero nome
const Name = prompt('Qual è il tuo nome?');
console.log(Name);

// recupero cognome

const Surname = prompt('Qual è il tuo cognome?');
console.log(Surname);

// recupero colore preferito dall'utente

const favouriteColor = prompt('colore preferito?');
console.log(favouriteColor);

// recupero elemento da stampare
const password = document.getElementById('password');
console.log(password);

// stampo e aggiungo 21 nel testo
password.innerHTML = `La tua password è:  ${Name}${Surname}${favouriteColor}21`;