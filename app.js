// HTTP (Hypertext Transfer protocol)
// Request - What do we want to do
// Response - What was actually done
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

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {    
    const data = JSON.parse(e.target.responseText)
    console.log(data)
  } else if (e.target.readyState === 4) {
    console.log('And error has taken place')
  } 
})

request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = 'UA'
const contryRequest = new XMLHttpRequest()

contryRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    const country = data.find((country) => country.cca2 === countryCode)
    console.log(country.name.common)    
  } else if (e.target.readyState === 4) {
    console.log('Unable to fetch data')
  }
})

contryRequest.open('GET', 'https://restcountries.com/v3.1/all')
contryRequest.send()

