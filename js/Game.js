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
        this.activePhrase = (this.getRandomPhrase().addPhraseToDisplay())
    }
    
}

