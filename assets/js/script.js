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


//  ******
// MY CODE
//  ******

function generatePassword() {
  // Variables
  let pwdlength = prompt("How many characters? (8-128)");
  let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let numbers = [1,2,3,4,5,6,7,8,9,0];
  let specChars = [",", "!", "#", "$", "%", "&", "(",")","*", "/", "_", "-", "="]
  let options = [];
  let gendPwd = "";

  // If with loop to get required values
  if (pwdlength >7 && pwdlength <129) {
    alert("You choose " + pwdlength + " characters.");
    
    // Letters Option
    let lettersOption = prompt("Include letters? yes/no");
    if (lettersOption.toLowerCase() === "yes") {
      alert("Your password will include letters.");
      options.push("letters");
    } else {
      alert("Your password will NOT include letters.")
    }

    // Caps Option
    let capsOption = prompt("Include letters? yes/no");
    if (capsOption.toLowerCase() === "yes") {
      alert("Your password will include CAPITAL letters.");
      options.push("caps");
    } else {
      alert("Your password will NOT include CAPITAL letters.")
    }
    
    // Numbers Option
    let numbersOption = prompt("Include numbers? yes/no");
    if (numbersOption.toLowerCase() === "yes") {
      alert("Your password will include numbers.");
      options.push("numbers");
    } else {
      alert("Your password will NOT include numbers.")
    }
    
    //  Special Characters Option
    let specCharsOption = prompt("Include special characters? yes/no");
    if (specCharsOption.toLowerCase() === "yes") {
      alert("Your password will include special characters.");
      options.push("special")
    } else {
      alert("Your password will NOT include special characters.")
    }

    // If ALL yes THEN Generate Password
    if (lettersOption === "yes" && numbersOption === "yes" && specCharsOption === "yes") {

      // Iterate the password length for each of the choosen options
      for (i=0; i < pwdlength; i++) {
        // Get a Random Value from each string
        let randomLetter = Math.floor(Math.random() * letters.length);
        let randomNumber = Math.floor(Math.random() * numbers.length);
        let randomSpChar = Math.floor(Math.random() * specChars.length);
        
        console.log("Letter choosen:" , randomLetter);
        console.log("Letter choosen:" , randomNumber);
        console.log("Letter choosen:" , randomSpChar);

        // Sends text to global variable to print on textbox
        return letters[random];

      };
      
    }

  } else {
    alert("Please choose a number of characters between 8 and 128.");
  }
}