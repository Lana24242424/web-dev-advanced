let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxlength;

function updateRemainingCharacters(event) {
 let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharacters = 60 - enteredTextLength;

  
  remainingCharsElement.textContent = remainingCharacters;
  
  if (remainingCharacters === 0) {
  remainingCharsElement.classList.add("error");
  productNameInputElement.classList.add("error");

  }  else if(remainingCharacters <= 10) {
    remainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");

  }
  else{
    remainingCharsElement.classList.remove("error", "warning");
  productNameInputElement.classList.remove("error", "warning");
 
  }

}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
