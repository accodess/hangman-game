const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  //const country = await getCountry(location.country)
  return getCountry(location.country)
}

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.com/v3.1/all')
 
  if (response.status === 200) {
      const data = await response.json()
      const country = data.find((country) => country.cca2 === countryCode)
      return country.name.common
    } else {
      throw new Error('Unable to fetch the data')
    }  
}

const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=0a652d5f7565fe')
  
    if (response.status === 200) {
      return response.json()     
    } else {
      throw new Error('Unable to get the current location')
    }
}





