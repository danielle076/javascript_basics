// 1. Schrijf een functie die afhankelijk van de uitkomst van de BMI een bericht geeft (returns).
// Binnen de function code hieronder maak je de berichten.
function nameTheCalculator(weight, height) {
    return interpretation;
}

// BMI < 18.5 de output moet zijn: "Uw BMI is <bmi>, dus u heeft ondergewicht."
// BMI 18.5 - 24.9 de output zou moeten zijn: "Uw BMI is <bmi>, dus u heeft een normaal gewicht."
// BMI = gewicht (kg) / lengte2 (m2)
function bmiCalculator(weight, height) {

    let bmi = weight / (height * height);
    let interpretation = "";

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return interpretation;
}

console.log(bmiCalculator(72, 1.69));


// 2. Schrijf een programma dat uitrekent of een bepaald jaar een schrikkeljaar is. Een normaal jaar heeft 365 dagen,
// schrikkeljaren hebben er 366, met een extra dag in februari.
// Binnen de function code hieronder maak je de berekeningen.
function nameSchrikkeljaar(jaar) {

}

// Zo kun je uitrekenen of een bepaald jaar een schrikkeljaar is:
// Een jaar is een schrikkeljaar als het gelijkelijk deelbaar is door 4;
// Behalve als dat jaar ook deelbaar is door 100;
// Tenzij dat jaar ook deelbaar is door 400.
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year."
        }
    } else {
        return "No leap year."
    }
}

console.log(isLeap(2001));


// 3. Schrijf een switch statement die de variabele errorCode en de bijbehorende error message in de console logt.
// errorCode is altijd een cijfer tussen de 0 en de 4 en heeft de volgende betekenis:
// 0: "Geen watertoevoer"
// 1: "Temperatuur te laag"
// 2: "Koffiebonen op"
// 3: "Afvalbak vol"
// 4: "Geen druk"
// Uitkomst:
// errorCode = 0 geeft "Geen watertoevoer"
// errorCode = 4 geeft "Geen druk"
errorCode = 0; // geeft Geen watertoevoer

switch (errorCode) {
    case 0:
        console.log("Geen watertoevoer");
        break;
    case 1:
        console.log("Temperatuur te laag");
        break;
    case 2:
        console.log("Koffiebonen op");
        break;
    case 3:
        console.log("Afvalbak vol");
        break;
    case 4:
        console.log("Geen druk");
        break;
    default:
        console.log("Error code niet bekend");
}


// 4. Schrijf de volgende functie if-statement om naar een functie met een switch statement.
// function monitorHeartrate(color) {
//   if (color === "green") {
//     return "Hartslag stabiel"
//   }
//
//   if (color === "yellow") {
//     return "Hartslag verhoogd"
//   }
//
//   if (color === "red" || color === "orange") {
//     return "Kritieke hartslag, actie vereist!"
//   }
//
//   return "Status hartslag onbekend";
// }
//
// const heartrateState = monitorHeartrate("red");
// console.log(heartrateState); // geeft "Kritieke hartslag, actie vereist!"

function monitorHeartrate(color) {
    switch(color) {
        case "green":
            return "Hartslag stabiel"
        case "yellow":
            return "Hartslag verhoogd"
        case "orange":
        case "red":
            return "Kritieke hartslag, actie vereist!"
        default:
            return "Status hartslag onbekend";
    }
}

const heartrateState = monitorHeartrate("orange");
console.log(heartrateState); // geeft Kritieke hartslag, actie vereist!


// 5. Schrijf een functie calculate die de parameters a, b en operator verwacht. Parameters a en b zijn altijd cijfers.
// Als de string 'add' als operator wordt meegegeven, telt de functie a en b bij elkaar op en geeft dat terug
// Als de string 'subtract' als operator wordt meegegeven, trekt de functie a en b van elkaar af en geeft dat terug
// Als de string 'multiply' als operator wordt meegegeven, vermenigvuldigd de functie a en b met elkaar en geeft dat terug
// Als de string 'divide' als operator wordt meegegeven, deelt de functie a door b en geeft dat terug
// Uitkomst:
// calculate(3, 4, 'add') geeft 7
// calculate(5, 7, 'subtract') geeft -2
// calculate(25, 5, 'divide') geeft 5
function calculate(a, b, operator) {
    switch (operator) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return "Onbekend";
    }
}

console.log(calculate(3, 4, "add")); // geeft 7
console.log(calculate(5, 7, "subtract")); // geeft -2
console.log(calculate(25, 5, "divide")); // geeft 5
console.log(calculate(10,2, "something")); // geeft Onbekend