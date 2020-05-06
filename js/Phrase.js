/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

 	constructor(text,level) {
 		this.text = text.toLowerCase();
 		this.level = level || null;
 	}

 	addPhraseToDisplay() {
 		const ul = document.getElementById('phrase').firstElementChild;
 		const characters = this.text.split('');
 		characters.forEach((character) => {
 			const li = document.createElement('li');
 			if (character !== " ") {
 				li.classList = `hide letter ${character}`;
 				li.textContent = character;
 			} else {
 				li.classList = `space`;
 			}
 			ul.appendChild(li);
 		});
// Good: that's working. Now, another ToDo:
// 1) Add a heading that notes the difficulty level.
// 2) Experiment with an extra <div> around each word
 	}



 	test() {
 		// console.log(`In the test method fae the Phrase class: ${this.text}, ${this.level}`)
 	}

 }