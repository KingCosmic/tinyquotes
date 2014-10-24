function daPop() {
    window.open("updates.html", "login", "width=200, height=300");
}

function checkPop() {
    var logged = localStorage.getItem("logged");
    if (logged === null) {
        localStorage.setItem("logged", false);
    } else if (logged === true) {
        window.close();
    }
}

setInterval(function () {
    checkPop();
}, 1000);