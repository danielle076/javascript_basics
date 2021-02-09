// 1. Maak een prompt waar de gebruiker een lange string kan invoeren, zoals een paragraaf tekst van een blog post. Je
// geeft aan hoeveel karakters hij heeft geschreven en ook hoeveel karakters hij nog over heeft van de 140 karakters.
// De output die je zou moeten krijgen is bijvoorbeeld "Je hebt 182 tekens geschreven, je hebt -42 tekens over".

const tweet1 = prompt("Compose your tweet");
const tweetCount = tweet1.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.")

// Korte versie
const tweet2 = prompt("Compose your tweet");
alert("You have written " + tweet2.length + " characters, you have " + (140 - tweet2.length) + " characters remaining.")


// 2. Maak een prompt waar de gebruiker een lange string kan invoeren, zoals een paragraaf tekst van een blog post. De
// gebruiker mag niet meer dan 140 karakters schrijven. Zodra hij aan de 140 karakters zit, snij je de rest van het
// bericht eraf
const tweet3 = prompt("Compose your tweet");
const tweetUnder140 = tweet3.slice(0,140);
alert(tweetUnder140);

// Korte versie
alert(prompt("Compose your tweet").slice(0,140));


// 3. Maak een prompt die de gebruiker vraagt naar hun naam. Als ze een naam geven die een hoofdletter of kleine letter is,
// moet je een alert te sturen dat zegt Hello, en dan hun naam, maar de eerste letter van de naam moet een hoofdletter zijn.
let name = prompt("Whats your name?");
let firstChar = name.slice(0,1);
let upperCaseFirstChar = firstChar.toUpperCase();
let restOfName = name.slice(1,name.length);
let fullName = upperCaseFirstChar + restOfName;
alert("Hello, " + fullName);


// 4. Maak een prompt die de gebruiker vraagt naar hun naam. Als ze een naam geven die een hoofdletter of kleine letter is,
// moet je een alert te sturen dat zegt Hello, en dan hun naam, maar de eerste letter van de naam moet een hoofdletter zijn.
// Wanneer de gebruiker hun naam als "daNIElle" heeft geschreven moet je in je alert "Danielle" teruggeven.
let name2 = prompt("Whats your name?");
let firstChar2 = name2.slice(0,1);
let upperCaseFirstChar2 = firstChar2.toUpperCase();
let restOfName2 = name2.slice(1,name2.length);
restOfName2 = restOfName2.toLowerCase();
let fullName2 = upperCaseFirstChar2 + restOfName2;
alert("Hello, " + fullName2);