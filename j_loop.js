// LOOP
// Looping is een functie die het mogelijk maakt een reeks instructies/functies herhaaldelijk uit te voeren terwijl een
// bepaalde voorwaarde op waar wordt beoordeeld. Bijvoorbeeld, stel dat we "Hello World" 10 keer willen afdrukken. Dit
// kan op twee manieren worden gedaan, zoals hieronder wordt getoond.

// Loop #1
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

// Loop #2
for (let i = 0; i < 10; i++) {
    console.log("Hello World Loop!");
}

// Een loop zoals loop #2 is een opeenvolging van instructies die wordt herhaald totdat een bepaalde voorwaarde is bereikt.

// Er zijn twee soorten loops:
// * Entry controlled loops: in dit type loop wordt de testvoorwaarde getest voor men de loop binnengaat. Voorbeelden zijn
// de for,- en while loop.
// * Exit controlled loops: in dit type loop wordt de testvoorwaarde getest of geëvalueerd aan het einde van de loop.
// De rest van de loop wordt minstens één keer uitgevoerd, ongeacht of de testvoorwaarde waar of onwaar is. Voorbeeld
// is de do-while loop.

// WHILE LOOP
// Een while loop is een control flow statement waarmee code herhaaldelijk kan worden uitgevoerd op basis van een gegeven
// booleaanse voorwaarde. De while loop kan worden gezien als een herhalende if-statement.

// WHILE LOOP SYNTAX
// While loop begint met het controleren van de voorwaarde. Als die geëvalueerd wordt als waar, dan worden de volgende
// statements van de loop uitgevoerd, anders wordt het eerste statement na de loop uitgevoerd.
// Zodra de voorwaarde op waar is geëvalueerd, worden de statements in de loop body uitgevoerd.
// Als de voorwaarde onwaar wordt, wordt de loop beëindigd, wat het einde van zijn levenscyclus betekent.
while (boolean condition
)
{
    loop
    statements
}

// WHILE LOOP VOORBEELD
let x = 1;

while (x <= 4) { // stoppen wanneer x groter wordt dan 4
    console.log("Value of x:" + x);
    x++; // verhoogt de waarde van x voor de volgende iteratie
}

// FOR LOOP
// De for loop biedt een beknopte manier om de lusstructuur te schrijven. In tegenstelling tot een while loop, gebruikt
// een for instructie de initialisatie, conditie en toename/afname in één regel, waardoor een kortere, gemakkelijk te
// debuggen structuur van de loop ontstaat.

// FOR LOOP SYNTAX
// initialisatie: "let i = 0;" maak een variabele die zich gedraagt als een teller en zet deze op 0.
// voorwaarde: "i < 10;" de lus blijft zich herhalen tot de teller niet meer aan de voorwaarde voldoet.
// update increment/decrement: "i++" elke keer als de lus wordt uitgevoerd wordt de teller opgehoogd.
for (initialization condition;
testing
condition;
increment / decrement
)
{
    statement(s)
}

// FOR LOOP VOORBEELD
// for loop begint als x = 2 en loopt tot x <= 4
for (let x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}

// DO WHILE LOOP
// Do while loop is vergelijkbaar met de while loop, met het enige verschil dat de voorwaarde wordt gecontroleerd na het
// uitvoeren van de statements.

// DO WHILE LOOP SYNTAX
// De do while loop begint met de uitvoering van de instructie(s). Er wordt de eerste keer geen voorwaarde gecontroleerd.
// Na de uitvoering van de verklaringen, en de update van de variabele waarde, wordt de voorwaarde gecontroleerd op waar
// of onwaar. Als de evaluatie waar is, begint de volgende iteratie van de loop.
// Als de voorwaarde onwaar wordt, wordt de loop beëindigd, wat het einde van zijn levenscyclus betekent.
// De do while loop zal zijn instructies minstens één keer uitvoeren voordat een voorwaarde wordt gecontroleerd en
// daarom een voorbeeld is van een exit control loop.
do {
    statements
}
while (condition);

// DO WHILE LOOP VOORBEELD
let x = 21;

do {
    console.log("Value of x:" + x); // deze regel wordt ook afgedrukt als de voorwaarde onwaar is
    x++;
} while (x < 20);

// INFINITE LOOP (ONEINDIGE LOOP)
// Een van de meest voorkomende fouten bij het implementeren van een loop is dat hij nooit wordt afgesloten, dat wil
// zeggen dat de loop oneindig lang doorloopt. Dit gebeurt wanneer de conditie om een of andere reden faalt.

// oneindige loop omdat voorwaarde niet geschikt is, voorwaarde had i > 0 moeten zijn
for (var i = 5; i != 0; i -= 2) {
    document.write(i);
}

var x = 5;

// oneindige loop omdat er geen update statement wordt gegeven
while (x == 5) {
    document.write("In the loop");
}