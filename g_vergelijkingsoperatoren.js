// COMPARISON OPERATORS
// Vergelijkingsoperatoren worden gebruikt om te testen op waar (true) of onwaar (false).

// == equal to (gelijk aan)
// === equal value en equal type (gelijke waarde en gelijk type)
// != not equal (niet gelijk)
// !== not equal value of not equal type (niet gelijke waarde of niet gelijk type)
// > greater than (groter dan)
// < less than (minder dan)
// >= greater than of equal to (groter dan of gelijk aan)
// <= less than of equal to (minder dan of gelijk aan)

// VERSCHIL =, == EN ===
// = wordt gebruikt om een waarde aan een variabele toe te kennen (geen vergelijking)
// == is een vergelijking op een waarde
// === is een vergelijking op een waarde én type

// VOORBEELDEN
// Gegeven: x = 5
const x = 5;

// == equal to, x == 8 false, x == "5" true en x == 5 true
console.log(x == 8);
console.log(x == "5");
console.log(x == 5);

// === equal value en equal type, x === "5" false en x === 5 true
console.log(x === "5");
console.log(x === 5);

// != not equal, x != 8 true
console.log(x != 8);

// !== not equal value of not equal type, x !== "5" true en x !== 5 false
console.log(x !== "5");
console.log(x !== 5);

// > greater than, x > 8 false
console.log(x > 8);

// < less than, x < 8 true
console.log(x < 8);

// >= greater than of equal to, x >= 8 false
console.log(x >= 8);

// <= less than of equal to, x <= 8 true
console.log(x <= 8);

// Wanneer je een vergelijkingsoperator gebruikt, zal de terugkeerwaarde altijd waar of onwaar zijn. Je hoeft het niet
// altijd direct in een voorwaarde te zetten: je kunt de vergelijking ook in een variabele opslaan
const grade = 4;
const isPassed = grade >= 5.5;  // geeft false

console.log("Student passed: " + isPassed) // geeft "Student passed: false"