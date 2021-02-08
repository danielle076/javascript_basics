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