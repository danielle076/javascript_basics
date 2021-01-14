// + Adds together two values x + y
// - Subtracts one value from another x - y
// * Multiplies two values x * y
// / Divides one value by another x / y
// % Returns the division remainder x % y
// ++ Increases the value of a variable by 1 ++x
// -- Decreases the value of a variable by 1 --x
const total = 2 + 4 * 10 // gives 42 and not 60

// JavaScript is a loosely typed language: its variables are not directly associated with a particular data type
let banana = 42 // banana is now a number
banana = "geel" // banana has now become a string
banana = true // banaan has now become a boolean

2 + 2 // gives 4
"2" + 2 // gives 22
"2" + "2" - 6 // gives 16
// The + operator is the only operator you can apply to textual values (strings). When we try to add a string and
// a "non-string", JavaScript will first convert all non-string values to strings. Next, all strings will be glued
// together ("2" + 2 = "22"). All values that are not numbers are automatically converted to numbers and JavaScript
// tries to "make the best of it": "2" + "2" = "22" and "22" - 6 = 16.

const houseNumber = 12;
const street = "Prinsenlaan ";
const address = street + houseNumber; // gives “Prinsenlaan 12”

const score1 = "seven";
const score2 = "four";
const total = score1 * score2; // gives NaN (Not A Number) because you can't convert "seven" and "four" to a number

console.log(address);
console.log(total);