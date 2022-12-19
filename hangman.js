const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []  
  this.status = 'Playing'
} 

Hangman.prototype.calculateStatus = function () {
  const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
  /*const lettersUnguessed = this.word.filter((letter) => {
    return !this.guessedLetters.includes(letter)
  })
  const finished = lettersUnguessed.length === 0*/

  /*let finished = true
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter)) {
      
    } else {
      finished = false
    }
  })*/

  if (this.remainingGuesses === 0) {
    this.status = 'Failed'
  } else if (finished) {
    this.status = 'Finished'
  } else {
    this.status = 'Playing'
  }  
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''  

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })  
  return puzzle
}  

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }    

  this.calculateStatus()
} 


