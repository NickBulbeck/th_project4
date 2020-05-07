/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

 	constructor(text,level) {
 		this.text = text.toLowerCase();
 		this.level = level.toUpperCase() || null;
 		this.hiddenLetters = this.text;
 		this.chosenLetters = '';
 	}

 	addPhraseToDisplay() {
 		const displayDiv = document.getElementById('phrase');
 		const ul = displayDiv.firstElementChild;
 		const characters = this.text.split('');
 		let html = `<div class="word">`;
 		characters.forEach((character) => {
 			const li = document.createElement('li');
 			if (character !== " ") {
 				html += `<li class="hide letter ${character}">${character}</li>`;
 			} else {
 				html += `</div>
 						 <div class="word">
 						 	<li class= "space"> </li>`;
 			}
 		});
 		html += `</div>`;
 		ul.innerHTML = html;
 		const levelHead = document.createElement('h3');
 		levelHead.classList = 'header';
 		levelHead.innerHTML = `Difficulty rating: ${this.level}`;
 		displayDiv.insertBefore(levelHead,ul);
 	}

 	checkLetter(x) {
 		let found = false;
 		if (this.hiddenLetters.includes(x) || this.chosenLetters.includes(x)) {
 			found = true;
 		}
    this.chosenLetters += x;
 		return found;
 	}

// Chosen a parameter of x because letter is already taken - too confusing
 	showMatchedLetter(x) {
 		// if (this.chosenLetters.includes(x)) {
 		// 	return null;
 		// }
    // this.chosenLetters += x;
 		let classes = ".hide.letter." + x;
 		const letters = document.querySelectorAll(classes);
 		letters.forEach((letter) => {
 			letter.classList.remove("hide");
 			letter.classList.add("show");
		})
		const regex = new RegExp(x,'g');
		this.hiddenLetters = this.hiddenLetters.replace(regex,'');
 	}

 	test() {
 		// console.log(`In the test method fae the Phrase class: ${this.text}, ${this.level}`)
 	}

 }