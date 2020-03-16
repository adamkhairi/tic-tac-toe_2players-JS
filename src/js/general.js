// Start the game 
let newGame = true;
// how's turn
let turn = 0
// Player
let players = [];
// players[0] = prompt('Please enter the first player Name : ');
// players[1] = prompt('Please enter the second player Name : ');
// Markers X & O
let markers = ["X", "O"];
// Saving players score
let score = [0, 0];
// winning (addition of 3 winning blocks)
let winners = [7, 56, 73, 84, 146, 273, 292, 448];
//get the Message Element
let message = document.getElementById('game-msg');

// Play the game
function play(div, boxValue) {
    if (newGame) {
        score[turn] += boxValue;
        div.onclick = ""; //Delete the onClick function onClicked
        div.innerText = markers[turn];
        winner();
        if (newGame == true) {
            toggle();
        }
    } else {
        message.innerText = 'GameOver !';

    }
}

// Toggle the player turn to chan ge the marks
function toggle() {
    if (turn == 0) {
        turn = 1;
        message.innerText = players[turn] + " 's Turn !";
    } else {
        turn = 0;
        message.innerText = players[turn] + " 's Turn !";
    }
}
// Check for Winner function
function winner() {
    for (let i = 0; i < winners.length; i++) {
        //(score[0] '&' winners[0]) it's contains one of the winners arry value == wins !
        if ((score[turn] & winners[i]) == winners[i]) {
            alert(players[turn] + " Winns the game !!");
            newGame = false;
            confirm('Play again !');
            if (confirm) {
                score = [0, 0];
                for (let j = 0; j < 9; j++) {
                    let divs = document.querySelectorAll('.q');
                    divs[j].innerText = "";
                }
            }

        }
    }
}





  // if (div.innerText == "") {
        //     div.innerText = markers[turn];
        //     toggle();
        // } else {
        //     alert('Please chose another CASE !');
        // }