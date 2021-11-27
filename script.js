const codeName = document.getElementById("name-field").value;
const submitButton = document.getElementById("name-submit");

const lengthValid = document.getElementById("length");
const casesValid = document.getElementById("letter-cases");
const numberValid = document.getElementById("number");

const result = document.getElementById("result");

function nameLength() {
    const codeName = document.getElementById("name-field").value;
    if (codeName.length <= 5) {
        lengthValid.checked = false;
        return false;
    }
    else {
        lengthValid.checked = true;
        return true;
    }
}

function nameLetterCases() {
    const codeName = document.getElementById("name-field").value;
    if (/[a-z]/.test(codeName) && /[A-Z]/.test(codeName)) {
        casesValid.checked = true;
        return true;
    }
    else {
        casesValid.checked = false;
        return false;
    }
}

function nameHasNumber() {
    const codeName = document.getElementById("name-field").value;
    if (/\d/.test(codeName)) {
        numberValid.checked = true;
        return true;
    }
    else {
        numberValid.checked = false;
        return false;
    }
}

function nameValidOrNot() {
    if (nameLength() && nameLetterCases() && nameHasNumber()) {
        result.innerText = document.getElementById("name-field").value + " is perfect! This is a real codename material.";
        result.style.background = "rgba(57, 165, 57, 0.5)"
        return true;
    }
    else {
        result.innerText = document.getElementById("name-field").value + " does not meet the criteria. You should work on it.";
        result.style.background = "rgba(255, 0, 0, 0.35)"
        return false;
    }
 }

submitButton.addEventListener("click", nameLength);
submitButton.addEventListener("click", nameLetterCases);
submitButton.addEventListener("click", nameHasNumber);
submitButton.addEventListener("click", nameValidOrNot);

let closeButton1 = document.getElementById("close-button1");
let closeButton2 = document.getElementById("close-button2");
let bubbleDiv1 = document.getElementById("speech-bubble1");
let bubbleDiv2 = document.getElementById("speech-bubble2");
let validator = document.getElementById("main-content");

function closeBubble1() {
    bubbleDiv1.setAttribute('hidden','');
    bubbleDiv2.removeAttribute('hidden', '');
}

function closeBubble2() {
    bubbleDiv2.setAttribute('hidden','');
    validator.removeAttribute('hidden', '');
}

closeButton1.addEventListener("click", closeBubble1)
closeButton2.addEventListener("click", closeBubble2)