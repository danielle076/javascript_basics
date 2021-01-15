// 1. Create a for-loop that logs 3 times "Hooray!" into the console.
for (let i = 0; i < 3; i++) {
    console.log('Hooray!');
}

// 2. Create a for-loop that runs from 0 to 9 and logs the numbers 0 to 9.
// However, starting with the number 3, there will be a > in front of each number.
// Starting with the number 6, there will be >> in front of each number. Gives:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
for (let i = 0; i < 10; i++) {
    if (i <= 2) {
        console.log(i);
    } else if(i <=5){
        console.log('> ' + i);
    } else{
        console.log('>> '+i);
    }
}

// 3. Create a for-loop that runs from 0 to 15. For each number, the console logs whether the number is even or odd. Gives:
// 0 is even
// 1 is odd
// 2 is even
// ....
// 15 is odd
// Tip: a number is odd if you divide it by 2 and something remains. A number is even if you divide it by 2 and nothing remains.
// There is a special operator for this
for (let i = 0; i < 16; i++) {
    if(i % 2 === 1){
        console.log(i+ ' is odd')
    } else {
        console.log(i + ' even')
    }
}