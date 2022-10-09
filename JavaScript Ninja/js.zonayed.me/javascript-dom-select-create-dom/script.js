var box1 = document.querySelector('#box1');
console.dir(box1);

var boxNodeList = document.querySelectorAll('.box');
var boxArray = Array.prototype.slice.call(boxNodeList);
console.log(boxArray);
