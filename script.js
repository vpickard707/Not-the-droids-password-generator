// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Arrays of character types
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", 
"D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T" "U" "V", "W", "X", "Y", "Z"];

var otherChar = { "!", "@", "#", "$", "%", "^", "&","*" }}

var number = [0,1,2,3,4,5,6,7,8,9]

var inputLength = prompt("How long do you want your password to be? Use between 8 and 128 characters.")
  
//if inputLength is number 
//then var passLength = parseInt(inputLength)
// else

  var passLength = parseInt()
  var useUpper = confirm('Should contain uppercase?')
  var useSpec = confirm('Should contain special characters')
  var useNumber = confirm('Shouldcontain numbers?')

  genPass(passLength, useUpper, useSpec, useNumber)
// Add event listener to generate button
  
  }

  function genPass(;ength, upper, spec, num){
    const availableChar = [
    lowerletters
    ]

    if(upper){
      availableChar.push(upperLetters)
    }
    if(spec) {
      availableChar.push(otherChars)

    if(num) {
      availableChar.push(numbers) 
    }
    for var i = 0; i , length; i++){
      generatePassword.push(randomIndex
        (selectedOption))

    }
    console.log(selectedOption)
    console.log(guaranteed)

generateBtn.addEventListener("click", writePassword);
