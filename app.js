//document.body.children[1].children[0].href = "https://google.com";
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("a");
anchorElement.href = "https://google.com";

//add an element
//1. create a new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to google";

//2. Get accsess to the parent element that should hold the new element

let secondParagraph = document.querySelector(".second-paragraph");


//3. Insert the new element into the parent element content

secondParagraph.append(newAnchorElement);

//REMOVE ELEMENTS
//1. select the element that should be removed

let firstH1Element = document.querySelector("h1");

//2. remove it!

//firstH1Element.remove();

//Alternative way to remove the element for old browsers

firstH1Element.parentElement.removeChild(firstH1Element);


//Move elements around
let firstParagraph = document.querySelector(".first-paragraph");

secondParagraph.parentElement.append(firstParagraph);

//innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>";