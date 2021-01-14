// Given: x = 5
// == equal to example: x == 8 false and x == 5 true
// === equal value and equal type example: x === "5" false	and x === 5 true
// != not equal example: x != 8 true
// !== not equal value or not equal type example: x !== "5" true and x !== 5 false
// > greater than example: x > 8 false
// < less than example: x < 8 true
// >= greater than or equal to example: x >= 8 false
// <= less than or equal to example: x <= 8 true

// = is used to assign a value to a variable (not a comparison)
// == is a comparison on value
// == is a comparison on value ánd type

// In the following example, we check whether the variable already has a value
if (recipe !== undefined) { // if recipe is already assigned...
    // print dan de naam van het recept
    console.log("Today we are making the recipe: " + recipe);
} else {
    recipe = "Spinazie lasagna"; // ..and otherwise assign recipe
}

// When using a comparison operator, the return value will always be true or false. You don't always have to put it
// directly inside a condition: you can also store the comparison in a variable:
const grade = 4;
const isPassed = grade >= 5.5;  // gives false

console.log("Student passed: " + isPassed) // gives "Student passed: false"