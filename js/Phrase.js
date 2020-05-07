/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

 	constructor(text,level) {
 		this.text = text.toLowerCase();
 		this.level = level.toUpperCase() || null;
 		this.hiddenLetters = this.text.replace(/ /g,'');
 		this.chosenLetters = '';
 	}

/* addPhraseToDisplay method: creates an unordered list of letter elements matching the contents of
                              this.text. Also adds an h3 element displaying this.level.
@params: none
returns: null
*/
 	addPhraseToDisplay() {
    const displayDiv = document.getElementById('phrase');
 		const ul = displayDiv.getElementsByTagName('UL')[0];
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

/* checkLetter method: searches this.hiddenLetters and this.chosenLetters. Returns true if 
                       the input parameter occurs in either, and false otherwise.
                       A life will be removed if the method returns false; both strings are used because
                       the character may have been input by clicking a button in the qwerty
                       element, or by a keystroke. Whilst individual buttons in the qwerty 
                       element can be disabled, the keystrokes can't. The method searches
                       this.chosenLetters to avoid removing a life multiple times if the same
                       key is pressed repeatedly.
@params: x, a single alphabetic character
returns: boolean
*/
 	checkLetter(x) {
 		let found = false;
    // arguably, could just search this.text!
 		if (this.hiddenLetters.includes(x) || this.chosenLetters.includes(x)) {
 			found = true;
 		}
    this.chosenLetters += x;
 		return found;
 	}

/* showMatchedLetter method: called only when a letter matches one of the remaining letters in
                             the target phrase. Displays all letter elements matching the input,
                             and removes them from this.hiddenLetters so that future inputs can
                             be tested against it.
@params: x, a single alphabetic character
returns: null
*/
 	showMatchedLetter(x) {
 		let classes = ".hide.letter." + x;
 		const letters = document.querySelectorAll(classes);
 		letters.forEach((letter) => {
 			letter.classList.remove("hide");
 			letter.classList.add("show");
		})
		const regex = new RegExp(x,'g');
		this.hiddenLetters = this.hiddenLetters.replace(regex,'');
 	}

 }