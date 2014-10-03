/* Made by Paulo Nunes. Free to use.
 * v1.4 2/10/2014
*/
// Quotes are stored on another js file

// Social references to use
var refTw = "http://www.twitter.com/",
    refFb = "http://www.facebook.com/",
    refYt = "http://www.youtube.com/user/",
    refBe = "http://www.behance.com/",
    refTu = ".tumblr.com";
// Used a function so now you don't have to refresh the page to display a random quote
function randomQ() {
    "use strict";
    // This codeline defines a random number from 1 to the length of the quotes array
    var i = Math.floor(Math.random() * quotes.length),
        qChoosen = quotes[i],
        quote = qChoosen.split("//"), // This line splits the quote in two on "//" to define the quote text and the author
        favourite = "fav",
        quoteT = quote[0], // Gets the Quote
        quoteB = quote[1], // Gets the Author
        referal = quote[2], // Gets the referral
        authorNReferal,
        social = quote[3], // Gets the social network will be used
        fav = quote[4], // Gets if the quote is one of the Developers Favourite
        pFav = '<span class="dev_fav"></span>'; // Element to add to all favorite quotes
    // If the referral is not defined only the quote and the author will be outputed
    if (referal === undefined) {
        authorNReferal = quoteB;
    } else {
        // If it is will output the refferal and the social network link
        // If one of the elements on the qChoosen array has fav on it it will pass through all this if-statement
        if (quoteT == "fav" || referal == "fav" || social == "fav" || fav == "fav") {
            switch (social) {
                    case "tumblr":
                    authorNReferal = quoteB + " | " + '<a href="http://www.' + referal + refTu + '" target="_blank">' + referal + '</a>' + pFav;
                    break;
                    case "facebook":
                    authorNReferal = quoteB + " | " + '<a href="' + refFb + referal + '" target="_blank">' + referal + '</a>' + pFav;
                    break;
                    case "twitter":
                    authorNReferal = quoteB + " | " + '<a href="' + refTw + referal + '" target="_blank">' + referal + '</a>' + pFav;
                    break;
                    case "behance":
                    authorNReferal = quoteB + " | " + '<a href="' + refBe + referal + '" target="_blank">' + referal + '</a>' + pFav;
                    break;
                    case "youtube":
                    authorNReferal = quoteB + " | " + '<a href="' + refYt + referal + '" target="_blank">' + referal + '</a>' + pFav;
                    break;
                    case undefined:
                    if (referal == "fav") {
                        authorNReferal = quoteB + pFav;
                    } else {
                        authorNReferal = quoteB + " | " + referal + pFav;
                    }
                    break;
            };
            
        } else {
            switch (social) {
                    case "tumblr":
                    authorNReferal = quoteB + " | " + '<a href="http://www.' + referal + refTu + '" target="_blank">' + referal + '</a>';
                    break;
                    case "facebook":
                    authorNReferal = quoteB + " | " + '<a href="' + refFb + referal + '" target="_blank">' + referal + '</a>';
                    break;
                    case "twitter":
                    authorNReferal = quoteB + " | " + '<a href="' + refTw + referal + '" target="_blank">' + referal + '</a>';
                    break;
                    case "behance":
                    authorNReferal = quoteB + " | " + '<a href="' + refBe + referal + '" target="_blank">' + referal + '</a>';
                    break;
                    case "youtube":
                    authorNReferal = quoteB + " | " + '<a href="' + refYt + referal + '" target="_blank">' + referal + '</a>';
                    break;
                    case undefined:
                    if (referal == "fav") {
                        authorNReferal = quoteB;
                    } else {
                        authorNReferal = quoteB + " | " + referal;
                    }
                    break;
            };
        } 
    }
    // This two lines define the elements where the quote will be written
    document.getElementById("cite").innerHTML = quoteT;
    document.getElementById("author").innerHTML = authorNReferal;
    var quoteSharer = quoteT,
        quoteSharer = encodeURIComponent(quoteSharer.trim()),
        twitter = document.getElementById("twitter"),
        tumblr = document.getElementById("tumblr");
    twitter.href = "https://twitter.com/intent/tweet?text=" + quoteSharer + "%20-" + quoteB;
    tumblr.href = "http://www.tumblr.com/share/link?description=" + quoteSharer + "%20-" + quoteB;
}
// Set interval to show a new random quote every 60 seconds
var quoteInterval = setInterval(function() {
    randomQ();
}, 60000);