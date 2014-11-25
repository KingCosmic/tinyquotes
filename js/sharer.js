var d = document,
    cite = d.getElementById("cite"),
    author = d.getElementById("author"),
    daHash = location.hash.substring(1),
    quoteArray = quotes[daHash].split("//"),
    q = quoteArray[0],
    a = quoteArray[1];

if (q.length >= 100) {
    cite.style.fontSize = "1.8em";
} else if (q.length >= 150) {
    cite.style.fontSize = "1.5em";
};
cite.innerHTML = q;
cite.addEventListener("click", clickOpener, false);
author.innerHTML = a;

function clickOpener() {
    var win = window.open(("http://127.0.0.1:58188/#" + daHash), "_blank");
    win.focus();
}