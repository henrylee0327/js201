// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors (playerA, playerB) {
    var rps = (playerA, playerB)

        if (playerA === 'rock' && playerB === 'scissors') {
            return 'player 1'
        } else if (playerA === 'rock' && playerB === 'paper') {
            return 'player 2'
        } else if (playerA === 'paper' && playerB === 'rock') {
            return 'player 1'
        } else if (playerA === 'paper' && playerB === 'scissors') {
            return 'player 2'
        } else if (playerA === 'scissors' && playerB === 'rock') {
            return 'player 2'
        } else if (playerA === 'scissors' && playerB === 'paper') {
            return 'player 1'
        } else if (playerA === playerB) {
            return 'draw'
        }
     
    }

    // if (player_1 === player_2) {
    //     return ('draw')
    // }
