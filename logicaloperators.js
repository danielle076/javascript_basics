// Given: x = 6 and y = 3
// && AND example: (x < 10 && y > 1) is true
// || OR example: (x === 5 || y === 5) is false
// ! NOT example: !(x === y) is true

// Suppose we want to check if our ingredient array is already allocated, but we also want to know if there are at least three
// items are in it before we can start shopping
let ingredients = ['Grated cheese', 'Spinach', 'Garlic', 'Olive oil', 'Lasagna sheets', 'Onion'];

if ((ingredients !== undefined) && (ingredients.length > 3)) {
    console.log("We can go shopping!");
}

// What if we had to classify our students' grades into failing (below 5.5), passing (from 5.5 and up to 8)
// and good (8 or higher). Then we need multiple conditions. We used to do:
const grade = 8.7;

if (grade < 5.5) {
    console.log('Insufficient');
} else if ((grade >= 5.5 && grade < 8)) {
    console.log('Sufficient');
} else {
    console.log('Good');
} // indicates "Good" because none of the above conditions are true at this time

// But now we use:
const grade = 8.7;

if (grade < 5.5) {
    console.log('Insufficient');
}

if ((grade >= 5.5 && grade < 8)) {
    console.log('Sufficient');
}

if (grade >= 8){
    console.log('Good');
}

