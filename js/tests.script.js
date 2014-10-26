/* Made by Paulo Nunes.
 * v1.4 2/10/2014
 * made for Tiny Quotes webpage, use under MIT License rights.
*/

var selectedQ,
    msg = 0,
    // Social references to use
    refTw = "http://www.twitter.com/",
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
        pFav = '<span class="dev_fav" title="Favorita del Desarrollador"></span>'; // Element to add to all favorite quotes
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
                    authorNReferal = quoteB + " | " + '<a href="http://www.' + referal + refTu + '" target="_blank" title="tumblr de ' + referal + '">' + referal + '</a>';
                    break;
                    case "facebook":
                    authorNReferal = quoteB + " | " + '<a href="' + refFb + referal + '" target="_blank" title="facebook de ' + referal + '">' + referal + '</a>';
                    break;
                    case "twitter":
                    authorNReferal = quoteB + " | " + '<a href="' + refTw + referal + '" target="_blank" title="twitter de ' + referal + '">' + referal + '</a>';
                    break;
                    case "behance":
                    authorNReferal = quoteB + " | " + '<a href="' + refBe + referal + '" target="_blank" title="behance de ' + referal + '">' + referal + '</a>';
                    break;
                    case "youtube":
                    authorNReferal = quoteB + " | " + '<a href="' + refYt + referal + '" target="_blank" title="youtube de ' + referal + '">' + referal + '</a>';
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
    };
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
        twitter.title = "Demasiado largo para compartir ;(";
        twitter.target = "";
    } else if (qChoosen.length <= 140) {
        twitter.href = "https://twitter.com/intent/tweet?text=" + quoteSharer + "%20-" + quoteB;
        twitter.className = "";
        twitter.title = "Comparteme :)";
        twitter.target = "_blank";
    };
    tumblr.href = "http://www.tumblr.com/share/link?description=" + quoteSharer + "%20-" + quoteB;
    tumblr.title = "Comparteme :)";
    
    var checkLove = localStorage.getItem("quoteLoved"),
        loving = document.getElementById("love");
    if (checkLove === null) {
        localStorage.setItem("quoteLoved", "");
        loving.setAttribute("class", "toLove");
    } else {
        var searchLove = checkLove.indexOf(i + ",");
        if (searchLove === -1) {
            loving.setAttribute("class", "toLove");
            console.warn("not loved. " + i);
        } else if (searchLove != -1) {
            loving.setAttribute("class", "loving");
            console.warn("loved " + i);
        };
    };
    
    // return the value of i (the random number) to use it on love()
    return selectedQ = i;
}

// Set interval to show a new random quote every 60 seconds
var quoteInterval = setInterval(function() {
    randomQ();
    switch (msg) {
        case 0:
            console.clear();
            console.info("Gracias por passarte 1 minuto con nosotros :')");
            msg = msg +1;
            break;
        case 1:
            console.clear();
            console.info("DOS minutos. Te gustan nuestras frases.");
            msg = msg +1;
            break;
        case 2:
            console.clear();
            console.info("¿TRES minutos? ¿No seras un bot?");
            msg = 10;
            break;
        case 10:
            console.clear();
            console.info("¿DIEZ minutos? Eres de los nuestro :¡)");
            msg = msg +1;
            break;
    };
}, 60000);

// Function to love/add a quote on your favourite(locally)
function love() {
    var quotesLoved = localStorage.getItem("quoteLoved");
    if (quotesLoved === null) {
        localStorage.setItem("quoteLoved", selectedQ + ",");
    } else {
        // ON BUILD!
        var lovedQ = quotesLoved.indexOf(selectedQ + ",");
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
        } else if (lovedQ === -1) {
            localStorage.setItem("quoteLoved", quotesLoved + selectedQ + ",");
            console.info("Loved quote: " + selectedQ);
            document.getElementById("love").setAttribute("class", "loving");
        };
    };
};

function updateInfo () {
    var daHash = location.hash.substring(1),
        wrapper = document.getElementById("wrapper");
    if (daHash == "home" || daHash == "") {
        wrapper.style.display = "block";
    } else if (daHash == "about") {
        wrapper.style.display = "none";
    } else if (daHash.search("restore") != -1) {
        var rest = location.hash.substring(9);
        localStorage.setItem("quoteLoved", rest);
    } else if (daHash.search("qr") != -1) {
        var quotes = localStorage.getItem("quoteLoved"),
            restoreEl = document.getElementById("restore");
        restoreEl.style.display = "block";
        if (quotes.length == 0) {
            restoreEl.innerHTML = "  No tienes frases para recuperar :')";
        } else {
            restoreEl.innerHTML = " " + window.location.protocol + window.location.host + window.location.pathname + "#restore-" + quotes;
        };
    };

};
// Checks the url if has changes
setInterval(function () {
    updateInfo();
}, 500);

// When R key is pressed a random quote will be shown
window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
	if (e.keyCode == "82") {
		randomQ();
	} else if (e.keyCode == "76"){
        love();
    };
}