// Snack 1]
// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
// peso e lunghezza. Calcola quanto pesano tutte le zucchine.




var zucchina1 =
{
    "varieta": "Zucchina",
    "peso": 3,
    "lunghezza": 15


};
var zucchina2 =
{
    "varieta": "Zucchino nero di Milano",
    "peso": 3,
    "lunghezza": 12


};

var zucchina3 =
{
    "varieta": "Zucchino romanesco",
    "peso": 2,
    "lunghezza": 11


};
var zucchina4 =
{
    "varieta": "Zucchino ortolano di Faenza",
    "peso": 3,
    "lunghezza": 11


};
var zucchina5 =
{
    "varieta": "Zucchina lunga fiorentina",
    "peso": 4,
    "lunghezza": 17


};
var zucchina6 =
{
    "varieta": "Zucchino siciliano",
    "peso": 3,
    "lunghezza": 11


};
var zucchina7 =
{
    "varieta": "Zucchina striata di Napoli",
    "peso": 3,
    "lunghezza": 13


};
var zucchina8 =
{
    "varieta": "Zucchina bianca triestina",
    "peso": 3,
    "lunghezza": 12


};
var zucchina9 =
{
    "varieta": "Zucchina rigata pugliese",
    "peso": 2,
    "lunghezza": 10


};
var zucchina10 =
{
    "varieta": "Zucchino tondo di Piacenza",
    "peso": 1,
    "lunghezza": 8


};

// METTO IL PESO DI TUTTE LE ZUCCHINE IN UN ARRAY 

var array = [zucchina10, zucchina9, zucchina8, zucchina7, zucchina6, zucchina5, zucchina4, zucchina3, zucchina2, zucchina1];




// VARIABILE SOMMA
var somma = 0;
// APRO UN CICLO FOR PER SCOPRIRE LA SOMMA DELLE ZUCCHINE
for (i = 0; i < array.length; i++) {
    somma = somma + array[i].peso;

}


console.log(somma);

// [Snack 2]
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine. 



var zucchineMaxi = [];
var zucchineMini = [];

var zucchineMaxiPeso = [];
var zucchineMiniPeso = [];
for (j = 0; j < array.length; j++) {
    var zucchina = array[j];

    if (zucchina.lunghezza >= 15) {
       
        zucchineMaxi.push(zucchina.lunghezza);
        zucchineMaxiPeso.push(zucchina.peso);
    } else {
        zucchineMini.push(zucchina.lunghezza);
        zucchineMiniPeso.push(zucchina.peso)
    }
    
}
console.log("Queste sono le misure delle zucchine maggiori uguali a 15: " + zucchineMaxi);
console.log("Queste sono le misure delle zucchine minori a 15: " + zucchineMini);
var pesoTotMaxi = 0;
for ( index = 0; index < zucchineMaxiPeso.length; index++) {
     pesoTotMaxi += zucchineMaxiPeso[index];
    
}
console.log("Questo è il peso totale delle zucchine maggiori uguali a 15: " + pesoTotMaxi);

var pesoTotMini = 0;

for ( x = 0; x < zucchineMiniPeso.length;x++) {
    pesoTotMini += zucchineMiniPeso[x];
   
}
console.log("Questo è il peso totale delle zucchine minori a 15: " + pesoTotMini);