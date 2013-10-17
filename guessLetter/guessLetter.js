
var word = ["F", "O", "X", "X"];
var currentGuess = ["_", "_", "_"];
 
 function guessLetter(letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            currentGuess[i] = letter;
            console.log("Congratulations, you found the letter " + letter + ".");
        }
    }
    console.log(currentGuess);
    if (word !== currentGuess) {
        console.log("Still something to guess:)");
    } else {
        console.log("Congratulations! You have won game!");
    }
 }
guessLetter("O");




var word = ["F", "O", "X", "X"];
var currentGuess = ["_", "_", "_", "_"];
var wrongGuess = [];


function guessLetter(letter) {
    console.log("Let the game begin! You get 10 tries to guess the word.");
    var count = 0;

    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            currentGuess[i] = letter;
            console.log("Congratulations, you found the letter " + letter + ".");
            count--;
            break

        } else {
            wrongGuess.push(letter);
            count++;
        }
    }
    console.log(currentGuess);


    if (word !== currentGuess) {
        console.log("Still something to guess:)");
        return guessLetter();
    } else if (count == 6) {
        console.log("Sorry, you have reached maximum number of attempts.");
        break
    } else {
        console.log("Congratulations! You have won game!");
        break
    }
  }

guessLetter("O");

