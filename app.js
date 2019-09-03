// Score variables
let userScore = 0;
let computerScore = 0;

// DOM-Scoreboard
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');

// DOM-Result
const result_p = document.querySelector('.result>p');

// DOM-Choices
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// Creates a random computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

// Set the user score and print the result message
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;

    result_p.innerHTML = `You win! ${userChoice} beats ${computerChoice}.`;
}

// Set the computer score and print the result message
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `You lose! ${userChoice} loses against ${computerChoice}.`;
}

// Print the draw-message
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `It's a draw! ${userChoice} against ${computerChoice}.`;
}

// Result is calculated based on user choice
function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (`${userChoice}+${computerChoice}`) {
        // Win conditions
        case 'Rock+Scissors':
        case 'Paper+Rock':
        case 'Scissors+Paper':
            win(userChoice, computerChoice);
            break;

        // Draw conditions
        case 'Rock+Rock':
        case 'Paper+Paper':
        case 'Scissors+Scissors':
            draw(userChoice, computerChoice);
            break;

        // The remaining possibilities lose
        default:
            lose(userChoice, computerChoice);
            break;
    }
}

// EventListener triggers the game
function main() {
    rock_div.addEventListener('click', () => {
        game('Rock');
    });

    paper_div.addEventListener('click', () => {
        game('Paper');
    });

    scissors_div.addEventListener('click', () => {
        game('Scissors');
    });
}

main();
