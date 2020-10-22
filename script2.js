var generateBtn = document.querySelector("#generate");
//Arrays of character types
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&","*"];
var number = [0,1,2,3,4,5,6,7,8,9];
var lowerAnswer 
var upperAnswer 
var specialAnswer 
var numberAnswer
var inputLength

generateBtn.addEventListener("click", genPass);

    function genPass(){
    const availableChar = []

    inputLength = parseInt (prompt("Choose a password length between 8 and 128"))

            if (isNaN(inputLength)) 
            {
                alert ("Please enter a number value between 8 and 128.");
                // return false;
            }
            if (inputLength < 8 || inputLength > 128){
                alert("between 8 and 128, please.");
                // return false;
            }else {
             
    upperAnswer = confirm('Should your password contain uppercase letters?')
    lowerAnswer = confirm('Should your password contain lowercase letters?')


    if(upperAnswer){
        availableChar.push(upperLetters)
    }

    
    if(lowerAnswer){
        availableChar.push(lowerLetters)
    }

    specialAnswer = confirm('Should your password contain special characters?')

    if(specialAnswer) {
      availableChar.push(otherChars)
    }

    numberAnswer = confirm('Should your password contain numbers?')

    if(numberAnswer) {
      availableChar.push(numbers) 
    }
    } 

    // for var i = 0; i , length; i++){
    //   generatePassword.push(randomIndex
    //     (selectedOption))

    }
    // console.log(selectedOption)
    // console.log(guaranteed)

// -------------------------------------------
// function writePassword() {
//     var check = false;
//     while (true){   
//         var inputLength = prompt("Choose your password length - between 8 and 128");
//         if (inputLength != null) {
//             check = checkinput(inputLength);
//             console.log("check:"+ check)
//             if (check === true){
//                 break;
//             }
//         }
//     }
//     var check = false;    
//     while (true){
//         var inputLower = prompt("Do you want lowercase in your password? Y or N");
//         if (inputLower != null) {
//             lowerAnswer = checkYorN(inputLower);
//             console.log("check:"+ check)
//             if (lowerAnswer === "Y" || lowerAnswer === "N"){
//                 break;
//             }
//         }    
//     }
//     document.getElementById("password").innerHTML = lowerAnswer;
// }

// var check = false;    
// while (true){
//     var inputUpper = prompt("Do you want uppercase in your password? Y or N");
//     if (inputUpper!= null) {
//         lowerAnswer = checkYorN(inputUpper);
//         console.log("check:"+ check)
//         if (upperAnswer === "Y" || upperAnswer === "N"){
//             break;
//         }
//     }    
// } 

//     var check = false;    
//     while (true){
//         var special = prompt("Do you want special characters in your password? Y or N");
//         if (special != null) {
//             special = checkYorN(special);
//             console.log("check:"+ check)
//             if (special === "Y" || special === "N"){
//                 break;
//             }
//         }    
//     }
    
// function checkinput (input) {
//     if (isNaN(input)) 
//     {
//         //alert ("a number, please.");
//         return false;
//     }
//     if (input < 8 || input > 128){
//         //alert("between 8 and 128, please.");
//         return false;
//     }
//     else {
//         return true;
//     } 
//   }

// function checkYorN (input){
//     switch(input) {
//         case "Y":
//           // code block
//           return "Y";
//           break;
//         case "N":
//           // code block
//           return "N";
//           break;
//         default:
//           // code block
//       }
// }