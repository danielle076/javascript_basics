// 1. Maak een prompt waar de gebruiker een lange string kan invoeren, zoals een paragraaf tekst van een blog post. Je
// geeft aan hoeveel karakters hij heeft geschreven en ook hoeveel karakters hij nog over heeft van de 140 karakters.
// De output die je zou moeten krijgen is bijvoorbeeld "Je hebt 182 tekens geschreven, je hebt -42 tekens over".

const tweet = prompt("Compose your tweet");
const tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.")

// Korte versie
const tweet = prompt("Compose your tweet");
alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.")

// 2. Maak een prompt waar de gebruiker een lange string kan invoeren, zoals een paragraaf tekst van een blog post. De
// gebruiker mag niet meer dan 140 karakters schrijven. Zodra hij aan de 140 karakters zit, snij je de rest van het
// bericht eraf
const tweet = prompt("Compose your tweet");
const tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

// Korte versie
alert(prompt("Compose your tweet").slice(0,140));