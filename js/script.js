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


// Switch case

// Chiedi all'utente di inserite il nome di un giorno della settimana stampando in console se è lavorativo o festivo

let giorno = prompt('Inserisci un giorno della settimana').toLowerCase();

// Switch

switch (giorno) { // condizione giorno
    case 'lunedi':
        console.log(`${giorno} è un giorno lavorativo`);
        break; // esco da questa condizione
    case 'martedi':
        console.log(`${giorno} è un giorno lavorativo`);
        break;
    case 'mercoledi':
        console.log(`${giorno} è un giorno lavorativo`);
        break;
    case 'giovedi':
        console.log(`${giorno} è un giorno lavorativo`);
        break;
    case 'venerdi':
        console.log(`${giorno} è un giorno lavorativo`);
        break;
    case 'sabato':
        console.log(`${giorno} è un giorno festivo`);
        break;
    case 'domenica':
        console.log(`${giorno} è un giorno festivo`);
        break;
};


// Ciclo for

// Stampiamo dei numeri da 1 a 10

console.log('-----CICLO FOR-----');

for (let i = 1; i <= 10; i++) {
    console.log(i);
};


// Ciclo while 

// Crea un contatore che parta da 10 e arriva fino a 0

let i = 10; // contatore
console.log('-----CICLO WHILE-----');
while (i >= 0) { // codizione da verificare 

    console.log(i);
    i--; // condizione di fine ciclo
};


// Fizz Buzz con manipolazione del dom (genera numeri da 1 a 20 : multipli di 3 inetto fizz, multipli di 5 inietto buzz, per entrambi fizzBuzz)

// Dichiarazione variabili 

// Elemento di visualizazzione

let grid = document.getElementById('grid');

// Ciclo for per generare numeri da 1 a 20

for (let i = 1; i <= 20; i++) {
    // Per ogni istruzione di iterazione creo un elemento div
    let div = document.createElement('div');
    // Assegno all'elemento creato la classe square
    div.classList.add('square');

    // Appendo all' elemento di visualizazzione (grid) i div creati
    grid.appendChild(div);

    // Istruzione consizionale per stabilire i multipli di 3 e di 5

    if (i % 3 === 0 && i % 5 === 0) { // operatore binario && (and - entrambi gli operatori devono risultare veri)
        div.innerText = 'FizzBuzz';
        div.classList.add('fizzBuzz');
    } else if (i % 3 === 0) {
        div.innerText = 'Fizz';
        div.classList.add('fizz');
    } else if (i % 5 === 0) {
        div.innerText = 'Buzz';
        div.classList.add('buzz');
    };
};


// Livello 3 Funzioni e array 

// Scrivi una funzione somma (a, b) che restituisca la somma di 2 numeri

// Dichiarazione della funzione (indico allo script che esiste una funzione ovvero -blocco di codice rutilizzabile che esegue un operazione specifica)

function addizione(a, b) { // a, b sono dei parametri ovvero delle variabili che esistono solo all'interno della funzione che prendono un valore dall'argomento
    return a + b; // restiuiso la somma dei due parametri
};

let primo_numero = 5;
let secondo_numero = 5

let risultato = addizione(primo_numero, secondo_numero); // invoco la funzione somma (richiamo) e le passo un argomento reale (valori delle variabili)

console.log(`La somma tra ${primo_numero} + ${secondo_numero} è : ${risultato}`);



// Creaimo un array con 5 numeri e calcoliamo la loro somma con un ciclo for

// Array numerico 

const numbers = [10, 20, 30, 40, 50];

// Variabile settata a 0 per tenere traccia della somma tra i numeri 

let sommaNumeri = 0;

// Ciclo for (adatto per iterare su insiemi di dati array)
for (let i = 0; i < numbers.length; i++) {
    // Aggiungiamo ogni numero alla somma totale
    sommaNumeri += numbers[i];
};


console.log(`La somma tra tutti gli elementi è di : ${sommaNumeri}`);




// Manipolazione array (rimozione elemento, aggiunta elemento)

const nomi = ['Alessandro', 'Adriana', 'Antonio', 'Alessandro Jr', 'Gianluca', 'Giulia'];

// Rimozione ultimo elemento

nomi.pop();

// Aggiunta nuovo elemento

nomi.push('Roberto');

console.log(nomi);




// Funzione per trovare il valore massimo in un array

// Dichiarazione delle funzioni

function trovaMassimo(arrayNumberi) {
    // Variabile valore massimo (parto dal primo elemento dell'array)
    let massimo = arrayNumberi[0];

    // Ciclo sull'array numerico
    for (let i = 1; i < arrayNumberi.length; i++) {
        if (arrayNumberi[i] > massimo) {
            massimo = arrayNumberi[i];
        }
    };

    return massimo;
}


// Dichiarazione delle variabili

const testNumeri = [3, 7, 2, 10, 5];

console.log(`Il valore massimo è : ${trovaMassimo(testNumeri)}`);




// Oggetti, ciclo for in


// Crea un oggetto persona con proprietà nome, età e cognome e stampalo in console

// Oggetto

let persona = {
    nome: 'Roberto',
    cognome: 'Ledda',
    eta: 'Anni 31'
};

// Ciclo for in adatto per cicclare strutture dati di tipo oggetto

for (let key in persona) {
    console.log(key, ':', persona[key]);
};


// Array di oggetti films, mostro a video tutto il contenuto


// Definizione delle funzioni
function mostraInConsole(movieArray) {
    movieArray.forEach((elem, index) => {
        console.log(index);
        console.log(elem.titolo);
        console.log(elem.genere);
        console.log(elem.anno);
        console.log(elem.descrizione);
    });
};



// Dichiarazione delle variabili


// Array di oggetti 

let movies = [
    {
        titolo: 'Il collezionista di ossa',
        img: 'il_collezionista_di_ossa.jpg',
        genere: 'Thriller',
        anno: '1999',
        descrizione: 'Lorem ipsum dolor'
    },
    {
        titolo: 'Io sono leggenda',
        img: 'io_sono_leggenda.jpg',
        genere: 'Azione',
        anno: '2007',
        descrizione: 'Lorem ipsum dolor'
    },
    {
        titolo: 'Joker',
        img: 'joker.jpg',
        genere: 'Thriller',
        anno: '2019',
        descrizione: 'Lorem ipsum dolor'
    },
    {
        titolo: 'Land of Mine',
        img: 'landofmine.jpg',
        genere: 'Guerra',
        anno: '2015',
        descrizione: 'Lorem ipsum dolor'
    },
    {
        titolo: 'Napoleon',
        img: 'napoleon.jpg',
        genere: 'Guerra',
        anno: '2023',
        descrizione: 'Lorem ipsum dolor'
    },
    {
        titolo: 'Pulp Fiction',
        img: 'pulp_fiction.jpg',
        genere: 'Giallo',
        anno: '1994',
        descrizione: 'Lorem ipsum dolor'
    },
];

// Richiamo la finzione per mostrare l'arrau di oggetti a video
mostraInConsole(movies);

// Contenitore delle colonne e delle card
let films_container = document.getElementById('films-container');

// Ciclo forEach sull'array di oggetti (movies)
movies.forEach((elem) => {
    // Per ogni iterazione creo un elemento div
    let cols = document.createElement('div');
    // Assegno alle colonne create le classi di bootstrap
    cols.classList.add('col-12', 'col-md-4', 'col-sm-6');



});














