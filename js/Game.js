/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	// create a class of game
	constructor() {
		this.missed = 0;
		this.phrases = [
			new Phrase("i love you"),
			new Phrase("i miss you"),
			new Phrase("you are my life"),
			new Phrase("you are my breath"),
			new Phrase("you are my cat"),
		];
		this.activePhrase = null;
	}
	getRandomPhrase() {
		// store in the random variable a random phrase Object from this.Phrases
		let random = this.phrases[Math.floor(Math.random() * this.phrases.length)];
		return random;
	}
	startGame() {
		// this function removes the default blue overlay and adds a phrase to the UL
		document.querySelector("#overlay").style.display = "none";
		this.activePhrase = this.getRandomPhrase(); // choose a random phrase
		this.activePhrase.addPhraseToDisplay(); // add a phrase to UL
	}
	checkForWin() {
		// checks to see whether there is still a hide class
		const hideLetters = document.querySelectorAll(".hide");
		if (hideLetters.length > 0) {
			return false;
		} else {
			return true;
		}
	}
	removeLife() {
		// if checkForWin is false we replace a blue heart with a grey one if we miss more than 4 times the Game is over
		let tries = document.querySelectorAll(".tries img");
		if (!this.checkForWin()) {
			tries[this.missed].src = "images/lostHeart.png";
			this.missed += 1;
		}
		if (this.missed >= 5) {
			this.gameOver();
		}
	}

	gameOver() {
		// the game is over based on the checkForWin method, if its true we add the green class to the overlay if its false we add the red one then we reset the game
		const overlay = document.querySelector("#overlay");
		overlay.style.display = "";
		if (this.checkForWin()) {
			document.getElementById("game-over-message").innerHTML =
				"YaY! You Won :D";
			overlay.classList.add("win");
			overlay.classList.remove("lose");
		} else {
			document.getElementById("game-over-message").innerHTML =
				"Sorry Try Again";
			overlay.classList.add("lose");
			overlay.classList.remove("win");
		}
		this.resetGame();
	}

	resetGame() {
		// we reset the game when the Game is over wether its true or false, the missed and UL are back to default.
		this.missed = 0;
		document.querySelector("#phrase ul").innerHTML = "";
		document.querySelectorAll(".key").forEach((key) => {
			key.disabled = false; //for each key the disabled is false
			key.classList.remove("chosen", "wrong"); // remove the previous won or lost classes
			key.classList.add("key"); // we add default stance class
		});
		document.querySelectorAll(".tries img").forEach((img) => {
			// images are back to blue color
			img.src = "images/liveHeart.png";
		});
	}

	handleInteraction(button) {
		// function checks if activephrase does or not contains the selected letter, if false we add class wrong and remove a life, if true(player won) we show the selected letter and the checkforwin
		button.disabled = true;
		if (!this.activePhrase.checkLetter(button.innerHTML)) {
			button.classList.add("wrong");
			this.removeLife();
		} else {
			button.classList.add("chosen");
			this.activePhrase.showMatchedLetter(button.innerHTML);
			if (this.checkForWin()) {
				this.gameOver();
			}
		}
	}
}
