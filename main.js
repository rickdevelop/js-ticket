var km = prompt('Inserisci il  numero  di kilometri da percorrere');
var età = prompt('Inserisci la tua età');
var prezzo = km * 0.21;
if (età < 18) {
prezzo = (prezzo - (prezzo / 100 * 20));
} else if (età > 65) {
prezzo = (prezzo - (prezzo / 100 * 40));
} else {
prezzo = prezzo;
}
document.write ('il prezzo è di:');
document.writeln(prezzo + 'euro');
