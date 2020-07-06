// Assignment Code
var generateBtn = document.querySelector("#generate");

const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
var lowerCaseArray = LowerCase.split("");
console.log(lowerCaseArray)

const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upperCaseArray = UpperCase.split("");
console.log(upperCaseArray)

const numbers = '0123456789';
var numbersArray = numbers.split("");
console.log(numbersArray)

const specialCharacters = '`~!?';
var specialCharactersArray = specialCharacters.split("");
console.log(specialCharactersArray)

function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like it to be?"));

  if(isNaN(passwordLength) === true) {
    alert("must be a number");
    return;
  }
  if(passwordLength < 8) {
    alert("password length must be greater than 8");
    return;
  }
  if(passwordLength > 128) {
    alert("password length must be less than 128");
    return;
  }
  console.log(passwordLength)
  var isLower = confirm("Would you like lower case characters?");
  var isUpper = confirm("Would you like upper case characters?");
  var isNumber = confirm("Would you like numbers?");
  var isSpecial = confirm("Would you like special characters?");

  if(isLower === false && isUpper === false && isNumber === false && isSpecial === false) {
    alert("Must choose one character type.");
    return;
  }
  var passwordOptions = {
    isLower,
    isUpper,
    isNumber,
    isSpecial,
    passwordLength,
  }
  return passwordOptions;
}

function buildPassword() {
  var options = getPasswordOptions();
  var results = [];
  var superArray = [];

  if(options.isLower === true) {
    superArray = superArray.concat(lowerCaseArray);
  }
  if(options.isUpper === true) {
    superArray = superArray.concat(upperCaseArray);
  }
  if(options.isNumber === true) {
    superArray = superArray.concat(numbersArray);
  }
  if(options.isSpecial === true) {
    superArray = superArray.concat(specialCharactersArray);
  }
  console.log(superArray)

  for(var i = 0; i < options.passwordLength; i++) {
  var index = Math.floor(Math.random() * superArray.length);
  var digit = superArray[index];
    results.push(digit)
    console.log(results);
  }
  return results.join("")
}

// Write password to the #password input
function writePassword() {
  var password = buildPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
