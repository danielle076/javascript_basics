// + Telt twee waarden bij elkaar op x + y
// - Trekt een waarde van een andere af x - y
// * Vermenigvuldigt twee waarden x * y
// / Deelt de ene waarde door de andere x / y
// % Geeft als resultaat de rest van de deling x % y
// ++ Vermeerdert de waarde van een variabele met 1 ++x
// -- Vermindert de waarde van een variabele met 1 --x
const total = 2 + 4 * 10 // geeft 42 en niet 60

// JavaScript is een loosely typed language: de variabelen zijn niet direct geassocieerd met een bepaald gegevenstype.
let banana = 42 // banana is nu een nummer
banana = "geel" // banana is nu een string geworden
banana = true // banaan is nu een boolean geworden

2 + 2 // geeft 4
"2" + 2 // geeft 22
"2" + "2" - 6 // geeft 16
// De + operator is de enige operator die je kunt toepassen op tekstuele waarden (strings). Wanneer we proberen om een
// string en een "niet-tekenreeks" op te tellen, zal JavaScript eerst alle niet-tekenreeks waarden omzetten in
// tekenreeksen. Vervolgens worden alle tekenreeksen aan elkaar geplakt ("2" + 2 = "22"). Alle waarden die geen getallen
// zijn, worden automatisch geconverteerd naar getallen en JavaScript probeert er "het beste van te maken":
// "2" + "2" = "22" en "22" - 6 = 16.

const houseNumber = 12;
const street = "Prinsenlaan ";
const address = street + houseNumber; // geeft “Prinsenlaan 12”

const score1 = "seven";
const score2 = "four";
const total = score1 * score2; // geeft NaN (Not A Number) omdat je "seven" en "four" niet kan omzetten in een nummer

console.log(address);
console.log(total);