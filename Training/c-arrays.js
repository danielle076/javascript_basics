// 1. Declare a variable and store an array of four years in it.
const years = [1983, 2000, 2019, 2021];
console.log(years.length); // gives 4
console.log(years); // gives [1983, 2000, 2019, 2021]

// 2. Declare a variable and store an array of three of your hobbies in it.
const hobbies = ['food', 'freckle', 'programming'];
console.log(hobbies.length); // gives 3
console.log(hobbies); // gives ['food', 'freckle', 'programming']

// 3a. Declare a variable containing an array with the values 3, 4, 5, 7 and 2.
// 3b. Log the value 3 from the array in the terminal.
const numbers = [3, 4, 5, 7, 2];
console.log(numbers[0]); // gives 3
console.log(numbers[99]); // gives undefined
console.log(numbers[numbers.length - 1]); // always gives last digit

// 4a. Declare a variable containing an array with the values green, yellow, red, purple, blue and orange.
// 4b. Log the value blue from the array into the terminal.
// 4c. Log the value yellow from the array in the terminal.
const colors = ['green', 'yellow', 'red', 'purple', 'blue', 'orange'];
console.log(colors[4]); // gives blue
console.log(colors[1]); // gives yellow

// 5a. Declare a variable containing an array with the values 21, 22, 23, 25, 25.
// 5b. Modify one of the items in the array so that the number sequence continues neatly.
// 5c. Log the array in the terminal.
const values = [21, 22, 23, 25, 25];
values [3] = 24; // you may give numbers in an Array new value even if it is a const, you may not start a new array. You can also call it a let
console.log(values); // gives [ 21, 22, 23, 24, 25 ]

// 6a. Declare a variable containing an array with the values puff pastry, garlic, spinach.
// 6b. Then change the value puff pastry to lasagna sheets.
// 6c. Log the array into the terminal.
// 6d. Log the length of the array in the terminal.
const ingredients = ['pastry', 'garlic', 'spinach'];
ingredients[0] = 'lasagna pastry';
console.log(ingredients); // gives [ 'lasagna pastry', 'garlic', 'spinach' ]
console.log(ingredients.length); // gives 3