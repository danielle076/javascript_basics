// 1. Maak een prompt waar de gebruiker een lange string kan invoeren, zoals een paragraaf tekst van een blog post. Je
// geeft aan hoeveel karakters hij heeft geschreven en ook hoeveel karakters hij nog over heeft van de 140 karakters.
// De output die je zou moeten krijgen is bijvoorbeeld "Je hebt 182 tekens geschreven, je hebt -42 tekens over".

const tweet = prompt("Compose your tweet");
const tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.")

// Korte versie
const tweet = prompt("Compose your tweet");
alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.")
