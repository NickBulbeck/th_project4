/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

 	constructor(sourceData) {
 		this.sourceData = sourceData;
 		this.phrases = this.createPhrases();
 		this.missed = 0;
 		this.activePhrase = null;
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
 		const i = Math.floor(Math.random() * this.phrases.length);
 		return this.phrases[i];
 		// ToDo: beef this up to splice the phrase out, and then copy it into another array, etc etc -
 		//		IOW, make sure ye cannae get the same phrase twice in a row.
 	}

 	test() {
 		// console.log(`${this.getRandomPhrase().text}`);
 	}

 }