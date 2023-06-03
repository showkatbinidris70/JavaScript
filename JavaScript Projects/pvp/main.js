const winnerElm = document.querySelector(".winner");
const formElm = document.querySelector('form');
const inputNumElm = document.querySelector('.inputNum');
const winScoreElm = document.querySelector('.winScore span');
const pBtn1Elm = document.querySelector('.pBtn1');
const pBtn2Elm = document.querySelector('.pBtn2');
const playerOneScoreElm = document.querySelector('.p1Score');
const playerTwoScoreElm = document.querySelector('.p2Score');
const resetBtnElm = document.querySelector('.resetBtn');


let playerOneScore;
let playerTwoScore;
let winningScore;
let inputValue;
let isGameOver;
let p1Turn;
let p2Turn;

function setInitialValues() {
    playerOneScore = 0;
    playerTwoScore = 0;
    winningScore = 5;
    inputValue = 0;
    isGameOver = false;
    p1Turn = true;
    p2Turn = false;
}
setInitialValues();
function setInitialDom() {
    winScoreElm.textContent = inputValue;
    playerOneScoreElm.textContent = playerOneScore;
    playerTwoScoreElm.textContent = playerTwoScore;
    if (! p1Turn) {
        pBtn1Elm.setAttribute('disabled', 'disabled');
    }
    if (! p2Turn) {
        pBtn2Elm.setAttribute('disabled', 'disabled');
    }
}
setInitialDom();
// reset the input value
function resetValue() {
    inputNumElm.value = ''
}

function handleValidation(inputValue) {
    let isInvalid = false;
    if (! inputValue || inputValue !== inputValue) {
        alert("Please fill up the form with number");
        isInvalid = true;
    }
    return isInvalid;
}
formElm.addEventListener('submit', (event) => { // prevent reloading
    event.preventDefault();
    // input element
    inputValue = Number(inputNumElm.value);
    const isNotvalid = handleValidation(inputValue);
    if (isNotvalid) 
        return;
    


    // reset input value
    resetValue();
    // setting winning store in DOM
    winScoreElm.textContent = inputValue;
    console.log(inputValue);

})
pBtn1Elm.addEventListener('click', () => {
    if (p1Turn) {
        playerOneScore++;
        playerOneScoreElm.textContent = playerOneScore
    }
    pBtn1Elm.setAttribute('disabled', 'disabled');
    pBtn2Elm.removeAttribute('disabled');
    p2Turn = true;

    if (inputValue === playerOneScore) {
        winnerElm.textContent = "Player 1 is winner !";
    }
    console.log(playerOneScore)
})
pBtn2Elm.addEventListener('click', () => {
    if (p2Turn) {
        playerTwoScore++;
        playerTwoScoreElm.textContent = playerTwoScore
    }
    pBtn2Elm.setAttribute('disabled', 'disabled');
    pBtn1Elm.removeAttribute('disabled');
    p2Turn = false;
    if (inputValue === playerTwoScore) {
        winnerElm.textContent = "Player 2 is winner !";
    }
    console.log(playerTwoScore)
})
resetBtnElm.addEventListener('click', () => {
    setInitialValues();
    setInitialDom();
})
