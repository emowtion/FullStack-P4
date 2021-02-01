/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
game = new Game();

const startBtn = document.querySelector("#btn__reset");
const keys = document.querySelectorAll(".key");

startBtn.addEventListener("click", function () {
	game.startGame();
});

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click',(button)=>{
        game.handleInteraction(button.target)
    })
    
}