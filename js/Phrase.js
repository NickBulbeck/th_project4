/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

 	constructor(text,level) {
 		this.text = text.toLowerCase();
 		this.level = level || null;
 	}

 	addPhraseToDisplay() {
 		const displayDiv = document.getElementById('phrase');
 		const ul = displayDiv.firstElementChild;
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
 		const levelHead = document.createElement('h3');
 		levelHead.classList = 'header';
 		levelHead.innerHTML = `Difficulty rating: ${this.level.toUpperCase()}`;
 		displayDiv.insertBefore(levelHead,ul);
// Good: that's working. Now, another ToDo:
// 2) Experiment with an extra <div> around each word
 	}



 	test() {
 		// console.log(`In the test method fae the Phrase class: ${this.text}, ${this.level}`)
 	}

 }