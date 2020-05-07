/*
  Handles the douglas adams button.
  creates a timer that counts down in powers of 2.
  creates a display, behind the game board, saying "don't panic" in large friendly letters
  when the timer runs out - when it's evens and we have normality - it stops the game
  -- and gives the message: So long, and thanks for all the fish!

*/

class StarshipHeartOfGold {
  constructor() {
  	this.dontPanic = "don't panic!";
  	this.r = Math.floor(Math.random() * 256);
  	this.ri = 1;
  	this.g = Math.floor(Math.random() * 256);
  	this.gi = 1;
  	this.b = Math.floor(Math.random() * 256);
  	this.bi = 1;
  	this.dontPanicDiv = document.getElementById("dontPanic");
  	this.dontPanicpara = this.dontPanicDiv.firstElementChild;
  }

  trillian() {
    this.r += (1 * this.ri);
    if (this.r > 255) {
    	this.r = 255;
    	this.ri *= -1;
    } else if (this.r < 0) {
    	this.r = 0;
    	this.ri *= -1;
    }
    this.g += (2 * this.gi);
    if (this.g > 255) {
    	this.g = 255;
    	this.gi *= -1;
    } else if (this.g < 0) {
    	this.g = 0;
    	this.gi *= -1;
    }
   this.b += (7 * this.bi);
    if (this.b > 255) {
    	this.b = 255;
    	this.bi *= -1;
    } else if (this.b < 0) {
    	this.b = 0;
    	this.bi *= -1;
    }
    const rgb = `rgb(${this.r},${this.g},${this.b})`;
    this.dontPanicDiv.style.color = rgb;
  }

  ford() {
  	setInterval(this.trillian.bind(this),17);
  }

  

/*
	Sets the colour to an RGB value. Increments the r, g and b by a given amount unless they're 256, in which case it gets reset to 0 again.

*/

}