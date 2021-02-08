// STRING
// Een string bestaat uit nul of meer tekens die tussen aanhalingstekens staan (niet verwarren met “”).

// Voorbeeld
const x = "Freckle";

// STRING SAMENGEVOEGD
// "a" + " " + "b" wordt "a b" samengevoegd tot een enkele string.

// Voorbeeld #1
console.log("Hello" + "World"); // geeft HelloWorld

// Voorbeeld #2
// De woorden van voorbeeld #1 zijn aan elkaar geschreven. Je kunt dit op twee manieren oplossen:
// 1. door " "
// 2. door een spatie bij één van de woorden
console.log("Hello" + " " +  "World"); // geeft Hello World
console.log("Hello" + " World"); // geeft Hello World

// STRING LENGTH
// Bereken het aantal karakters in een string door de length eigenschap te gebruiken.
// Wanneer we word.length schrijven, krijg je het aantal tekens in het woord.
const name = "Freckle";
console.log(name.length); // geeft 7

// STRING SLICE()
// De functie slice() haalt een deel uit een string en geeft het uitgeknipte deel terug in een nieuwe string.
// De methode neemt 2 parameters: de beginpositie, en de eindpositie.
// Dit voorbeeld snijdt een deel van een string van positie 0 TOT positie 1 (dus alleen de eerste letter).
const cat = "Freckle";
console.log(cat.slice(0,1)); // geeft F

// Dit voorbeeld snijdt een deel van een string van positie 2 TOT positie 5.
const pet = "Freckle";
console.log(pet.slice(2,5)); // geeft eck

// Tip: om snel erachter te komen hoeveel karakters je snijdt, kun je de bovengrens nemen min de ondergrens.
// Bijvoorbeeld, [0, 3]  3 - 0 is 3 tekens, dat betekent dat je er drie karakters uithaalt. Of [1, 5]  5 - 1 is 4,
// zou er vier tekens uit moeten komen.

// STRING toUpperCase()
// De toUpperCase() methode veranderd alle tekens in de string in hoofdletters.
const snow = "Icey";
console.log(snow.toUpperCase()); // geeft ICEY

// Wanneer je "snow" oproept krijg je Icey en niet ICEY.
console.log(snow); // geeft Icey

// Om hem op te slaan in de variabele moet je een nieuwe variabele maken.
let ice = "White";
ice = ice.toUpperCase();
console.log(ice); // geeft WHITE

// STRING toLowerCase()
// De toLowerCase() methode veranderd alle tekens in de string in kleine letters.
let weather = "BLUE";
weather = weather.toLowerCase();
console.log(weather); // geeft blue