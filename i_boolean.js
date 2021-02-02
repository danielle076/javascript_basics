// boolean: truthy (soort-van-waar) en falsy (soort-van-niet-waar)

// De volgende waarden worden geconverteerd naar een truthy waarde in een vergelijking:
// if ('hello') {} // een string-waarde
// if ('false') {} // een string-waarde die het woord 'false' bevat
// if (1) {} // een numerieke waarde die niet 0 is
// if ([]) {} // een lege array
// if ({}) {} // een leeg object
// if (functie(){}) {} // een lege functie

// De volgende waarden worden in een vergelijking geconverteerd naar een falsy waarde:
// if (0) {} // het getal nul
// if ('') {} // of "" (een lege string)
// if (null) {} // de lege waarde null
// if (undefined) {} // niet-toegewezen waarde
// if (NaN) {} // Not a Number

const bigger = 2 > 4;
// dit
if(!bigger) {}
// in plaats van dit
if(bigger === false) {}

const ingredients = ["Garlic", "Onion", "Grated cheese"];
// dit
if (!ingredients) {}
// in plaats van dit
if (ingredients === undefined) {}
