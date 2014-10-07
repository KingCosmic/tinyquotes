/* Made by Paulo Nunes. Free to use.
 * v1.4 2/10/2014
*/
// Quotes are stored on another js file
var selectedQ;
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
        pFav = '<span class="dev_fav" title="Favorita del Desarrollador"></span>', // Element to add to all favorite quotes
        luv = i;
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
    if (qChoosen.length > 140) {
        twitter.href = "";
        twitter.className = "disabled";
        twitter.target = "";
    } else if (qChoosen.length <= 140) {
        twitter.href = "https://twitter.com/intent/tweet?text=" + quoteSharer + "%20-" + quoteB;
        twitter.className = "";
        twitter.target = "_blank";
    };
    tumblr.href = "http://www.tumblr.com/share/link?description=" + quoteSharer + "%20-" + quoteB;
    
    var checkLove = localStorage.getItem("quoteLoved"),
        searchLove = checkLove.search(i + ","),
        loving = document.getElementById("love");
    if (searchLove === -1) {
        loving.setAttribute("class", "toLove");
        console.warn("not loved.");
    } else if (searchLove != -1) {
        loving.setAttribute("class", "loving");
        console.warn("loved");
    };
    
    // return the value of i (the random number) to use it on love()
    return selectedQ = i;
}
// Set interval to show a new random quote every 60 seconds
var quoteInterval = setInterval(function() {
    randomQ();
}, 60000);
// Function to search on authors and output all their quotes on the console
function search(author) {
    for (var i = 0; i < quotes.length; i++) {
        var splitQ = quotes[i].split("//"),
            quote = splitQ[0],
            authorQ = splitQ[1],
            authorF = authorQ.search(author);
        if (!authorF) {
            console.info(quote + " -" + authorQ);
        };
    };
};

function love() {
    var quotesLoved = localStorage.getItem("quoteLoved");
    if (quotesLoved === null) {
        localStorage.setItem("quoteLoved", selectedQ + ",");
    } else {
        // ON BUILD!
        var lovedQ = quotesLoved.search(selectedQ + ",");
        if (lovedQ != -1) {
            var deleteOne = localStorage.getItem("quoteLoved"),
                findToDelete = deleteOne.search(selectedQ + ",");
            console.warn("Already Loved");
            /*if (findToDelete == -1) {
                console.log(findToDelete);
            } else if (findToDelete != -1) {
                var elToDelete = deleteOne.split(","),
                    toSplice = elToDelete.indexOf(selectedQ);
                elToDelete.splice(toSplice, 1);
                localStorage.setItem("quoteLoved", elToDelete);
                console.warn(elToDelete);
            };*/
        } else {
            localStorage.setItem("quoteLoved", quotesLoved + selectedQ + ",");
            console.info("Quote Loved.");
            document.getElementById("love").setAttribute("class", "loving");
        };
    };
};