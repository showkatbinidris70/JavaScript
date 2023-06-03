(() => {
    const winnerElm = document.querySelector(".winner");
    const winScoreElm = document.querySelector(".lucky-number span");
    const p1Elm = document.querySelector(".lucky-number span");
    const p1ScoreElm = document.querySelector(".p1");
    const p2ScoreElm = document.querySelector(".p2");
    const inputElm = document.querySelector("#luck-input");
    const formElm = document.querySelector("form");
    const p1BtnElm = document.querySelector(".p1Btn");
    const p2BtnElm = document.querySelector(".p2Btn");
    const resetBtnElm = document.querySelector("#resetBtn");

    let p1Score;
    let p2Score;
    let p1Turn;
    let p2Turn;
    let winScore;
    let isGameOver;

    function setRandomPlayer() {
        const playerArr = ['p1Turn', 'p2Turn']
        const num = Math.floor(Math.random() * playerArr.length);
        const player = playerArr[num];
        return player;
    }
    setRandomPlayer();

    function setInitialValues() {
        p1Score = 0;
        p2Score = 0;
        if (setRandomPlayer() === 'p1Turn') {
            p1Turn = true;
        } else {
            p2Turn = true;
        } winScore = 10;
        isGameOver = false;
    }
    setInitialValues();


    function handleValidate(inputValue) { // NaN !== NaN result true if value is not real number
        let isInvalid = false;
        if (! inputValue || inputValue !== inputValue) {
            alert("Please fill up the form with number");
            isInvalid = true;
        }
        return isInvalid;
    }
    function handleReset() {
        inputElm.value = "";
    }

    formElm.addEventListener("submit", (event) => { // prevent reload
        event.preventDefault();
        const inputValue = Number(inputElm.value);
        // validation check
        const isInvalid = handleValidate(inputValue);
        if (isInvalid) 
            return;
        


        // if (Number(inputValue) !== Number(inputValue)) {
        //     alert("Please enter number");
        // }

        // reset the input field
        handleReset();
        // setting data in memory lebel
        winScore = inputValue;
        // setting on Winning Score
        winScoreElm.textContent = inputValue;
        console.log(inputValue);
    });

    function setInitialDom() {
        winScoreElm.textContent = winScore;
        p1ScoreElm.textContent = p1Score;
        p2ScoreElm.textContent = p2Score;
        if (! p1Turn) {
            p1BtnElm.setAttribute('disabled', 'disabled');
        }
        if (! p2Turn) {
            p2BtnElm.setAttribute('disabled', 'disabled');
        }
    }
    setInitialDom();

    function setDisablePlayerBtnOnWin() {
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
    }

    p1BtnElm.addEventListener('click', () => {
        if (p1Turn) { // memorey data update
            p1Score++;
            // DOM data update
            p1ScoreElm.textContent = p1Score;
        }
        // player 1 turn fasle
        p1Turn = false;
        p1BtnElm.setAttribute('disabled', 'disabled');
        // player 2 turn true
        p2Turn = true;
        p2BtnElm.removeAttribute('disabled');

        // Checking winner state
        if (p1Score === winScore) {
            isGameOver = true;
            winnerElm.textContent = 'Player 1 is winner ';
            setDisablePlayerBtnOnWin();
        }

    });
    p2BtnElm.addEventListener('click', () => {
        if (p2Turn) { // memorey data update
            p2Score++;
            // DOM data update
            p2ScoreElm.textContent = p2Score;
        }
        // player 2 trun false
        p2Turn = false;
        p2BtnElm.setAttribute('disabled', 'disabled');
        // player 1 trun true
        p1Turn = true;
        p1BtnElm.removeAttribute('disabled');
        // Checking winner state
        if (p2Score === winScore) {
            isGameOver = true;
            winnerElm.textContent = 'Player 2 is winner ';
            setDisablePlayerBtnOnWin();
        }

    });
    resetBtnElm.addEventListener('click', () => {
        setInitialValues();
        setInitialDom();
    })

})();
