const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat Love', 4)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status)

  window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle    
    guessesEl.textContent = game1.statusMessage  
  })

getPuzzle('2', (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }  
})

getCountry('MX', (error, country) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(`Country name: ${country}`)
  }
})



