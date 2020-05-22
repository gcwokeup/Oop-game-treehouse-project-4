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
    });
  };

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  };

  /**
   * Displays passed letter on screen after a match is found * @param (string)
   * letter - Letter to display
   */
  showMatchedLetter(letter) {
    document.querySelectorAll("." + letter).forEach(matchingCharacter => {
      matchingCharacter.className =
          matchingCharacter.className.replace(/(?:^|\s)hide(?!\S)/g , 'show')
    })
  };
}

