/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*I principali dataTypes in JavaScript sono: Number, String, Boolean, Undefined e Null, BigInt, Symbol.
Per Numbers si intendono i numeri che siamo abituati ad usare nel quotidiano, che possono essere interi (1,2,3,4) o decimali (1.2, 2.3, 3.4). Con questo DataTypes si possono fare tante cose, come ad esempio dei semplici calcoli matematici, sommare, sottrarre, multiplicare o dividire.
Le Stringhe sono come le tesserine del gioco da tavola scarabeo, unendole tra loro si possono creare un infinità di parole, frasi , testi. 
I Boolean è come un interruttore della luce che attiva una risposta vera o falsa.
Gli Undefined e Null sono due valori che sembrano simili tra loro ma  in realtà non lo sono, Undefined è un testo intenzionalmente vuoto, In bianco.Null è un foglio dove ha contenuto un vaolore 0, come : niente.

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/* E'  un contenitore che può avere proprietà, come un colore o una forma e un azione come un movimento. */



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var primo = 12;

var secondo = 20;

var Somma = primo + secondo;

console.log (Somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Samuele";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var numero = 4;

var sottrazione = x - numero;

console.log (sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
let verifica = name1!=name2;
console.log (verifica);

console.log(name1.toLowerCase()==name2.toLowerCase());

console.log(name2.toLowerCase());








