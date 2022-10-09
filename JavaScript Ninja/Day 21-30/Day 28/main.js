setInterval(digitalClock, 1000);
function digitalClock() {
    const date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}
