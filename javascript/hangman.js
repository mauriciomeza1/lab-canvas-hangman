class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.guessedLetters = "";
  }

  pickWord() {
    var randomWord = this.words[Math.floor(Math.random()*this.words.length)];
    return String(randomWord)
  }


  checkIfLetter(keyCode) {
    if (keyCode == 'a' || 'b' || 'c' || 'd' || 'e' || 'f' || 'g' || 'h' || 'i' || 'j' || 'k' || 'l' || 'm' || 'n' || 'o' || 'p' || 'q' || 'r' || 's' || 't' || 'u' || 'v' || 'w' || 'x' || 'y' || 'z' ) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)) {
      return true
    } else {
      return false
    }
  } 

  addCorrectLetter(letter) {
    return this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});