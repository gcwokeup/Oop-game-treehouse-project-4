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
}
