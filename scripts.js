
function palindrome(str) {

    // Create the regex to match all alphanumerics
    var regex = /[a-z0-9]/gi;
  
    // Create the array to hold the result of match()
    var strArray = str.match(regex);
  
    // Create new string from the new array
    var newStr = strArray
    .join("")
    .toLowerCase();
  
    // Initialize empty array to hold the reverse of strArray
    var reverseStrArray = [];
  
    /* Instead of using .reverse(), loop through and
    accomplish the same thing; also, push results into
    the reverse array*/
    for(var i = newStr.length - 1; i >= 0; i--){
      reverseStrArray.push(newStr[i])
    }
  
    // Join array into new reversed string
    var reverseStr = reverseStrArray.join("");
  
    // Check if both the normal and reversed string match
    if(newStr === reverseStr){
      return true;
    } else {
      return false;
    }
  
};
  
var checkerText = document.getElementById("checkerText");
var checkerButton = document.getElementById("checker-button")
var resultDisplay = document.getElementById("result");
checkerButton.addEventListener("click", function(){

    var result = palindrome(checkerText.value)
    if(result === true){
        resultDisplay.innerText = "It is!"
    } else {
        resultDisplay.innerText = "It is not!"
    }
    document.getElementById("checkerText").style.marginTop = 0;

});

  

