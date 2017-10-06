// Creates an array that lists out all of the letter options a-z.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Creating variables to hold the number of wins and losses. They start at 0.
var wins = 0;
var losses = 0;
var userGuesses = [];
var guessesLeft = 10;

// This function is run whenever the user presses a key.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // This logic determines the outcome of the game (win/loss), and increments the appropriate number


    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (
            userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") ||
        (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (
            userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") ||
        (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (
            userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
        (userGuess === "y") || (userGuess === "z")) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 10;
            alert("You Won!")
            userGuesses = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        } else if (guessesLeft === 1) {
            losses++;
            guessesLeft = 10;
            userGuesses = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        } else {
            userGuesses.push(userGuess);
            guessesLeft--;
        };

        document.getElementById("losses").innerHTML = (losses);
        document.getElementById("wins").innerHTML = (wins);
        document.getElementById("userGuesses").innerHTML = (userGuesses);
        document.getElementById("guessesLeft").innerHTML = (guessesLeft);
        document.getElementById("computerGuess").innerHTML = (computerGuess);
    }
}