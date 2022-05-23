function changeText() {
 alert(document.getElementById('demo').innerHTML = 'Hello Showkat Ali !');
 console.log(document.getElementById('demo').innerHTML = 'Hello Showkat Ali !');
}
function light1() {
    document.getElementById('light').src = 'img/lighton.gif';
}
function light2() {
    document.getElementById('light').src = 'img/lightoff.gif';
}

try {
    carName = "Saab";
    let carName = 'Volvo';
    document.getElementById('letHosting').innerHTML = carName;
} catch (error) {
    document.getElementById('letHosting').innerHTML = error;
}