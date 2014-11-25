/* Made by Paulo Nunes.
 * v1.6 4/11/2014
 * made for Tiny Quotes webpage, use under MIT License rights.
 */

var selectedQ,
    msg = 0,
    pressed,
    search = document.getElementById("search"),
    // Social references to use
    refTw = "http://www.twitter.com/",
    refFb = "http://www.facebook.com/",
    refYt = "http://www.youtube.com/user/",
    refBe = "http://www.behance.com/",
    refTu = ".tumblr.com",
    uHash = location.hash.substring(1);

// Used a function so now you don't have to refresh the page to display a random quote
function randomQ() {
    "use strict";
    // This line of code defines a random number from 1 to the length of the quotes array
    var i = Math.floor(Math.random() * quotes.length),
        uHash = location.hash.substring(1),
        hQuote = quotes[uHash],
        qChoosen = hQuote ? hQuote : quotes[i],
        whichO = uHash || i,
        quote = qChoosen.split("//"), // This line splits the quote in two on "//" to define the quote text and the author
        favourite = "fav",
        quoteT = quote[0], // Gets the Quote
        quoteB = quote[1], // Gets the Author
        referal = quote[2], // Gets the referral
        authorNReferal,
        social = quote[3], // Gets the social network will be used
        fav = quote[4], // Gets if the quote is one of the Developers Favourite
        pFav = '<span class="dev_fav" title="Favorita del Desarrollador"></span>', // Element to add to all favorite quotes
        qCite = document.getElementById("cite");
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
        tumblr = document.getElementById("tumblr"),
        tinyQuotes = document.getElementById("tinyQuotes");
    if (qChoosen.length > 140) {
        twitter.href = "";
        twitter.className = "disabled";
        twitter.title = "Demasiado largo para compartir ;( | " + quoteT.length;
        twitter.target = "";
    } else if (qChoosen.length <= 140) {
        twitter.href = "https://twitter.com/intent/tweet?text=" + quoteSharer + "%20-" + quoteB;
        twitter.className = "";
        twitter.title = "Comparteme :) | " + quoteT.length;
        twitter.target = "_blank";
    };
    tinyQuotes.innerHTML = "Tiny Quote";
    tinyQuotes.addEventListener("focus", function () {
        if (hQuote) {
            tinyQuotes.innerHTML = "http://tinyquotes.com/#" + uHash;
            tinyQuotes.title = "Comparte esta frase :)";
        } else {
            tinyQuotes.innerHTML = "http://tinyquotes.com/#" + i;
            tinyQuotes.title = "Comparte esta frase :)";
        };
    });
    tinyQuotes.addEventListener("blur", function () {
        tinyQuotes.innerHTML = "Tiny Quote";
    });
    tumblr.href = "http://www.tumblr.com/share/link?description=" + quoteSharer + "%20-" + quoteB;
    tumblr.title = "Comparteme :)";

    var checkLove = localStorage.getItem("quoteLoved"),
        loving = document.getElementById("love");
    if (checkLove === null) {
        localStorage.setItem("quoteLoved", "");
        loving.setAttribute("class", "toLove");
    } else {
        var searchLove = checkLove.indexOf(whichO + ",");
        if (searchLove === -1) {
            loving.setAttribute("class", "toLove");
            console.warn("not loved. " + whichO);
        } else if (searchLove != - whichO) {
            loving.setAttribute("class", "loving");
            console.warn("loved " + whichO);
        };
    };

    if (quoteT.length >= 140) {
        qCite.style.fontSize = "2em";
    } else if (quoteT.length >= 200) {
        qCite.style.fontSize = "1.7em";
    } else {
        qCite.style.fontSize = "2.5em";
    };

    setTimeout(function () {
        location.hash = "";
    }, 100);
    // return the value of i (the random number) to use it on love()
    return selectedQ = i;
};
window.addEventListener("load", randomQ, false);

// Set interval to show a new random quote every 60 seconds
var msg = 0;
var quoteInterval = setInterval(daInterval, 60000);

// Every certain minutes the console will be cleared and will be printed a message
function daInterval() {
    randomQ();
    msg++;
    switch (msg) {
    case 1:
        console.clear();
        console.info("Gracias por passarte 1 minuto con nosotros :')");
        break;
    case 2:
        console.clear();
        console.info("DOS minutos. Te gustan nuestras frases.");
        break;
    case 3:
        console.clear();
        console.info("¿TRES minutos? ¿No seras un bot?");
        break;
    case 10:
        console.clear();
        console.info("¿DIEZ minutos? Eres de los nuestro :¡)");
        break;
    };
}

// Function to love/add a quote on your favourite(locally)
function love() {
    var quotesLoved = localStorage.getItem("quoteLoved"),
        choose = selectedQ || uHash;
    if (quotesLoved === null) {
        localStorage.setItem("quoteLoved", choose + ",");
    } else {
        // ON BUILD!
        var lovedQ = quotesLoved.indexOf(choose + ",");
        if (lovedQ != -1) {
            var deleteOne = localStorage.getItem("quoteLoved"),
                findToDelete = deleteOne.search(choose + ",");
            console.warn("Already Loved " + choose);
        } else if (lovedQ === -1) {
            localStorage.setItem("quoteLoved", quotesLoved + choose + ",");
            console.info("Loved quote: " + choose);
            document.getElementById("love").setAttribute("class", "loving");
        };
    };
};

// If the hash on the URL has changed it will do different things
function updateInfo() {
    var daHash = location.hash.substring(1),
        wrapper = document.getElementById("wrapper"),
        favs = localStorage.getItem("quoteLoved"),
        favA = favs.split(","),
        modal = document.getElementById("modal"),
        overlay = document.getElementById("overlay"),
        seen = false;
    if (daHash == "home" || daHash == "") {
        wrapper.style.display = "block";
    } else if (daHash == "about") {
        wrapper.style.display = "none";
    } else if (daHash.search("restore") != -1) {
        var rest = location.hash.substring(9);
        localStorage.setItem("quoteLoved", rest);
    } else if (daHash.search("qr") != -1) {
        var quote = localStorage.getItem("quoteLoved"),
            restoreEl = document.getElementById("restore");
        restoreEl.style.display = "block";
        if (quote.length == 0) {
            restoreEl.innerHTML = "  No tienes frases para recuperar :')";
        } else {
            restoreEl.innerHTML = " " + window.location.protocol + window.location.host + window.location.pathname + "#restore-" + quote;
        };
    } else if (daHash == "fav") {
        modal.className = "modal modals";
        overlay.style.display = "block";
        search.className = "fav_search searchd";
        document.getElementById("sharer").style.display = "block";
        modal.innerHTML = "";
        for (var i = 0; i < (favA.length - 1); i++) {
            var favQ = favA[i],
                favQuotes = quotes[favQ],
                s = favQuotes.split("//"),
                t = s[0],
                a = s[1];
            modal.innerHTML = modal.innerHTML + "<section>" + "<cite contenteditable='true' spellcheck='false'>" + s[0] + "</cite>" + "<p><a onclick='location.reload()' href='#" + favQ + "'>" + s[1] + "<span class='dev_fav'></span>" + "</a></p>" + "</section>";
        };
        location.hash = "";
    };

};

// Checks the url if has changes
setInterval(function () {
    updateInfo();
}, 500);

// When R key is pressed a random quote will be shown
window.addEventListener("keydown", checkKeyPressed, false);

// When R key is pressed a random quote will be shown
search.addEventListener("keydown", searchFav, false);

// Event listener to catch a click on overlay
document.getElementById("overlay").addEventListener("click", hide);

// Event listener for total function
window.addEventListener("load", total, false);

function hide() {
    document.getElementById("modal").className = "modal modalh";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sharer").style.display = "none";
    search.className = "fav_search searchHide";
    search.value = "";
    setTimeout(function () {
        search.className = "fav_search";
        document.getElementById("modal").className = "modal";
    }, 360);
    return pressed = false;
}

// Clicking R will clear the interval and display another random quote
function checkKeyPressed(e) {
    // Random quote
    if (pressed === undefined || pressed === false) {
        if (e.keyCode == "82") {
            clearInterval(quoteInterval);
            quoteInterval = setInterval(daInterval, 60000);
            randomQ();
            // Love quote
        } else if (e.keyCode == "70") {
            // Clicking L or F will add the quote to your favourites.
            love();
        };
    };
}

function searchFav() {
    var search = document.getElementById("search"),
        searchVal = search.value,
        favs = localStorage.getItem("quoteLoved"),
        favA = favs.split(","),
        modal = document.getElementById("modal");
    modal.innerHTML = "";
    for (var i = 0; i < (favA.length - 1); i++) {
        var favQ = favA[i],
            favQuotes = quotes[favQ],
            s = favQuotes.split("//"),
            t = s[0],
            tTL = t.toLowerCase(),
            a = s[1];
        if (tTL.indexOf(searchVal) != -1) {
            modal.innerHTML = modal.innerHTML + "<section>" + "<cite contenteditable='true' spellcheck='false'>" + s[0] + "</cite>" + "<p><a onclick='location.reload()' href='#" + favQ + "'>" + s[1] + "<span class='dev_fav'></span>" + "</a></p>" + "</section>";
        };
    };
    return pressed = true;

};

// Show a div with the number of quotes you loved
function total() {
    var totalL = localStorage.getItem("quoteLoved"),
        totalA = totalL.split(","),
        lenghtOf = totalA.length;
    if (totalL.length == 0) {
        document.getElementById("total").innerHTML = "Aun no le has dado Fav. a una cita.";
    } else if (totalL.length > 0) {
        document.getElementById("total").innerHTML = "Total en Fav.: " + (lenghtOf - 1) + " de " + (quotes.length - 1);
    } else if (lenghtOf == lenghtOf) {
        document.getElementById("total").innerHTML = "Te han gustado todas, gracias :)";
    }
}