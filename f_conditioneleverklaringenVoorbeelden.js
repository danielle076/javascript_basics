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

// 3. Schrijf een while loop voor een songtekst. Het liedje heet "99 flessen bier" en gaat als volgt: "99 flessen bier
// aan de muur, 99 flessen bier. Haal er één af en geef het door, 98 flessen bier aan de muur.
// Je ziet dat het aantal flessen bier naar beneden gaat tot er geen bier meer is.
let numberOfBottles = 99

while (numberOfBottles >= 0) {
    let bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// 4. Schrijf een programma dat de getallen van 1 tot 100 afdrukt. Voor veelvouden van drie print je "Fizz" in plaats
// van het getal en voor de veelvouden van vijf print je "Buzz". Voor getallen die veelvouden zijn van zowel drie als
// vijf, bijvoorbeeld vijftien, print "FizzBuzz" in plaats van het getal.
// Maak gebruik van de while loop.
let count = 1;

while(count <= 100) {
    let output = [];

    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0){
        output.push("Fizz");
    } else if (count % 5 === 0){
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}