/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game */
  createPhrases() {
    let phraseArray = [
      "a dime a dozen",
      "a fool and his money are soon parted",
      "a piece of cake",
      "an arm and a leg",
      "back to square one"
    ];

    let result = [];

    phraseArray.forEach(phrase => {
      result.push(new Phrase(phrase));
    });

    return result;
  };

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randomPhraseIndex =
        Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhraseIndex];
  };

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element */
  handleInteraction(button) {
    console.log(button);
    let onScreenButton =
        Array.from(document.querySelectorAll('.key')).find(
            el => el.textContent === button
        );
    onScreenButton.disabled = true;
    let phraseContainsLetter = this.activePhrase.checkLetter(button)

    if (phraseContainsLetter) {
      onScreenButton.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button);
      if (this.checkForWin()) {
        this.gameOver(true)
      }

    } else {
      onScreenButton.classList.add("wrong");
      this.removeLife();
    }

  };

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't
   won */
  checkForWin() {
    return document.querySelectorAll('.hide').length === 0;
  };

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    let heartIndex = this.missed;
    this.missed += 1;
    if(this.missed > 4) {
      this.gameOver(false);
    }

    document.querySelectorAll(
        '.tries'
    )[heartIndex].childNodes[0].src = "images/lostHeart.png";
  };

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game */
  gameOver(gameWon) {
    if (gameWon) {
      document.getElementById('game-over-message').innerText = "Yay! You figured it out!"
      document.getElementById('overlay').className = "start win";
    } else {
      document.getElementById('game-over-message').innerText  = "Aww! I bet you can win next game."
      document.getElementById('overlay').className = "start lose";
    }

    // show overlay
    document.getElementById('overlay').style.display = 'flex';

    // Remove all phrase letters
    let phraseElement = document.getElementById('phrase').firstElementChild;
    while (phraseElement.firstChild) {
      phraseElement.removeChild(phraseElement.firstChild);
    }

    Array.from(document.querySelectorAll('.key')).forEach((key) => {
      key.className = "key";
    })
  };

  // Reset hearts
  resetHearts() {
    document.querySelectorAll(
        '.tries'
    ).forEach((oneTry) => {
      oneTry.childNodes[0].src = "images/liveHeart.png";
    });
  };
}
