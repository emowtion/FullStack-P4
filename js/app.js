/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/*const game = new Game();
game.startGame()
const randomPhrase = game.getRandomPhrase();


const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();

console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);*/

let game;
const startBtn = document.querySelector('#btn__reset');

startBtn.addEventListener('click', function() {
    game = new Game();
    game.startGame()
})