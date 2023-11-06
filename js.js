const count = document.querySelector("#count");
const inputField = document.getElementById("input");
const maxLength = input.getAttribute("maxlength");

inputField.onkeyup = () => {
    count.innerText = maxLength - input.value.length
};