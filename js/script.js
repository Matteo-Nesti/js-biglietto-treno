console.log('JS OK');
//create variabili per costo biglietto eta` e km  
const ticketPriceForKm = 0.21;
const trainPrice = document.getElementById('train-price');
const userAge = document.getElementById('user-age');
const userKm = document.getElementById('user-km');

//prompt per chidere dati all'utente

let km = parseInt(prompt('quanti Kilometri si desidera percorrere?', 100));
console.log(km + ' kilometri da percorrere');

let age = parseInt(prompt('Quanti anni hai?', 20));
console.log(age, age + ' eta\`');

//prezzo del biglietto intero 
let ticketTotalPrice = (km * ticketPriceForKm).toFixed(2);
console.log(ticketTotalPrice + ' prezzo biglietto totale')

// VERIFICA

if (isNaN(km) || isNaN(age) || age < 1) {
    alert('I valori inseriti non risultano validi')
}

//SOLUZIONE MIA
else {
    userKm.innerText = km + ' Kilometri'

    userAge.innerText = ' ' + age + ' Anni'

    trainPrice.innerText = ticketTotalPrice + ' €'

    if (age < 18){
        //  discount 20%
        let discountUnder18 = (ticketTotalPrice - (ticketTotalPrice * 20 / 100)).toFixed(2) 
        console.log(discountUnder18 + ' discount 20%')

        trainPrice.innerText = discountUnder18 + ' € invece di ' + ticketTotalPrice + ' €'
    }
    else if (age >= 65) {
        // discount 40%
        let discountOver65 = (ticketTotalPrice - (ticketTotalPrice * 40 / 100)).toFixed(2)
        console.log(discountOver65 + ' € discount 40%')

        trainPrice.innerText = discountOver65  + ' € invece di ' + ticketTotalPrice + ' €'
    } 
}









//soluzione consigliata
/*
let discount = 0;

if (isNaN(km) || isNaN(age) || age < 1) {
    alert('I valori inseriti non risultano validi')
}
else {   
    
    if (age < 18){
        discount = 20     
    }
    else if (age >= 65) {
        discount = 40
    }
}
    
let Ticket = (ticketTotalPrice - (ticketTotalPrice * discount / 100)).toFixed(2)

console.log('discount ' + discount + '%')
console.log(Ticket + ' prezzo biglietto per età ' + age)
*/
