//Stampa le potenze di 2 fino a 1000
var base = 2;
var esponente = 10;

var risultato = 1;

for (var i = 0; i < esponente; i++) {
    //console.log(i);

    risultato = risultato * base;
    console.log(risultato);
}
