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
  if (pwdlength >7 && pwdlength <129 && pwdlength !== "") {
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
      options.push("special");
    } else {
      alert("Your password will NOT include special characters.")
    };
  } else if (pwdlength === "" && pwdlength !== null) {
    // Prompt empty
    alert("Please choose a password length between 8 and 128 characters.");
    generatePassword();
  };

  // Iterate on each array to get a value
  for (let i = 0; i < pwdlength; i++) {
    // Get index value from options variable to match on further IFs
    let randomCharGen = options[Math.floor(Math.random() * options.length)];
    
    // 1. Takes a random letter from the array
    if (randomCharGen === "letters") {
      let char = letters[Math.floor(Math.random() * letters.length)];
      gendPwd = gendPwd + char;
    };

    // 2. Takes a random CAPITAL letter from the array
    if (randomCharGen === "caps") {
      let char = caps[Math.floor(Math.random() * caps.length)];
      gendPwd = gendPwd + char;
    };

    // 3. Takes a random number from the array
    if (randomCharGen === "numbers") {
      let char = numbers[Math.floor(Math.random() * numbers.length)];
      gendPwd = gendPwd + char;
    };

    // 4. Takes a random special character from the array
    if (randomCharGen === "special") {
      let char = specChars[Math.floor(Math.random() * specChars.length)];
      gendPwd = gendPwd + char;
    };
  };

  // Inputs generated password to text box
  return gendPwd;

};