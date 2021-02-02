// Gegeven: x = 6 en y = 3
// && AND voorbeeld: (x < 10 && y > 1) is waar
// || OR voorbeeld: (x === 5 || y == 5) is onwaar
// ! NOT voorbeeld: !(x === y) is waar

// Stel dat we willen controleren of onze ingrediënten array al toegewezen is, maar we willen ook weten of er tenminste
// drie items erin zitten voordat we kunnen gaan winkelen.
let ingredients = ['Grated cheese', 'Spinach', 'Garlic', 'Olive oil', 'Lasagna sheets', 'Onion'];

if ((ingredients !== undefined) && (ingredients.length > 3)) {
    console.log("We can go shopping!");
}

// Wat als we de cijfers van onze leerlingen moesten indelen in onvoldoende (lager dan 5,5), voldoende (vanaf 5,5 tot en
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
const grade = 8.7;

if (grade < 5.5) {
    console.log('Insufficient');
}

if ((grade >= 5.5 && grade < 8)) {
    console.log('Sufficient');
}

if (grade >= 8){
    console.log('Good');
}