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

// let random = Math.floor(Math.random() * pwdlength.length);
// console.log(random, months[random]);

function generatePassword() {
  // Variables
  let pwdlength = prompt("How many characters? (8-128)");

  let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  let numbers = [1,2,3,4,5,6,7,8,9,0];

  let specChars = [" ", "!", "#", "$", "%", "&", "(",")","*", "/", "_", "-", "="]

  // Test IF for iteration
  if (pwdlength >7 && pwdlength <128) {
    alert("You chose " + pwdlength + " characters.");
    
    // Letters Option
    let lettersOption = prompt("Include letters? yes/no");
    if (lettersOption === "yes") {
      alert("Your password will include letters.");
    } else {
      alert("Your password will NOT include letters.")
    }
    
    // Numbers Option
    let numbersOption = prompt("Include numbers? yes/no");
    if (numbersOption === "yes") {
      alert("Your password will include numbers.");
    } else {
      alert("Your password will NOT include numbers.")
    }
    
    //  Special Characters Option
    let specCharsOption = prompt("Include special characters? yes/no");
    if (specCharsOption === "yes") {
      alert("Your password will include special characters.");
    } else {
      alert("Your password will NOT include special characters.")
    }

    // If for password generator
    if (lettersOption === "yes" && numbersOption === "yes" && specCharsOption === "yes") {
      let random = Math.floor(Math.random() * pwdlength.length);
      console.log(random);
      return random;
    }

  } else {
    alert("Please choose a number of characters between 8 and 128.");
  }
}