console.log("javascript")
const characterAmountRange = document.getElementById
("characterAmountRange")

const characterAmountNumber = document.getElementById
("characterAmountNumber")

const includeUppercase = document.getElementById
("includeUppercase")

const includeNumbers = document.getElementById
("includeNumbers")

const includeSymbols = document.getElementById
("includeSymbols")

const form = document.getElementById
("passwordGeneratorForm")

const passwordDisplay = document.getElementById
("passwordDisplay")

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,60)).concat(
  arrayFromLowToHigh(91,96)
).concat(arrayFromLowToHigh(123,126))

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)


function syncCharacterAmount(e) {
  const value = e.target.value 
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

var generateBtn = document.getElementById("generate")

generateBtn.addEventListener('click', e => {
  e.preventDefault()
  console.log('hey')
  const characterAmount = characterAmountNumber.value
  const Uppercase = includeUppercase.checked 
  const Numbers = includeNumbers.checked 
  const Symbols = includeSymbols.checked 
  const password = generatePassword(characterAmount, Uppercase, Numbers, Symbols)
  passwordDisplay.innerText = password
})

function syncCharacterAmount(e){
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

function generatePassword(characterAmount, _includeUppercase, _includeNumbers, _includeSymbols){
  let charcodes = LOWERCASE_CHAR_CODES
  if (_includeUppercase) charcodes = charcodes.concat
  (UPPERCASE_CHAR_CODES)
  if (_includeNumbers) charcodes = charcodes.concat
  (NUMBER_CHAR_CODES)
  if (_includeSymbols) charcodes = charcodes.concat
  (SYMBOL_CHAR_CODES)
  console.log(charcodes)
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++){
    const charactercode = charcodes[Math.floor(Math.random() * charcodes.length)]
    console.log(charactercode)
    passwordCharacters.push(String.fromCharCode(charactercode))
  }
  console.log(passwordCharacters)
  return passwordCharacters.join('')
}

function generateWords(_characterAmount, _includeNumbers, 
  _includeUppercase, _includeSymbols) {
    String.fromCharCode(65)
  }

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
array.push(i)
  }
  return array
}




// Write password to the #password input
function writePassword() {
  (_characterAmount, _includeUppercase, _includeNumbers, _includeSymbols)}{
    let charcodes = LOWERCASE_CHAR_CODES
    if (UPPERCASE_CHAR_CODES) charcodes = charcodes.concat
    (UPPERCASE_CHAR_CODES)
    if (NUMBER_CHAR_CODES) charcodes = charcodes.concat
    (NUMBER_CHAR_CODES)
    if (SYMBOL_CHAR_CODES) charcodes = charcodes.concat
    (SYMBOL_CHAR_CODES)
  console.log("it works");

}

// Add event listener to generate button
//document.getElementById("generate").addEventListener("submit", writePassword);
// function generatePassword(_characterAmount, _includeUppercase, _includeNumbers, _includeSymbols){
//   let charcodes = LOWERCASE_CHAR_CODES
//   if (UPPERCASE_CHAR_CODES) charcodes = charcodes.concat
//   (UPPERCASE_CHAR_CODES)
//   if (NUMBER_CHAR_CODES) charcodes = charcodes.concat
//   (NUMBER_CHAR_CODES)
//   if (SYMBOL_CHAR_CODES) charcodes = charcodes.concat
//   (SYMBOL_CHAR_CODES)
// }
