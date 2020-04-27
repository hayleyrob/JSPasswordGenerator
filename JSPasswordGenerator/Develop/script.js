// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Varibles to check character types and length
  const passwordLength = parseInt(prompt('Enter a password between 8 and 128 characters'))
  //Alert user if password length doesn't fit criteria
  if (passwordLength < 0 || passwordLength > 120) {
    alert('Please enter a password between 8 and 128 characters')
  }
  //Alert for upperCharacters
  const upperCharConf = confirm('Would you like your password to contain uppercase letters?')
  //Alert for lower characters
  const lowerCharConf = confirm('Would you like your password to contain lowercase letters?')
  //alert for special characters
  const specCharConfirm = confirm('Would you like your password to contain special characters?')
  const integerCharConfirm = confirm('Would you like your password to contain numbers?')

  //Char type definitions
  const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerChar = 'abcdefghijklmnopqrstuvwxyz'
  const specChar = '!@#$%^&*./?, {}[] | ~`=+-:;<>'
  const integer = '0123456789'
}
//password placeholder while being generated
let draftPass = ''
//generated password
newPassword = ''

//Add uppercase characters to draftpassword if confirmed
if (upperCharConf) {
  draftPass += upperChar;
}
//Add lowercase characters to draftpassword if confirmed
if (lowerCharConf) {
  draftPass += lowerChar;
}

//add special characters to draftpassword if confirmed
if (specCharConfirm) {
  draftPass += specChar;
}

//add numbers to draft password if confirmed
if (integerCharConfirm) {
  draftPass += integer;
}
//for combining with math.random logic 
for (let i = 0; i < passwordLength; i++) {
  let randomGen = Math.floor(Math.random() * draftPass.length)
  newPassword += draftPass[randonGen]
}
return newPassword
}

const password = generatePassword();
const passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
alert(password)
