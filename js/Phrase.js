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
 		levelHead.innerHTML = `Difficulty rating: ${this.level.toUpperCase()}`;
 		displayDiv.insertBefore(levelHead,ul);
 	}



 	test() {
 		// console.log(`In the test method fae the Phrase class: ${this.text}, ${this.level}`)
 	}

 }