/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
 
  static  messages = {
      win: `Congratulations - you win! Click 'Start' to play again...`,
      lose: `Sorry - you lose! Click 'Start' to try again...`
  } 


 	constructor(sourceData) {
 		this.sourceData = sourceData;
 		this.phrases = this.createPhrases();
 		this.missed = 0;
 		this.activePhrase = null;
 		this.usedPhrases = [];
 	}

 	createPhrases() {
 		const phraseObjects = [];
 		this.sourceData.forEach(sourcePhrase => {
 			const newPhrase = new Phrase(sourcePhrase.text,sourcePhrase.level);
 			phraseObjects.push(newPhrase);
 		})
 		return phraseObjects;
 	}

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

 	startGame() {
 		const overlay = document.getElementById('overlay');
 		overlay.style.display = "none";
 		this.getRandomPhrase().addPhraseToDisplay()
 	}

 	handleInteraction(letter) {
    // console.log(this.activePhrase);
    // console.log(this.activePhrase.hiddenLetters);
    // console.log(this.activePhrase.chosenLetters);
    const buttonsCollection = document.getElementById('qwerty')
                           .getElementsByTagName('BUTTON');
    const button = Array.from(buttonsCollection)
                        .filter(b => b.textContent === letter)[0];
 		if (this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter);
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

  checkForWin() {
    let result = null;
    if (this.missed === 5) {
      result = "lose";
    } else if (this.activePhrase.hiddenLetters === "") {
      result = "win";
    }
    return result;
  }

  removeLife() {
    const liveHearts = document.querySelectorAll(".tries");
    const heart = liveHearts[0];
    heart.firstElementChild.src = "images/lostHeart.png";
    heart.classList = "tried";
    this.missed++;
  }

  gameOver(result) {
    this.clearTheBoard();
    const overlay = document.getElementById('overlay');
    overlay.style.display = "";
    const finishingStyle = `start ${result}`
    overlay.classList = finishingStyle;
    const messageH1 = document.getElementById('game-over-message');
    messageH1.textContent = Game.messages[result];
  }

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


