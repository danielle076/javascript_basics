// If we know how many times we want to repeat something we can use a for-loop
// In a for-loop, the code is executed repeatedly until the condition is no longer true

// initialization: "let i = 0;" create a variable that behaves as a counter and set it to 0
// condition: "i < 10;" the loop keeps repeating until the counter does not meet the condition anymore
// update: "i++" every time the loop is executed the counter is incremented

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// In the above example, the console.log() will be called 10 times. This is because a for loop uses a counter as a
// condition and this is incremented and rechecked every 'loop'

// In addition to for-loops, there are also while- and do-while-loops. But these variants are almost never used