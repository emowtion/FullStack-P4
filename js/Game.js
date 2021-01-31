/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
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
		let random = this.phrases[Math.floor(Math.random() * this.phrases.length)];
		return random;
	}
	startGame() {
		document.querySelector("#overlay").style.display = "none";
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}
	checkForWin() {
		const hideLetters = document.querySelectorAll(".hide");
		if (hideLetters.length > 0) {
			return false;
		} else {
			return true;
		}
	}
	removeLife() {
		let tries = document.querySelectorAll(".tries img");
		if (!this.checkForWin()) {
			tries[this.missed].src = "../images/lostHeart.png";
			this.missed += 1;
		}
		if (this.missed >= 5) {
			this.gameOver();
		}
	}

	gameOver() {
		if (!this.checkForWin()) {
			document.getElementById("overlay").style.display = "block";
			document.getElementById("game-over-message").innerHTML =
				"Sorry You Lost :(";
			document.querySelector(".start").classList.add("lose");
		} else {
			document.getElementById("overlay").style.display = "block";
			document.getElementById("game-over-message").innerHTML =
				"YaY! You Won :D";
			document.querySelector(".start").classList.add("win");
		}
	}
}
