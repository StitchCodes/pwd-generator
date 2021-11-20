// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//  My code
let pwdlength = prompt("how many characters? (1-128)");

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let numbers = [1,2,3,4,5,6,7,8,9,0];

if (pwdlength >1 && pwdlength <128) {
  alert("You chose " + pwdlength + " characters.");
}
