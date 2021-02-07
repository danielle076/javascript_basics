// ARRAY
// Een array is een speciale variabele, die meer dan één waarde tegelijk kan bevatten.
// Een array wordt gebruikt om verschillende elementen in op te slaan. Het wordt vaak gebruikt wanneer we een lijst van
// elementen willen opslaan en ze willen benaderen met een enkele variabele.
// Arrays zijn handig als je niet precies weet hoeveel items je nodig zult hebben, omdat je dat niet hoeft te specificeren.

// ARRAY SYNTAX
// const array_name = [item1, item2, ...];

// ARRAY EXAMPLE #1: WAARDEN TOEKENNEN
// Door gebruik te maken van het keyword "new" kun je een array maken.
const chocolate = new Array("KitKat", "MilkyWay", "M&M's");

// ARRAY EXAMPLE #2: WAARDEN TOEKENNEN BEST PRACTICE
// Beste manier om een array aan te maken is als volgt.
const chocolates = ["KitKat", "MilkyWay", "M&M's"];

const chocolata = [
    "KitKat",
    "MilkyWay",
    "M&M's"
];

// TOEGANG TOT DE ELEMENTEN
// Je krijgt toegang tot een array element door te verwijzen naar het indexnummer.
// Dit voorbeeld geeft toegang tot de waarde van het eerste element in chocolates.
const name = chocolates[0];
console.log(name); // geeft KitKat

// ELEMENT WIJZIGEN
// Dit verandert de waarde van het tweede element in chocolates.
chocolates[1] = "Verkade";
console.log(chocolates[1]); // geeft Verkade i.p.v. MilkyWay

// VOLLEDIGE ARRAY BENADEREN
// Je kan de volledige array benaderen door te verwijzen naar de naam van de array: chocolates.
console.log(chocolates); // geeft [ 'KitKat', 'Verkade', "M&M's" ]

// LENGTH() METHOD
// De lengte property geeft het aantal elementen.
const giveLength = chocolates.length;
console.log(giveLength); // geeft 3

// TOEGANG TOT HET EERSTE ELEMENT
fruits = ["Banana", "Orange", "Apple", "Mango"];
const first = fruits[0];
console.log(first); // geeft Banana

// TOEGANG TOT HET LAATSTE ELEMENT
fruits = ["Banana", "Orange", "Apple", "Mango"];
const last = fruits[fruits.length -1];
console.log(last); // geeft Mango

// TOEGANG TOT HET EEN NA LAATSTE ELEMENT
fruits = ["Banana", "Orange", "Apple", "Mango"];
const oneLast = fruits[fruits.length -2];
console.log(oneLast); // geeft Apple

// EEN ARRAY KAN VERSCHILLENDE ELEMENTEN BEVATTEN
// Opslaan van getallen, boolean en strings.
const choco = ["Verkade", 350, "M&M's", -680, true];
console.log(choco); // geeft [ 'Verkade', 350, "M&M's", -680, true ]

// VOORBEELD LASAGNE INGREDIENTS
let lasagneIngredients = ['Grated cheese', 'Spinach', 'Garlic', 'Olive oil', 'Lasagna sheets', 'Onion']; // array

console.log(lasagneIngredients[2]); // geeft "Garlic"
console.log(lasagneIngredients[0]); // geeft "Grated cheese"

console.log(lasagneIngredients.length) // geeft 6

// Element wijzigen: in plaats van olive oil moet het coconut oil zijn
lasagneIngredients[3] = "Coconut oil";

console.log(lasagneIngredients[3]); // geeft "Coconut oil"