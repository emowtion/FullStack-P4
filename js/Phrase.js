/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	addPhraseToDisplay() {
		const ul = document.querySelector("#phrase ul");
		for (let i = 0; i < this.phrase.length; i++) {
			const listItems = document.createElement("li");
			const liContent = document.createTextNode(this.phrase[i]);
			listItems.appendChild(liContent);
			if (listItems.textContent === " ") {
				listItems.classList.add("space");
			} else {
				listItems.classList.add("letter");
				listItems.classList.add("hide");
			}
			ul.appendChild(listItems);
    }
    
	}

	checkLetter(letter) {
		if (this.phrase.includes(letter)) {
			return true;
		} else {
			return false;
		}
	}

	showMatchedLetter(letter) {
		let letterClass = document.querySelectorAll(".letter");
		for (let i = 0; i < letterClass.length; i++) {
			if (letterClass[i].innerHTML === letter) {
				letterClass[i].classList.remove("hide");
				letterClass[i].classList.add("show");
			}
		}
	}
}
