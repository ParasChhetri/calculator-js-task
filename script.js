// FOR OUR BUTTONS 
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

// SIGLE BUTTONS
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equal]");
const previousText = document.querySelector("[data-previous-operand]");
const currentText = document.querySelector("[data-current-operand]");

function add () {
    let result = numberButtons + operationButtons;
    currentText.innerHTML = result;
    console.log("Add button working");
}