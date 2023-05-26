console.log('JS OK');
//create variabili per costo biglietto eta` e km  
const ticketPriceForKm = 0.21;

let discount = 0;


//prompt per chidere dati all'utente
let km = parseInt(prompt('quanti Kilometri si desidera percorrere?', 100));
console.log(km + ' kilometri da percorrere');

let age = parseInt(prompt('Quanti anni hai?', 20));
console.log(age + ' eta\`');

//prezzo del biglietto intero
let ticketTotalPrice = (km * ticketPriceForKm).toFixed(2);
console.log(ticketTotalPrice + ' prezzo biglietto totale')

/*

SOLUZIONE MIA

if (age < 18){
     discount 20%
    let discountUnder18 = (ticketTotalPrice * 20 / 100).toFixed(2) 
    console.log(discountUnder18 + ' discount 20%')
    // prezzo biglietto sconto 20%
    let ticketUnder18 = (ticketTotalPrice - discountUnder18).toFixed(2)
    console.log(ticketUnder18 + ' prezzo biglietto under 18')
}
else if (age >= 65) {
    // discount 40%
    let discountOver65 = (ticketTotalPrice * 40 / 100).toFixed(2)
    console.log(discountOver65 + ' discount 40%')
    // prezzo biglietto sconto 40%
    let ticketOver65 = (ticketTotalPrice - discountOver65).toFixed(2)
    console.log(ticketOver65 + ' prezzo biglietto over 60')
}
*/

// Validazione SOLUZIONE MIA

if (isNaN(km) || isNaN(age) || age < 1) {
    alert('I valori inseriti non risultano validi')
}
else {   
    //soluzione consigliata
    
    if (age < 18){
        discount = 20     
    }
    else if (age >= 65) {
        discount = 40
    }
}
    
let ticket = (ticketTotalPrice - (ticketTotalPrice * discount / 100)).toFixed(2)

console.log('discount ' + discount + '%')
console.log(ticket + ' prezzo biglietto per età ' + age)