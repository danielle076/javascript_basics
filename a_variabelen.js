// Voordat we variabelen kunnen gebruiken, moeten we eerst aankondigen dat we ze willen gebruiken. Dit wordt gedaan door
// een variabele aan te maken en deze een naam te geven. Dit heet declareren.
const quantity;

// Door de aanduiding die we gebruiken (const), begrijpt de computer dat we het over een variabele hebben. We kunnen
// er een waarde in opslaan. Dit wordt het toewijzen van een waarde genoemd.
quantity = 3;

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

let greeter = "Hoihoi!";

greeter = "Hallo allemaal!";

console.log(greeter); // geeft “Hallo allemaal!”

const greeter = "Hoihoi!";

greeter = "Hallo allemaal!";

console.log(greeter); // geeft “TypeError: Assignment to constant variable.”