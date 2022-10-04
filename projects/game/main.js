(function(){
const p1ScoreDisplay = document.getElementById('p1ScoreDisplay');
const p2ScoreDisplay = document.getElementById('p2ScoreDisplay');
const displayScore = document.querySelector('p span');
const inputScore = document.getElementById('inputScore');
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const resetBtn = document.getElementById('resetBtn');

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameOver = false;

player1Btn.addEventListener('click', ()=>{
    //console.log('Player One Clicked...');
if(!gameOver){
    //change data
    p1Score = p1Score+1;
    winner(p1Score, winingScore);
    //show changed data
    p1ScoreDisplay.textContent = p1Score;
}

});
player2Btn.addEventListener('click', ()=>{
    //console.log('Player Two Clicked...');
  if(!gameOver){
    //change data
    p2Score = p2Score+1;
    winner(p2Score, winingScore);
    /* if(p2Score===winingScore){
        gameOver = true;
      player1Btn.setAttribute('disabled', 'disabled');
      player2Btn.setAttribute('disabled', 'disabled');
  } */
    //show changed datag
    p2ScoreDisplay.textContent = p2Score;
  }
});
function winner(oldScore, winingScore){
  if(oldScore===winingScore){
    gameOver = true;
    player1Btn.setAttribute('disabled', 'disabled');
    player2Btn.setAttribute('disabled', 'disabled');
}
}
inputScore.addEventListener('change', ()=>{
  winingScore = Number(inputScore.value);
  console.log(winingScore);
  displayScore.textContent = inputScore.value;
  inputScore.value = ' ';
  reset();
});
function reset(){
  console.log('Clicked');
  //Data Changed
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  //show Changed data
  p1ScoreDisplay.textContent = p1Score;
  p2ScoreDisplay.textContent = p2Score;
  player1Btn.removeAttribute('disabled');
  player2Btn.removeAttribute('disabled');
}
resetBtn.addEventListener('click', reset);
}());