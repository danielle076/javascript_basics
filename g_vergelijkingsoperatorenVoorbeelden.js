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

// 6. Hieronder zie je twee prompts waarbij een naam wordt gevraagd. Na het invoeren van twee namen wordt een percentage
// tussen de 1 en 100 berekend en teruggeven aan de gebruiker.
prompt("what is your name?");
prompt("what is their name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
// Schrijf een code waarbij je berichten kan sturen naar de mensen die de volgende scores krijgen:
// Meer dan 70 geeft bericht "You love each other like Kanye loves Kanye."
// Tussen de 30 en 70 geeft alleen de score als bericht
// Onder de 30 "You go together like oil and water."
if (loveScore > 70){
    alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
}

if (loveScore > 30 && loveScore <= 70){
    alert("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + " You go together like oil and water.");
}