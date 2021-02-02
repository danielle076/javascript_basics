// 1. Declareer een variabele en sla er een array van vier jaren in op.
const years = [1983, 2000, 2019, 2021];
console.log(years.length); // geeft 4
console.log(years); // geeft [1983, 2000, 2019, 2021]


// 2. Declareer een variabele en sla er een array van drie van je hobby's in op.
const hobbies = ['food', 'freckle', 'programming'];
console.log(hobbies.length); // geeft 3
console.log(hobbies); // geeft ['food', 'freckle', 'programming']


// 3a. Declareer een variabele die een array bevat met de waarden 3, 4, 5, 7 en 2.
// 3b. Log de waarde 3 uit de array in de terminal.
const numbers = [3, 4, 5, 7, 2];
console.log(numbers[0]); // geeft 3
console.log(numbers[99]); // geeft undefined
console.log(numbers[numbers.length - 1]); // geeft altijd het laatste cijfer


// 4a. Declareer een variabele die een array bevat met de waarden green, yellow, red, purple, blue en orange.
// 4b. Log de waarde blue uit de array in de terminal.
// 4c. Log de waarde yellow uit de array in de terminal.
const colors = ['green', 'yellow', 'red', 'purple', 'blue', 'orange'];
console.log(colors[4]); // geeft blue
console.log(colors[1]); // geeft yellow


// 5a. Declareer een variabele die een array bevat met de waarden 21, 22, 23, 25, 25.
// 5b. Wijzig één van de items in de array, zodat de getallenreeks netjes doorloopt.
// 5c. Log de array in de terminal.
const values = [21, 22, 23, 25, 25];
values [3] = 24; // je mag getallen in een Array nieuwe waarde geven, zelfs als het een const is, maar je mag geen nieuwe array starten. Andere oplossing: je kunt het ook een let noemen
console.log(values); // geeft [ 21, 22, 23, 24, 25 ]


// 6a. Declareer een variabele die een array bevat met de waarden pastry, garlic, spinach.
// 6b. Verander vervolgens de waarde pastry in lasagna pastry.
// 6c. Log de array in de terminal.
// 6d. Log de lengte van de array in de terminal.
const ingredients = ['pastry', 'garlic', 'spinach'];
ingredients[0] = 'lasagna pastry';
console.log(ingredients); // geeft [ 'lasagna pastry', 'garlic', 'spinach' ]
console.log(ingredients.length); // geeft 3


// Gegeven 7
let names = ["Henk", "Piet", "Fred", "Joop"];

// 7. Verander de waardes van de array dat er -"je" achter iedere naam wordt geplakt.
// Wanneer je de volledige array logt zie je alle nieuwe waardes.
// Uitkomst: ["Henkje", "Pietje", "Fredje", "Joopje"]
for (let i = 0; i < names.length; i++) {
    names[i] = names[i] + "je";
}

console.log(names);


// Gegeven 8
const numbers = [2, 4, 5, 29, 38];

// 8. Verander de waardes van de array dat iedere waarde met 3 vermenigvuldigd wordt.
// Wanneer je de volledige array logt zie je alle nieuwe waardes.
// Uitkomst: [ 6, 12, 15, 87, 114 ];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 3;
}

console.log(numbers);


// Gegeven 9
const figures = [4, 6, 12, 34, 1];

// 9. Verander de waardes van de array dat er 3 bij iedere waarde wordt opgeteld.
// Wanneer je de volledige array logt zie je alle nieuwe waardes.
// Uitkomst: [ 7, 9, 15, 37, 4 ]

for (let i = 0; i < figures.length; i++) {
    figures[i] = figures[i] + 3;
}

console.log(figures);