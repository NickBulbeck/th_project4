/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const publicStaticVoidMainStringAaaaargh = () => { // I am soooo funny...

	let game = new Game(data_sourceData);

	const startButton = document.getElementById('btn__reset');
	startButton.addEventListener('click', function() {
		game.startGame();
	})

	const keyboard = document.getElementById('qwerty');
	keyboard.addEventListener('click', function(event) {
		if (event.target.tagName === 'BUTTON') {
			const x = event.target.textContent;
			game.handleInteraction(x);
		}
	})

	document.addEventListener('keydown',function(event) {
	    const code = event.keyCode;
	    const x = String.fromCharCode(code).toLowerCase();
	    if (/^[a-z]+$/.test(x)) {
        game.handleInteraction(x);
	    }
	});

}

publicStaticVoidMainStringAaaaargh();