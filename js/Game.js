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
		this.missed = 0;
		document.querySelector("#phrase ul").innerHTML = "";
		document.querySelectorAll(".key").forEach((key) => {
			key.disabled = false;
			key.classList.remove("chosen", "wrong");
			key.classList.add("key");
		});
		document.querySelectorAll(".tries img").forEach((img) => {
			img.src = "../images/liveHeart.png";
		});
		document.querySelectorAll(".show").forEach((element) => {
			element.classList.remove("show");
			element.classList.add("hide");
		});
		
	}

	handleInteraction(button) {
		button.disabled = true;
		if (!this.activePhrase.checkLetter(button.innerHTML)) {
			button.classList.add("wrong");
			this.removeLife();
		} else {
			button.classList.add("chosen");
			this.activePhrase.showMatchedLetter(button.innerHTML);
			this.checkForWin();
		}
		if (this.checkForWin()) {
			this.gameOver();
		}
	}
}
