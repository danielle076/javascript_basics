// VARIABLES
// Variabelen zijn containers die herbruikbare gegevens bevatten. Het is de basiseenheid van opslag in een programma.
// De waarde die in een variabele is opgeslagen, kan tijdens de uitvoering van het programma worden gewijzigd.
// Een variabele is slechts een naam die aan een geheugenplaats wordt gegeven, alle bewerkingen die op de variabele
// worden uitgevoerd hebben effect op die geheugenplaats.

// Voordat we variabelen kunnen gebruiken, moeten we eerst aankondigen dat we ze willen gebruiken. Dit wordt gedaan door
// een variabele aan te maken en deze een naam te geven. Dit heet declareren.
let example;

// Door de aanduiding die we gebruiken (let), begrijpt de computer dat we het over een variabele hebben. We kunnen
// er een waarde in opslaan. Dit wordt het toewijzen van een waarde genoemd.
example = 3;

// We kunnen de variabelen initialiseren op het moment van declaratie of ook later wanneer we ze willen gebruiken. Hieronder
// staan enkele voorbeelden van het declareren en initialiseren van variabelen in JavaScript.

var name; // declaratie van een enkele variabele

var person, title, num; // meerdere variabelen declareren

var anotherName = "Danielle";
anotherName = "Freckle"; // overschrijven van variabele Danielle naar Freckle

// Checklist voor variabele namen:
// De naam begint altijd met een letter, dollarteken ($) of een streepje (_). Hij mag nooit met een getal beginnen.
// De naam mag alleen letters, cijfers, een dollarteken ($) of een streepje (_) bevatten. Je kan geen streepje (-),
// spaties of punten (.) gebruiken.
// Je kan geen sleutelwoord of gereserveerd sleutelwoord gebruiken. Voorbeelden zijn class, new, break of catch.
// Variabelen zijn hoofdlettergevoelig en beginnen bij conventie nooit met een hoofdletter.
// Gebruik logische en beschrijvende namen voor je variabelen die duidelijk maken wat voor waarde ze bevatten.
// Bijvoorbeeld numberOfPatients is veel beschrijvender dan number.
// Als de naam van je variabele uit meer dan één woord bestaat, gebruik dan een hoofdletter voor elk extra woord (camelCase).

// In JavaScript kun je twee soorten variabelen declareren:
// * let: wanneer de waarde meerdere keren binnen één iteratie van het script opnieuw moet worden toegewezen.
// * const: de waarde wordt slechts eenmaal per iteratie toegekend
// Vóór 2015 was het gebruik van het var keyword de enige manier om een JavaScript variabele te declareren

// let variable
let cat = "Freckle";

// let kan ook meerdere waarden aangeven
let a=1,b=2,c=3;

// let toewijzing
let d = 3;
d = 4; // overschrijven van variabele 3 naar 4

// const variable
const hello = "There";
hello = "You"; // const variabele kun je maar 1 keer toewijzen: TypeError: Assignment to constant variable