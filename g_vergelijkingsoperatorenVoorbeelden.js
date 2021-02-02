// 1. Declareer een variabele en sla het resultaat van de vergelijking "Is 10 groter dan 20?" erin op.
const biggerThan = 10 > 20;
console.log(biggerThan); // geeft false

// 2. Declareer een variabele en sla er het resultaat van de vergelijking "Is 10 ongelijk aan 11?" in op.
const equalNumbers = 10 !== 11;
console.log(equalNumbers); // geeft true

// 3. Declareer een variabele en sla daarin op of de woorden "zoet" en "sappig" hetzelfde zijn.
const sameWord = "sweet" === "juicy";
console.log(sameWord); // geeft false

// 4a. Declareer een variabele en sla daarin het rapportcijfer 9 op.
// 4b. Schrijf een script dat controleert of het rapportcijfer hoger is dan 8. Als dat zo is, log dan "Cum laude!" in de console.
const grade = 9;
if (grade > 8) {
    console.log("Cum laude!"); // geeft 'Cum laude!'
}

// 5a. Gebruik de variabelen isRaining en temperature hieronder.
// 5b. Schrijf een script dat logt "You can wear shorts!" wanneer het niet regent EN de temperatuur hoger is dan 21 graden.
// 5c. Log "Put on a coat!" Wanneer het regent OF kouder is dan 12 graden.
// Tip: verander de waarde van isRaining en de temperature handmatig om te zien of je 2e voorwaarde klopt.
const isRaining = false;
const temperature = 11;

if (!isRaining && temperature > 21) {
    console.log("You can wear shorts!");
}

if (isRaining || temperature < 12) {
    console.log("Put on a coat!");
}