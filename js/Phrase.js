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

  checkLetter(letter) {
    for (let i = 0; i < game.activePhrase.length; i++) {
      if(letter === game.activePhrase[i]){
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
 
   showMatchedLetter(letter) {
  let letterClass = document.getElementsByClassName('letter');
    for (let i = 0; i < letterClass; i++) {
      if(this.checkLetter(letter) === letterClass.innerHTML) {
        letterClass.classList.remove('hide')
        letterClass.classList.add('show')
      }else {
        letterClass.classList.remove('show')
      }
    } 
  } 
}

