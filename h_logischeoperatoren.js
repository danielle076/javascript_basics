// LOGICAL OPERATORS
// Logische operatoren worden gebruikt om te testen op waar (true) of onwaar (false).

// && AND
// - Evalueert de operanden van links naar rechts.
// - Voor elke operand wordt deze eerst omgezet naar een boolean. Als het resultaat onwaar is, stopt hij en geeft de
// oorspronkelijke waarde van die operand terug.
// - Anders, als ze allemaal waar zijn, geeft het de laatste waarachtige waarde terug.
// || OR
// - Evalueert de operanden van links naar rechts.
// - Voor elke operand wordt deze eerst omgezet naar een boolean. Als het resultaat waar is, stopt hij en geeft de
// oorspronkelijke waarde van die operand terug.
// Anders, als alle waarden niet waar zijn, zal het de laatste waarde teruggeven.
// ! NOT
// - Converteert de operand naar het booleaanse type, d.w.z. waar/niet waar.
// - Geeft de omgedraaide waarde terug.

// VOORBEELDEN
// Gegeven: x = 6 en y = 3
const x = 6;
const y = 3;

// && AND, (x < 10 && y > 1) is true
console.log(x < 10 && y > 1);

// || OR, (x === 5 || y == 5) is false
console.log(x === 5 || y == 5);

// ! NOT, !(x === y) is true
console.log(!(x === y));

// Stel dat we willen controleren of onze ingrediënten array al toegewezen is, maar we willen ook weten of er tenminste
// drie items erin zitten voordat we kunnen gaan winkelen.
let ingredients = ['Grated cheese', 'Spinach', 'Garlic', 'Olive oil', 'Lasagna sheets', 'Onion'];

if ((ingredients !== undefined) && (ingredients.length > 3)) {
    console.log("We can go shopping!");
}

// Wat als we de cijfers van onze leerlingen moeten indelen in onvoldoende (lager dan 5,5), voldoende (vanaf 5,5 tot en
// met 8) en goed (8 of hoger). Dan hebben we meerdere voorwaarden nodig. Vroeger deden we dit.
const grade = 8.7;

if (grade < 5.5) {
    console.log('Insufficient');
} else if ((grade >= 5.5 && grade < 8)) {
    console.log('Sufficient');
} else {
    console.log('Good');
} // geeft "Good" aan omdat geen van de bovenstaande voorwaarden op dit moment waar zijn

// Nu doen we het als volgt (beide mag, deze is leesbaarder voor dit voorbeeld).
const score = 8.7;

if (score < 5.5) {
    console.log('Insufficient');
}

if ((score >= 5.5 && score < 8)) {
    console.log('Sufficient');
}

if (score >= 8){
    console.log('Good');
}