// 1. Schrijf een functie die afhankelijk van de uitkomst van de BMI een bericht geeft (returns).
// Binnen de function code hieronder maak je de berichten.
function nameTheCalculator (weight, height) {
    return interpretation;
}
// BMI < 18.5 de output moet zijn: "Uw BMI is <bmi>, dus u heeft ondergewicht."
// BMI 18.5 - 24.9 de output zou moeten zijn: "Uw BMI is <bmi>, dus u heeft een normaal gewicht."
// BMI = gewicht (kg) / lengte2 (m2)
function bmiCalculator (weight, height) {

    let bmi = weight / (height * height);
    let interpretation = "";

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight." ;
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
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
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