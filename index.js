let paragraph = document.querySelector("p");

function changeParagraphText() {
  paragraph.textContent = "Clicked !..";
}

paragraph.addEventListener("click", () => {
  paragraph.textContent = "Clicked !..";
});

let inputElement = document.querySelector("input");

function retriveUserInput() {
  let enteredText = inputElement.value;
  console.log(enteredText);
}

inputElement.addEventListener("input",retriveUserInput);
