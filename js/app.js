/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.
let game = new Game();

document.getElementById('btn__reset').addEventListener("click", () => {
  game = new Game();
  game.startGame();
  game.resetHearts();
});

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener(
      "click",
      (button) => {
        if (!button.disabled) {
          const letterPressed = button.target.innerHTML;
          game.handleInteraction(letterPressed)
        }
      },false
  )
});
