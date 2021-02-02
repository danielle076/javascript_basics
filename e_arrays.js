// Array is een structureel gegevenstype
// Een array slaat niet één enkele waarde op, maar een hele lijst van waarden
// Arrays zijn handig als je niet precies weet hoeveel items je nodig zult hebben, omdat je dat niet hoeft te specificeren

let lasagneIngredients = ['Grated cheese', 'Spinach', 'Garlic', 'Olive oil', 'Lasagna sheets', 'Onion'];

console.log(lasagneIngredients[2]); // geeft "Garlic"
console.log(lasagneIngredients[0]); // geeft "Grated cheese"

console.log(lasagneIngredients.length) // geeft 6

// Overschrijven van waarden: in plaats van olive oil moet het coconut oil zijn
lasagneIngredients[3] = "Coconut oil";

console.log(lasagneIngredients[3]); // geeft "Coconut oil"