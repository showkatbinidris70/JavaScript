// function loadDoc(){
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById('demo').innerHTML = this.responseText;
//         }
//     }
//     xhttp.open('GET', 'showkat.txt');
//     xhttp.send();
// }

const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

const xhr = new XMLHttpRequest();

function getData(){
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function(){
    const result = xhr.response;
    console.log(result);
};
}

function sendData(){
    
}
getButton.addEventListener('click', getData);
