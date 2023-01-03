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

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getCountry('UA').then((country) => {
  console.log(country)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getLocation().then((location) => {
  //console.log(`You are currently in ${location.city}, ${location.region}, ${location.country}!`)
  return getCountry(location.country)
}).then((country) => {
  console.log(country)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

