/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

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
	        this.phrases = this.usedPhrases;
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
// Also, disable the key.
//  [...document.querySelectorAll("a")]
//   .filter(a => a.textContent.includes("your search term"))
//   .forEach(a => console.log(a.textContent))
 		if (this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter);
    } else {
      this.removeLife();
    }
 	}

  checkForWin() {

  }

  removeLife() {
    const liveHearts = document.querySelectorAll(".tries");
    const heart = liveHearts[0];
    heart.firstElementChild.src = "images/lostHeart.png";
    heart.classList = "tried";
    this.missed++;
    if (this.missed === 5) {
      this.gameOver();
    } 
  }

  gameOver() {
    
  }

 	test() {
 		// console.log(`${this.getRandomPhrase().text}`);
 	}

 }


