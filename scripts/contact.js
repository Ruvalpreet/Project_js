// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit_button = document.getElementById("submit-button");
let contant_page = document.getElementById("contact-page");
let message = "Thank you for your message";

function clickies(){
    contant_page.innerHTML = message;
    contant_page.style.fontSize = "24px";
}

submit_button.addEventListener("click",clickies);
