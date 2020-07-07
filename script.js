// Assignment Code
var generateBtn = document.querySelector("#generate");

// Establishing variables, converting strings to arrays & splitting them
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var lowerCaseArray = lowerCase.split("");
console.log(lowerCaseArray)

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upperCaseArray = upperCase.split("");
console.log(upperCaseArray)

const numbers = '0123456789';
var numbersArray = numbers.split("");
console.log(numbersArray)

const specialCharacters = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var specialCharactersArray = specialCharacters.split("");
console.log(specialCharactersArray)

// Establishing numeric character length with min of 8 & max of 128
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

// Establishing desired parameters (lower case, upper case, numbers, and/or characters)
  const isLower = confirm("Would you like lower case characters?");
  const isUpper = confirm("Would you like upper case characters?");
  const isNumber = confirm("Would you like numbers?");
  const isSpecial = confirm("Would you like special characters?");

// User must pick one of them
  if(isLower === false && isUpper === false && isNumber === false && isSpecial === false) {
    alert("Must choose one character type.");
    return;
  }

// Establishing password parameters
  const passwordOptions = {
    isLower,
    isUpper,
    isNumber,
    isSpecial,
    passwordLength,
  }
  return passwordOptions;
}

// Builds password based on those parameters
function buildPassword() {
  const options = getPasswordOptions();
  const results = [];
  let superArray = [];

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

// Setting loop to randomize choice in various arrays
  for(var i = 0; i < options.passwordLength; i++) {
  const index = Math.floor(Math.random() * superArray.length);
  const digit = superArray[index];
    results.push(digit)
    console.log(results);
  }
  return results.join("")
}

// Writing password to the #password input
function writePassword() {
  const password = buildPassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);