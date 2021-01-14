// Before we can use variables we must first announce that we want to use them. This is done by creating a
// variable and giving it a name. This is called declaring:
const quantity;

// By the designation we use (const), the computer understands that we are talking about a variable. We can
// store a value in it. This is called assigning a value:
quantity = 3;

// Checklist for variable names:
// The name always starts with a letter, dollar sign ($) or a dash (_). It should never start with a number
// The name may only contain letters, numbers, a dollar sign ($) or a dash (_). You cannot use a dash (-), spaces or dots (.)
// You cannot use a keyword or reserved keyword. Examples are class, new, break or catch
// Variables are case sensitive and by convention never start with a capital letter
// Use logical and descriptive names for your variables that make it clear what kind of value they contain. numberOfPatients is much more descriptive than number
// If the name of your variable consists of more than one word, use a capital letter for each additional word (camelCase)

// In JavaScript, you can declare two types of variables:
// let: when the value needs to be reassigned several times within one iteration of the script
// const: the value is assigned only once per iteration
// Before 2015, using the var keyword was the only way to declare a JavaScript variable

let greeter = "Hoihoi!";

greeter = "Hallo allemaal!";

console.log(greeter); // geeft “Hallo allemaal!”

const greeter = "Hoihoi!";

greeter = "Hallo allemaal!";

console.log(greeter); // geeft “TypeError: Assignment to constant variable.”