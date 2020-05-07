/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
 // The static "win" and "lose" properties should not be renamed as they correspond to 
 // two CSS classes used on the overlay element in index.html.
  static  gameOverMessage = {
      win: `Congratulations - you win! Click 'Start' to play again...`,
      lose: `Sorry - you lose! Click 'Start' to try again...`
  }

 	constructor(sourceData) {
 		this.sourceData = sourceData;        // array of key/value pairs
 		this.phrases = this.createPhrases();
 		this.missed = 0;
 		this.activePhrase = null;
 		this.usedPhrases = [];
 	}
/* createPhrases method: called from the constructor; converts raw key/value pairs (from an
                         external source) into Phrase objects. Key/value pair format is:
                         text: string comprising only letters and spaces,
                         level: string (in practice a single word)
@params: none, although this.sourceData must be present in appropriate format.
returns: an array of Phrase objects
*/
 	createPhrases() {
 		const phraseObjects = [];
 		this.sourceData.forEach(sourcePhrase => {
 			const newPhrase = new Phrase(sourcePhrase.text,sourcePhrase.level);
 			phraseObjects.push(newPhrase);
 		})
 		return phraseObjects;
 	}

/* getRandomPhrase method: picks a random Phrase object from this.phrases; removes it and pushes it
                           into this.usedPhrases, to avoid the same Phrase being selected for
                           two games in succession. If all Phrase objects have been used, recreates
                           this.phrases using createPhrases and sets this.usedPhrases to an empty 
                           array. Sets this.activePhrase to be the selected Phrase object.
@params: none
calls createPhrases, if there are no remaining Phrase objects in this.phrases
returns: a single Phrase object
*/
 	getRandomPhrase() {
    if (this.phrases.length === 0) {
        this.phrases = this.createPhrases();
        this.usedPhrases = [];
    }
 		const i = Math.floor(Math.random() * this.phrases.length);
 		const randomPhrase = this.phrases[i];
 		this.phrases.splice(i,1);
 		this.usedPhrases.push(randomPhrase);
 		this.activePhrase = randomPhrase;
 		return randomPhrase;
 	}

/* startGame method: hides the overlay element, and calls addPhraseToDisplay on the Phrase
                     object returned by getRandomPhrase.
@params: none
returns: null
*/
 	startGame() {
 		const overlay = document.getElementById('overlay');
 		overlay.style.display = "none";
 		this.getRandomPhrase().addPhraseToDisplay()
 	}

/* handleInteraction method: processes all user input. Note that user input may come from either
                             a click event on a button, or a keydown event attached to the
                             document at the top level. Thus, any reference to an event.target object
                             would be ambiguous. So, I've avoided it in favour of selecting target
                             element via DOM traversal.
   @params: x, a single-character alphabetic string
   calls:   activePhrase.checkLetter, activePhrase.showMatchedLetter, removeLife,
            gameOver
   returns: null
*/
 	handleInteraction(x) {
    // Button must be disabled following either a button-click OR a keystroke
    const buttonsCollection = document.getElementById('qwerty')
                           .getElementsByTagName('BUTTON');
    const button = Array.from(buttonsCollection)
                        .filter(b => b.textContent === x)[0];
 		if (this.activePhrase.checkLetter(x)) {
      this.activePhrase.showMatchedLetter(x);
      button.classList.add("chosen");
    } else {
      this.removeLife();
      button.classList.add("wrong");
    }
    button.disabled = true;
    const result = this.checkForWin();
    if (result) {
      this.gameOver(result);
    }
 	}

/*  checkForWin method: Detects a win or a loss
    @params: none
    returns: result, which is either "lose", "win" or null
*/
  checkForWin() {
    let result = null;
    if (this.missed === 5) {
      result = "lose";
    } else if (this.activePhrase.hiddenLetters === "") {
      result = "win";
    }
    return result;
  }

/*  removeLife method: converts the leftmost "live" heart icon to a "lost" heart icon
                       and increments this.missed.
    @params: none
    returns: null;
*/
  removeLife() {
    const liveHearts = document.querySelectorAll(".tries");
    const heart = liveHearts[0];
    heart.firstElementChild.src = "images/lostHeart.png";
    heart.classList = "tried";
    this.missed++;
  }

/*  gameOver method: re-displays the overlay element with an appropriate win/lose message
    calls:   clearTheBoard();
    @params: result: a string with a value of "win" or "lose". This matches both the win and lose
             static properties, and the .win and .lose classes in styles.css - so it's rather
             brittle!  :-(
             But hey.
    returns: null;
*/
  gameOver(result) {
    this.clearTheBoard();
    const overlay = document.getElementById('overlay');
    overlay.style.display = "";
    const finishingStyle = `start ${result}`
    overlay.classList = finishingStyle;
    const messageH1 = document.getElementById('game-over-message');
    messageH1.textContent = Game.gameOverMessage[result];
  }

/*  clearTheBoard method: resets the DOM to its original condition
    @params: none;
    returns: null;
*/
  clearTheBoard() {
    this.missed = 0;
    const qwerty = document.getElementById('qwerty');
    const theKeys = Array.from(qwerty.getElementsByTagName('BUTTON'));
    const theBoard = document.getElementById('phrase');
    const hearts = Array.from(document.querySelectorAll('.tried'));
    console.log(hearts);
    theBoard.innerHTML = '<ul></ul>';
    theKeys.forEach((key) => {
      key.disabled = false;
      key.classList.remove('chosen');
      key.classList.remove('wrong');
    })
    hearts.forEach((heart) => {
      heart.firstElementChild.src = "images/liveHeart.png";
      heart.classList = "tries";
    })
  }

 }


