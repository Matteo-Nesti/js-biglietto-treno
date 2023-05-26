console.log('JS OK');
//create variabili per costo biglietto eta` e km  
const ticketPriceForKm = 0.21;

let km;

let age;

//prompt per chidere dati all'utente
km = prompt('quanti Kilometri si desidera percorrere?', 100);
console.log(km);

age = prompt('Quanti anni hai?', 20);
console.log(age);

//prezzo del biglietto intero
let ticketTotalPrice = km * ticketPriceForKm;
console.log(ticketTotalPrice)
