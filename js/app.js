/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.
let game = new Game();

document.getElementById('btn__reset').addEventListener("click", () => {
  game = new Game();
  game.startGame();
});


document.querySelectorAll('.key').forEach(key => {
  key.addEventListener(
      "click",
      (button) => {
        const letterPressed = button.target.innerHTML;
        game.handleInteraction(letterPressed)
      },
      {once: true}
  )
});


document.addEventListener(
    "keydown",
    (button) => {
      game.handleInteraction(button.key);
    }
);
