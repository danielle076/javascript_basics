// Array is a structural data type
// An array does not store a single value, but an entire list of values
// Arrays are useful if you don't know exactly how many items you're going to need, because you don't have to specify it

let lasagneIngredients = ['Grated cheese', 'Spinach', 'Garlic', 'Olive oil', 'Lasagna sheets', 'Onion'];

console.log(lasagneIngredients[2]); // gives "Garlic"
console.log(lasagneIngredients[0]); // gives "Grated cheese"

console.log(lasagneIngredients.length) // gives 6

// Overwriting values: instead of olive oil it should be coconut oil
lasagneIngredients[3] = "Coconut oil";

console.log(lasagneIngredients[3]); // gives "Coconut oil"