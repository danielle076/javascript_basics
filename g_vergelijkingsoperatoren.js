// Gegeven: x = 5
// == equal to voorbeeld: x == 8 false and x == 5 true
// === equal value en equal type voorbeeld: x === "5" false	and x === 5 true
// != not equal voorbeeld: x != 8 true
// !== not equal value of not equal type voorbeeld: x !== "5" true and x !== 5 false
// > greater than voorbeeld: x > 8 false
// < less than voorbeeld: x < 8 true
// >= greater than of equal to voorbeeld: x >= 8 false
// <= less than of equal to voorbeeld: x <= 8 true

// = wordt gebruikt om een waarde aan een variabele toe te kennen (geen vergelijking)
// == is een vergelijking op een waarde
// == is een vergelijking op een waarde én type

// In het volgende voorbeeld controleren we of de variabele al een waarde heeft
if (recipe !== undefined) { // als het recept al is toegewezen...
    // print dan de naam van het recept
    console.log("Today we are making the recipe: " + recipe);
} else {
    recipe = "Spinazie lasagna"; // ..en anders recept toewijzen
}

// Wanneer je een vergelijkingsoperator gebruikt, zal de terugkeerwaarde altijd waar of onwaar zijn. Je hoeft het niet
// altijd direct in een voorwaarde te zetten: je kunt de vergelijking ook in een variabele opslaan
const grade = 4;
const isPassed = grade >= 5.5;  // geeft false

console.log("Student passed: " + isPassed) // geeft "Student passed: false"