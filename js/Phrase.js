/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    this.phrase.split('').forEach(character => {
      const emptyBox = document.createElement('li');
      let boxClasses =
          character === " " ? "space" : "hide letter" + " " + character;

      emptyBox.classList = boxClasses;
      emptyBox.innerText = character;
      document.getElementById('phrase').firstElementChild.appendChild(emptyBox);
    })
  };
}
