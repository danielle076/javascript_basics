// 1. Declare a variable and store the result of the equation "Is 10 greater than 20?" in it.
const biggerThan = 10 > 20;
console.log(biggerThan); // gives false

// 2. Declare a variable and store the result of the equation "Is 10 unequal to 11?" in it.
const equalNumbers = 10 !== 11;
console.log(equalNumbers); // gives true

// 3. Declare a variable and store in it whether the words 'sweet' and 'juicy' are the same.
const sameWord = 'sweet' === 'juicy';
console.log(sameWord); // gives false

// 4a. Declare a variable and store the report grade 9 in it.
// 4b. Write a script that checks if the report grade is greater than 8. If it is, log "Cum laude!" in the console.
const grade = 9;
if (grade > 8) {
    console.log('Cum laude!'); // gives 'Cum laude!'
}

// 5a. Use the variables isRaining and temperature below.
// 5b. Write a script that logs "You can wear shorts!" when it is not raining AND the temperature is higher than 21 degrees.
// 5c. Log "Put on a coat!" When it is raining OR colder than 12 degrees.
// Tip: manually change the value of isRaining and temperature for a moment to see if your 2nd condition is correct.
const isRaining = false;
const temperature = 11;

if (!isRaining && temperature > 21) {
    console.log('You can wear shorts!');
}

if (isRaining || temperature < 12) {
    console.log('Put on a coat!');
}