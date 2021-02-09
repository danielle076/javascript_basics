// 1. Maak een for-loop die 3 keer "Hooray!" logt in de console.
for (let i = 0; i < 3; i++) {
    console.log('Hooray!');
}


// 2. Maak een for-loop die loopt van 0 tot 9 en logt de getallen 0 tot 9.
// Echter, beginnend met het getal 3, zal er een > voor elk getal staan.
// Beginnend met het getal 6, komt er >> voor elk getal. Geeft:
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


// 3. Maak een for-loop die loopt van 0 tot 15. Voor elk getal, logt de console of het even of oneven is. Geeft:
// 0 is even
// 1 is oneven
// 2 is even
// ....
// 15 is oneven
// Tip: een getal is oneven als je het deelt door 2 en er blijft iets over. Een getal is even als je het deelt door 2 en
// er blijft niets over.
for (let i = 0; i < 16; i++) {
    if(i % 2 === 1){
        console.log(i+ ' is odd')
    } else {
        console.log(i + ' even')
    }
}


// 4. Schrijf een while loop voor een songtekst. Het liedje heet "99 flessen bier" en gaat als volgt: "99 flessen bier
// aan de muur, 99 flessen bier. Haal er één af en geef het door, 98 flessen bier aan de muur.
// Je ziet dat het aantal flessen bier naar beneden gaat tot er geen bier meer is.
let numberOfBottles = 99

while (numberOfBottles >= 0) {
    let bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// 5. Schrijf een programma dat de getallen van 1 tot 100 afdrukt. Voor veelvouden van drie print je "Fizz" in plaats
// van het getal en voor de veelvouden van vijf print je "Buzz". Voor getallen die veelvouden zijn van zowel drie als
// vijf, bijvoorbeeld vijftien, print "FizzBuzz" in plaats van het getal.
// Maak gebruik van de while loop.
let count = 1;

while(count <= 100) {
    let output = [];

    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0){
        output.push("Fizz");
    } else if (count % 5 === 0){
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}


// 6. Schrijf een programma dat de getallen van 1 tot 100 afdrukt. Voor veelvouden van drie print je "Fizz" in plaats
// van het getal en voor de veelvouden van vijf print je "Buzz". Voor getallen die veelvouden zijn van zowel drie als
// vijf, bijvoorbeeld vijftien, print "FizzBuzz" in plaats van het getal.
// Maak gebruik van de for loop.
for (let count = 1; count <= 100; count++) {
    let output = [];

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    console.log(output);
}