// Livello 1 (Variabili, Operatori, Tipi di Dati)

// Crea una variabile e assegnale il tuo nome

// Dichiarazione della variabile name ed assegnazione del suo dato (stringa)

const userName = 'Roberto';
console.log(userName)


// Crea una variabile eta e assegnale latua età

const eta = 31;
console.log(eta);


// Stampa entrambi i valori in console utilizzando la concatenazione e il template literals

console.log('CONCATENAZIONE :' + ' ' + 'Ciao mi chiamo' + ' ' + userName + ' ' + 'e ho' + ' ' + eta + ' ' + 'anni');  // concatenazione

console.log(`TEMPLATE LITERALS : Ciao mi chiamo ${userName} e ho ${eta} anni`); // template literals



// Operazioni matematiche dichiara 2 numeri e stampane la somma, differenza prodotto e divisione

let firstNum = 12;

let secondNum = 2;

// Somma 

let somma = firstNum + secondNum;
console.log(`La somma tra ${firstNum} + ${secondNum} è uguale a : ${somma}`);

// Differenza

let diff = firstNum - secondNum;
console.log(`La differenza tra ${firstNum} - ${secondNum} è uguale a : ${diff}`);

// Moltiplicazione

let prod = firstNum * secondNum;
console.log(`Il prodotto tra ${firstNum} * ${secondNum} è uguale a : ${prod}`);


// Divisione 
let divis = firstNum / secondNum;
console.log(`La divisione tra ${firstNum} / ${secondNum} è uguale a : ${divis}`);





// Conversione di tipi

const strNumero = '40'; // stringa

console.log(typeof strNumero); // con il typeof verifico il tipo di dato

const numeroConvertito = Number(strNumero); // converto il dato della variabile strNumero da stringa a valoe numerico

console.log(typeof numeroConvertito);


const numero = 100; // valore numerico

console.log(typeof numero);

const numeroStringa = String(numero); // converto il dato della variabile numero da valore numerico a stringa

console.log(typeof numeroStringa);




// Livello 2 (Condizioni e cicli)

// Chiedi all'utente di inderire un numero tramite prompt e controlla se è pari o dispari

let userNumber = parseInt(prompt('Inserisci un numero'));

console.log(userNumber);

// Isruzione condizionale per stabilise se il numero inserito dall'utente è pari o dispari

if (userNumber % 2 === 0) { // operatore resto (se e vero il numero è pari)

    console.log(`Il numero ${userNumber} è pari`);

} else { // se e falso il numero è dispari

    console.log(`Il numero ${userNumber} è dispari`);
};



