// CONDITIONELE VERKLARINGEN
// Conditionele verklaringen worden gebruikt om verschillende acties uit te voeren op basis van verschillende voorwaarden.
// * if
// * if-else
// * if-else-if
// * geneste-if
// * switch

// IF
// De if-statement wordt gebruikt om te beslissen of een bepaalde verklaring of een bepaald blok van verklaringen wordt
// uitgevoerd of niet, d.w.z. als een bepaalde voorwaarde waar is, wordt een blok van verklaringen uitgevoerd, anders niet.

// IF SYNTAX
if (condition) {
    // blok code dat wordt uitgevoerd als de voorwaarde waar is
}

// VOORBEELD IF
let hour = 16;

if (hour < 18) {
    console.log("Good day");
}

// IF-ELSE
// Het if-statement alleen vertelt ons dat als een voorwaarde waar is het een blok van statements zal uitvoeren
// en als de voorwaarde niet waar is niet. Als we iets anders willen doen wanneer de voorwaarde onwaar is, gebruiken we
// het else-statement. We kunnen het else-statement gebruiken met het if-statement om een blok code uit te voeren
// als de voorwaarde niet waar is.

// IF-ELSE SYNTAX
if (condition) {
    // blok code dat wordt uitgevoerd als de voorwaarde waar is
} else {
    // blok code dat wordt uitgevoerd als de voorwaarde niet waar is
}

// VOORBEELD IF-ELSE
let grade = 6.0;

if (grade >= 5.5) {
    console.log("Je hebt het gehaald!"); // het eerste blok wordt uitgevoerd als de voorwaarde waar is
} else {
    console.log("Je hebt het niet gehaald.."); // het tweede blok wordt uitgevoerd als de voorwaarde niet waar is
}

// IF-ELSE-IF
// De if-statements worden van boven naar beneden uitgevoerd. Zodra één van de voorwaarden van een if waar is, wordt de
// verklaring uitgevoerd die bij die if hoort en wordt de rest overgeslagen. Als geen van de voorwaarden waar zijn, dan
// wordt de laatste else-statement uitgevoerd.

// IF-ELSE-IF SYNTAX
if (condition)
    console.log("statement");
else if (condition)
    console.log("statement");
else if (condition)
    console.log("statement")
else
    console.log("statement");

// VOORBEELD IF-ELSE-IF
let i = 20;

if (i == 10)
    console.log("i is 10");
else if (i == 15)
    console.log("i is 15");
else if (i == 20)
    console.log("i is 20")
else
    console.log("i is not present");

// GENESTE-IF
// Een geneste-if is een if-instructie die het doel is van een andere if of else. Geneste if-statements betekent een if-
// statement binnen een if-statement.

// GENESTE-IF SYNTAX
if (condition1)
{
    // blok code dat wordt uitgevoerd als condition1 waar is
    if (condition2)
    {
        // blok code dat wordt uitgevoerd als condition1 en 2 waar zijn
    }
}

// VOORBEELD GENESTE-IF
let j = 10;

if (j == 10) {

    // eerste if-statement
    if (j < 15)
        console.log("j is smaller than 15");

    //  geneste-if wordt alleen uitgevoerd als statement erboven waar is
    if (j < 12)
        console.log("j is smaller than 12 too");
    else
    console.log("j is greater than 15")
}

// SWITCH
// Gebruik de switch-statement een van de vele codeblokken te selecteren die moeten worden uitgevoerd.

// SWITCH SYNTAX
// De switch expression wordt eenmaal geëvalueerd.
// Expression kunnen getallen of strings zijn.
// De value van de expression wordt vergeleken met de waarden van elke case.
// Als er een overeenkomst is, wordt het bijbehorende codeblok uitgevoerd.
// Als er geen overeenkomst is, wordt het default codeblok uitgevoerd.
// Break wordt binnen de switch gebruikt om een reeks instructies te beëindigen.
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    case valueEtc:
        statementEtc;
        break;
    default:
        statementDefault;
}

// VOORBEELD SWITCH
let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log("What day is it today:", day);

// VOORBEELD SWITCH DEZELFDE CODE
let text;
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}

console.log("Text:", text);