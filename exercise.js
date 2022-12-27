// selecting the element

let heading3 = document.createElement("h3");
heading3.textContent = "Hello Friends Welcome !..";

// selecting the parent element

let paragraph = document.querySelector("p");

// add the heading

paragraph.append(heading3);

// remove the element

let heading2 = document.querySelector("h2");
heading2.remove();

// move the elements

paragraph.parentElement.append(paragraph);

console.log(paragraph.innerHTML);

paragraph.innerHTML = "Hi Bro !.. <strong>Welcome !..</strong>";
