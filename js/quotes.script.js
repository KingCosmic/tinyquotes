/* Made by Paulo Nunes. Free to use.
 * v1.3 28/9/2014
*/
// Here are stored all quotes
var quotes = [
    "Click. Boom. &iexcl;Asombroso!//Steve Jobs",
    "El diseño no es sólo cómo se ve o cómo se siente. El Diseño es cómo funciona//Steve Jobs",
    "¿Por qué enrolarse en la armada cuando puedes ser un pirata?//Steve Jobs",
    "La innovación distingue entre un líder y un seguidor//Steve Jobs",
    "La calidad es más importante que la cantidad. Un 'home run' es mucho mejor que dos dobles//Steve Jobs//DaLancelotBruh//facebook"
];
// This codeline defines a random number from 1 to the length of the quotes array
var i = Math.floor(Math.random() * quotes.length),
    qChoosen = quotes[i],
    quote = qChoosen.split("//"), // This line splits the quote in two on "//" to define the quote text and the author
    quoteT = quote[0],
    quoteB = quote[1],
    referal = quote[2],
    authorNReferal,
    social = quote[3],
    refTw = "http://www.twitter.com/",
    refFb = "http://www.facebook.com/",
    refYt = "http://www.youtube.com/user/",
    refBe = "http://www.behance.com/";
// This two lines define the elements where the quote will be written

if (referal === undefined) {
    authorNReferal = quoteB;
} else {
    switch (social) {
    case undefined:
        authorNReferal = quoteB + " | " + referal;
        break;
    case "twitter":
        authorNReferal = quoteB + " | " + '<a href="' + refTw + referal + '" target="_blank">' + referal + '</a>';
        break;
    case "facebook":
        authorNReferal = quoteB + " | " + '<a href="' + refFb + referal + '" target="_blank">' + referal + '</a>';
        break;
    case "youtube":
        authorNReferal = quoteB + " | " + '<a href="' + refYt + referal + '" target="_blank">' + referal + '</a>';
        break;
    case "behance":
        authorNReferal = quoteB + " | " + '<a href="' + refBe + referal + '" target="_blank">' + referal + '</a>';
        break;
    }
}
document.getElementById("cite").innerHTML = quoteT;
document.getElementById("author").innerHTML = authorNReferal;