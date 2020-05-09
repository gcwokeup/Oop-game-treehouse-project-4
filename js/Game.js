/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 //The class should include a constructor that initializes the following properties:
 class Game {
    constructor (missed= 0, phrases= [], activePhrase= null) {
    //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
      this.missed = missed;
    //phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
      this.phrases = phrases;
    //activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
      this.activePhrase = activePhrase;
    }
    startGame(){
        //hides the start screen overlay
        gameStartOverlay.style.display = "none"
        //calls the getRandomPhrase() method  &  sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        //activePhrase = this.getRandomPhrase();
    }
    createPhrases(){ 
        //creates and returns an array of 5 new Phrase objects, and then set the `phrases` property to call that method.
        phraseArray.forEach(phraseString => {
            const phraseObject = new Phrase(phraseString);
            this.phrases.push(phraseObject)
        })
        return this.phrases
    }
    
    getRandomPhrase = () => this.phrases[generateRandomNumber(phraseArray.length,0)] 
        //this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    handleInteraction(){
        // this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
        // Disable the selected letter’s onscreen keyboard button.
        // If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
        // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
    }
    removeLife(){
        // this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    }
    checkForWin(){
        // this method checks to see if the player has revealed all of the letters in the active phrase.
    }  
    gameOver(){
        // this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
        gameStartOverlay.style.display = "inline"
    }
 }
