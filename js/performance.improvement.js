var selectedQ,
    msg = 0,
    pressed,
    // Social references to use
    refTw = "http://www.twitter.com/",
    refFb = "http://www.facebook.com/",
    refYt = "http://www.youtube.com/user/",
    refBe = "http://www.behance.com/",
    refTu = ".tumblr.com",
    cite = document.getElementById("cite"),
    author = document.getElementById("author"),
    modal = document.getElementById("modal"),
    overlay = document.getElementById("overlay"),
    search = document.getElementById("search"),
    loving = document.getElementById("love"),
    twitter = document.getElementById("twitter"),
    tumblr = document.getElementById("tumblr"),
    tinyQuotes = document.getElementById("tinyQuotes"),
    wrapper = document.getElementById("wrapper"),
    favs = document.getElementById("favs"),
    sharer = document.getElementById("sharer"),
    uHash = location.hash.substring(1),
    title = document.getElementsByTagName("title")[0],
    quo,
    lang;

if (title.innerHTML.indexOf("US") != -1) {
    quo = quotes;
    lang = true;
} else if (title.innerHTML.indexOf("ES") != -1) {
    quo = citas;
    lang = false;
};

// Used a function so now you don't have to refresh the page to display a random quote
function randomQ() {
    "use strict";
    // This line of code defines a random number from 1 to the length of the quotes array
    var i = Math.floor(Math.random() * quo.length),
        uHash = location.hash.substring(1),
        hQuote = quo[uHash],
        qChoosen = hQuote ? hQuote : quo[i],
        whichO = uHash || i,
        quote = qChoosen.split("//"), // This line splits the quote in two on "//" to define the quote text and the author
        favourite = "fav",
        quoteT = quote[0], // Gets the Quote
        quoteB = quote[1], // Gets the Author
        referal = quote[2], // Gets the referral
        authorNReferal,
        quoteLoved = lang ? localStorage.getItem("lovedUS"): localStorage.getItem("lovedES"),
        social = quote[3], // Gets the social network will be used
        fav = quote[4], // Gets if the quote is one of the Developers Favourite
        pFav = lang ? '<span class="dev_fav" title="Favorite of the Developer"></span>' : '<span class="dev_fav" title="Favorita del Desarrollador"></span>'; // Element to add to all favorite quotes
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
    };
    // This two lines define the elements where the quote will be written
    cite.innerHTML = quoteT;
    author.innerHTML = authorNReferal;
    var quoteSharer = quoteT,
        quoteSharer = encodeURIComponent(quoteSharer.trim()),
        tN = lang ? ("To long to share ;( | " + quoteT.length): ("Demasiado largo para compartir ;( | " + quoteT.length),
        tY = lang ? ("Share me :) | " + quoteT.length): ("Comparteme :) | " + quoteT.length);
    if (qChoosen.length > 140) {
        twitter.href = "";
        twitter.className = "disabled";
        twitter.title = tN;
        twitter.target = "";
    } else if (qChoosen.length <= 140) {
        twitter.href = "https://twitter.com/intent/tweet?text=" + quoteSharer + "%20-" + quoteB;
        twitter.className = "";
        twitter.title = tY;
        twitter.target = "_blank";
    };
    tinyQuotes.innerHTML = "Tiny Quote";
    tinyQuotes.addEventListener("focus", function () {
        var a = lang ? "Share this quote :)": "Comparte esta frase :)";
        if (hQuote) {
            tinyQuotes.innerHTML = "http://anchorer.bugs3.com/#" + uHash;
            tinyQuotes.title = a;
        } else {
            tinyQuotes.innerHTML = "http://anchorer.bugs3.com/#" + i;
            tinyQuotes.title = a;
        };
    });
    tinyQuotes.addEventListener("blur", function () {
        tinyQuotes.innerHTML = "Tiny Quote";
    });
    tumblr.href = "http://www.tumblr.com/share/link?description=" + quoteSharer + "%20-" + quoteB;
    tumblr.title = lang ? "Share me :)": "Comparteme :)";

    if (quoteLoved === null) {
        lang ? localStorage.setItem("lovedUS", ""): localStorage.setItem("lovedES", "");
        loving.setAttribute("class", "toLove");
    } else {
        var searchLove = quoteLoved.indexOf(whichO + ",");
        if (searchLove === -1) {
            loving.setAttribute("class", "toLove");
            console.warn("not loved. " + whichO);
        } else if (searchLove != -whichO) {
            loving.setAttribute("class", "loving");
            console.warn("loved " + whichO);
        };
    };

    if (quoteT.length >= 140) {
        cite.style.fontSize = "2em";
    } else if (quoteT.length >= 200) {
        cite.style.fontSize = "1.7em";
    } else {
        cite.style.fontSize = "2.5em";
    };

    setTimeout(function () {
        location.hash = "";
    }, 100);
    // return the value of i (the random number) to use it on love()
    return selectedQ = (uHash || i);
};

// Set interval to show a new random quote every 60 seconds
var quoteInterval = setInterval(daInterval, 60000);

// Every certain minutes the console will be cleared and will be printed a message
function daInterval() {
    randomQ();
    msg++;
    switch (msg) {
    case 1:
        console.clear();
        console.info(lang ? "Thanks for staying 1 minute with us :')": "Gracias por passarte 1 minuto con nosotros :')");
        break;
    case 2:
        console.clear();
        console.info(lang ? "TWO minutes. You like our quotes.": "DOS minutos. Te gustan nuestras frases.");
        break;
    case 3:
        console.clear();
        console.info(lang ? "THREE? Are you a bot?": "¿TRES minutos? ¿No seras un bot?");
        break;
    case 10:
        console.clear();
        console.info(lang ? "TEN minutes? You are one of us :)": "¿DIEZ minutos? Eres de los nuestro :)");
        break;
    };
}

// Function to love/add a quote on your favourite(locally)
function love() {
    var choose = selectedQ || uHash,
        quoteLoved = lang ? localStorage.getItem("lovedUS"): localStorage.getItem("lovedES");
    if (quoteLoved === null) {
        lang ? localStorage.setItem("lovedUS", choose + ","): localStorage.setItem("lovedES", choose + ",");
    } else {
        // ON BUILD!
        var lovedQ = quoteLoved.indexOf(choose + ",");
        if (lovedQ != -1) {
            var deleteOne = lang ? localStorage.getItem("lovedUS"): localStorage.getItem("lovedES"),
                findToDelete = deleteOne.search(choose + ",");
            console.warn("Already Loved " + choose);
        } else if (lovedQ === -1) {
            lang ? localStorage.setItem("lovedUS", quoteLoved + choose + ","): localStorage.setItem("lovedES", quoteLoved + choose + ",");
            console.info("Loved quote: " + selectedQ);
            document.getElementById("love").setAttribute("class", "loving");
        };
    };
};

// If the hash on the URL has changed it will do different things
function updateInfo() {
    var daHash = location.hash.substring(1),
        quoteLoved = lang ? localStorage.getItem("lovedUS"): localStorage.getItem("lovedES"),
        favA = quoteLoved.split(",");
    if (daHash == "home" || daHash == "") {
        wrapper.style.display = "block";
    } else if (daHash == "about") {
        wrapper.style.display = "none";
    } else if (daHash.search("restore") != -1) {
        var rest = location.hash.substring(9);
        localStorage.setItem("quoteLoved", rest);
    } else if (daHash.search("qr") != -1) {
        var quote = lang ? localStorage.getItem("lovedUS"): localStorage.getItem("lovedES"),
            restoreEl = document.getElementById("restore");
        restoreEl.style.display = "block";
        if (quote.length == 0) {
            restoreEl.innerHTML = lang ? "  You don't have quotes to restore :')": "  No tienes frases para recuperar :')";
        } else {
            restoreEl.innerHTML = " " + window.location.protocol + window.location.host + window.location.pathname + "#restore-" + quote;
        };
        location.hash = "";
    };

};


// Checks the url if has changes
setInterval(updateInfo, 500);

window.addEventListener("load", randomQ, false);

// When R key is pressed a random quote will be shown
window.addEventListener("keydown", checkKeyPressed, false);

// When R key is pressed a random quote will be shown
search.addEventListener("keydown", searchFav, false);

// Event listener to catch a click on overlay
document.getElementById("overlay").addEventListener("click", hide);

// Event listener for total function
window.addEventListener("load", total, false);

window.addEventListener("load", function () {
    var pending = localStorage.getItem("pending"),
        a = pending.split("|"),
        div = document.getElementById("pendingC");
    var i = 0,
        o = 0;
    do {
        i += 1;
        var b = a[i],
            c = b.split("//"),
            d = c[0];
        /*do {
            o += 1;
            var e = quotes[o];
            if (e.indexOf(d) != -1) {
                div.innerHTML += "<section><cite class='not'>" + d + "<span class='status'>¡añadida!</span></cite></section>";
            } else if (e.indexOf(d) == -1) {
                div.innerHTML += "<section><cite class='not'>" + d + "<span class='status'>pendiente o cancelada</span></cite></section>";
            }
        } while (o < quotes.length);*/
        div.innerHTML += "<section><cite class='not'>" + d.substr(0, 60) + "</cite></section>";
    } while (i < (a.length - 1));

}, false);

document.getElementById("post").addEventListener("click", function () {
    var ins = document.createElement("section"),
        form = document.getElementById("form"),
        text = form.getElementsByTagName("input")[0],
        daAuth = form.getElementsByTagName("input")[1],
        mention = form.getElementsByTagName("input")[2],
        social = form.getElementsByTagName("select")[0],
        current = document.getElementById("pendingC"),
        section = document.getElementsByTagName("section")[0],
        pending = localStorage.pending,
        toAdd = text.value + "//" + daAuth.value + "//" + mention.value + "//" + social.value.toLowerCase(),
        toOpen = "mailto:amiguencio@icloud.com?subject=" + daAuth.value + "[quote]&body=" + text.value;
    ins.innerHTML = "<cite class='added'>" + text.value.substr(0, 60) + "</cite>";
    if (text.value.length >= 6 && daAuth.value.length >= 6 && mention.value.length >= 6) {
        current.insertBefore(ins, section);
        if (localStorage.getItem("pending") === undefined) {
            localStorage.setItem("pending", (toAdd));
        } else if (localStorage.getItem("pending")) {
            localStorage.setItem("pending", (localStorage.getItem("pending") + "|" + toAdd));
            text.value = "";
            daAuth.value = "";
            mention.value = "";
            window.location.href = toOpen;
        }
    } else {
        alert(lang ? "fill all the form": "rellena los campos primero");
    }
});

favs.addEventListener("click", function () {
    modal.className = "modal modals";
    overlay.style.display = "block";
    search.className = "fav_search searchd";
    sharer.style.display = "block";
    modal.innerHTML = "";
    var quoteLoved = lang ? localStorage.getItem("lovedUS"): localStorage.getItem("lovedES"),
        favA = quoteLoved.split(",");
    for (var i = 0; i < (favA.length - 1); i++) {
        var favQ = favA[i],
            favQuotes = quo[favQ],
            s = favQuotes.split("//"),
            t = s[0],
            a = s[1];
        modal.innerHTML = modal.innerHTML + "<section>" + "<cite contenteditable='true' spellcheck='false'>" + s[0] + "</cite>" + "<p><a onclick='location.reload()' href='#" + favQ + "'>" + s[1] + "<span class='dev_fav'></span>" + "</a></p>" + "</section>";
    };
});

function hide() {
    modal.className = "modal modalh";
    overlay.style.display = "none";
    sharer.style.display = "none";
    search.className = "fav_search searchHide";
    search.value = "";
    setTimeout(function () {
        search.className = "fav_search";
        modal.className = "modal";
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
    var searchVal = search.value,
        quoteLoved = lang ? localStorage.getItem("lovedUS"): localStorage.getItem("lovedES"),
        favA = quoteLoved.split(",");
    modal.innerHTML = "";
    for (var i = 0; i < (favA.length - 1); i++) {
        var favQ = favA[i],
            favQuotes = quo[favQ],
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
    var quoteLoved = lang ? localStorage.getItem("lovedUS"): localStorage.getItem("lovedES"),
        totalA = quoteLoved.split(","),
        lenghtOf = totalA.length;
    if (quoteLoved.length == 0) {
        document.getElementById("total").innerHTML = lang ? "No fav quotes yet.": "Aun no le has dado Fav. a una cita.";
    } else if (quoteLoved.length > 0) {
        document.getElementById("total").innerHTML = lang ? ("Total on Fav.: " + (lenghtOf - 1) + " of " + (quo.length - 1)): ("Total en Fav.: " + (lenghtOf - 1) + " de " + (quo.length - 1));
    } else if (lenghtOf == lenghtOf) {
        document.getElementById("total").innerHTML = lang ? "You loved all our quotes, thanks :)": "Te han gustado todas, gracias :)";
    }
}