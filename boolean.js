// boolean: truthy (kind-of-true) and falsy (kind-of-not-true)

// The following values are converted to a truthy value in a comparison:
// if ('hello') {} // a string value
// if ('false') {} // a string value containing the word 'false'
// if (1) {} // a numeric value that is not 0
// if ([]) {} // an empty array
// if ({}) {} // an empty object
// if (function(){}) {} // an empty function

// The following values are converted to a falsy value in a comparison:
// if (0) {} // the number zero
// if ('') {} // or "" (an empty string)
// if (null) {} // the empty value null
// if (undefined) {} // unassigned value
// if (NaN) {} // Not A Number

const bigger = 2 > 4;
// this:
if(!bigger) {}
// instead of this:
if(bigger === false) {}

const ingredients = ["Garlic", "Onion", "Grated cheese"];
// this:
if (!ingredients) {}
// instead of this:
if (ingredients === undefined) {}
