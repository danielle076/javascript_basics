// ARITHMETIC OPERATORS
// + Telt twee waarden bij elkaar op x + y
// - Trekt een waarde van een andere af x - y
// * Vermenigvuldigt twee waarden x * y
// / Deelt de ene waarde door de andere x / y
// % Geeft als resultaat de rest van de deling x % y
// ++ Vermeerdert de waarde van een variabele met 1 ++x
// -- Vermindert de waarde van een variabele met 1 --x

const total = 2 + 4 * 10
console.log(total); // geeft 42 en niet 60

// Postfix ++ en --
let x = 2;
y = x++;
console.log("X:", x + " Y:", y); // geeft X: 3 Y: 2

let a = 3;
b = a--;
console.log("A:", a + " B:", b); // geeft A: 2 B: 3

// Prefix ++ en --
let z = 5;
w = ++z;
console.log("Z:", z + " W:", w); // geeft Z: 6 W: 6

let c = 2;
d = --c;
console.log("C:", c + " D:", d); // geeft C: 1 D: 1

// Als je de waarde van e met meer dan één wilt verhogen dan kun je += gebruiken. Dit is gelijk aan "e = e + 2"
// en e is nu gelijk aan 7.
let e = 5;
e += 2;
console.log("E:", e); // geeft 7

// In dit geval is "f = f + g", wat gelijk is aan 8.
// Dit werkt ook met -=, *=, /=.
let f = 5;
let g = 3;
f += g;
console.log("F:", f); // geeft 8

// JavaScript is een dynamisch getyp eerde (ook wel losjes getypeerde) scripttaal. Dat wil zeggen, in JavaScript kunnen
// variabelen in verloop van tijd verschillende datatypes krijgen. Datatypes zijn in principe getypeerde gegevens die
// kunnen worden gebruikt en gemanipuleerd in een programma.
let banana = 42 // banana is nu een nummer
banana = "geel" // banana is nu een string geworden
banana = true // banana is nu een boolean geworden

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
const outcome = score1 * score2; // geeft NaN (Not A Number) omdat je "seven" en "four" niet kan omzetten in een nummer

console.log(address);
console.log(outcome);