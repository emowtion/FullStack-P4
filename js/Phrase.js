/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  addPhraseToDisplay() {
    const docFragement = document.createDocumentFragment();
    for (let i = 0; i < this.phrase.length; i++) {
      const listItems = document.createElement('li');
      const liContent = document.createTextNode(this.phrase[i]);
      listItems.appendChild(liContent);
      docFragement.appendChild(listItems);
      if (listItems.textContent === ' ') {
        listItems.classList.add('space')
      } else {
        listItems.classList.add('letter')
      }
    }
    document.querySelector('#phrase ul').appendChild(docFragement)
  }
}

