/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	addPhraseToDisplay() {
		// loop over the phase sting and create an Li element for each letter
		const ul = document.querySelector("#phrase ul");
		for (let i = 0; i < this.phrase.length; i++) {
			const listItems = document.createElement("li");
			const liContent = document.createTextNode(this.phrase[i]);
			listItems.appendChild(liContent);
			if (listItems.textContent === " ") {
				// if the textcontent is empty we add a space
				listItems.classList.add("space");
			} else {
				listItems.classList.add("letter"); // if not we add the class letter and hide (grey box)
				listItems.classList.add("hide");
			}
			ul.appendChild(listItems);
		}
	}

	checkLetter(letter) {
		if (this.phrase.includes(letter)) {
			// check whether the letter is included in the phrase
			return true;
		} else {
			return false;
		}
	}

	showMatchedLetter(letter) {
		// loop over all letters if their innHTML is equal to our selected letter we remove the grey box and show it in the board
		let letterClass = document.querySelectorAll(".letter");
		for (let i = 0; i < letterClass.length; i++) {
			if (letterClass[i].innerHTML === letter) {
				letterClass[i].classList.remove("hide");
				letterClass[i].classList.add("show");
			}
		}
	}
}
