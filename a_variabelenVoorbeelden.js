// 1. Declareer een variabele om je naam in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven te worden.
const name = "Daniëlle";


// 2. Declareer een variabele om de kleur van je ogen in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven te worden.
const eyeColor = "Groen";


// 3. Declareer een variabele om je leeftijd in op te slaan en zet de waarde erin. De variabele moet later overschreven kunnen worden.
let age = 37;


// 4. Declareer een variabele om je beroep in op te slaan en zet de waarde erin. De variabele moet later overschreven kunnen worden.
let profession = "Student"


// 5. Declareer een variabele om je schoenmaat in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven te worden.
const shoeSize = 38;


// 6. Declareer een variabele om op te slaan of je een partner hebt of niet. De variabele moet later overschreven kunnen worden.
let hasPartner = false;


// 7. Declareer een variabele om het aantal kinderen op te slaan. De variabele moet later overschreven kunnen worden.
let numberOfChildren = 0;


// 8. Gebruik de variabelen om hun waarden in de terminal te loggen. Zijn ze allemaal correct?
console.log(name, eyeColor, age, profession, shoeSize, hasPartner, numberOfChildren); // geeft Daniëlle Groen 37 Student 38 false 0


// 9. Gegeven de bestaande code hieronder, kun je de code schrijven zodat hun waarden omgewisseld worden?
let a = "3";
let b = "8";
// Zodat de variabele "a" de waarde "8" heeft en de variabele "b" heeft de waarde "3".
// Verander NIETS aan de bestaande code.
// Je mag GEEN getallen typen.
// Je mag de variabelen a en b NIET opnieuw declareren.
let c = a;
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);