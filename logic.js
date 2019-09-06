// GLOBAL VARIABLES
// ***********************************
// Array and Variables for holding data
var wordOptions = ["jeremiah", "neena", "darion", "adam"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; //j _ _ _ _
var wrongLetters = [];
// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
// FUNCTIONS
// ***********************************
function startGame (){
    selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;
    
    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and successes with right number of blanks
    for (i of lettersinWord) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuess").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // testing / debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}
function checkLetters (letter) {
    // Check if the letter exist in the word
    
    var isLetterInWord = false;
    for (i of selectedWord) {
        if (i === letter) {
            isLetterInWord = true;
        }
    }

    // Check where in the word the letter exists, then populate out blanAndSuccesses array.
    if (isLetterInWord) {
        for (var i=0; i<numBlanks; i++) {
            if (selectedWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    // Letters not found then
    } else {
        wrongLetters.push(letter);
        numGuess--;
    }
    console.log(blanksAndSuccesses);

}
// MAIN PROCESS
// ***********************************

// Initiate the code
startGame();

// Register the keyclick
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    // testing / debugging;
    console.log(letterGuessed);
}
