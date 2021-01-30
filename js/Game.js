/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('i love you'),
            new Phrase('i miss you'),
            new Phrase('you are my life'),
            new Phrase('you are my breath'),
            new Phrase('you are my cat')
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        let random = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return random;
    };
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);
        }
    checkForWin() {
       /*  This method checks to see if the player has revealed all of the
        letters in the active phrase. (recuperer tout les hide en tableau) ça veut dire que si j'ai pas les show j'ai fail donc si
        hide[i] === 0 return false debile va 
        */
       const hideLetters = document.querySelectorAll('.hide');
    
        
        
    }
}

