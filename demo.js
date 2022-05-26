let productNameImputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameImputElement.maxlength;

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharacters = 60 - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameImputElement.addEventListener("input", updateRemainingCharacters);
