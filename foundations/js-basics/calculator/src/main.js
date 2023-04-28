const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
}
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let expressions = [];
let currentExpIndex = 0;
let equalWasPressed = false;
let isLastDisplayCalc = false;
let operationWasPressed = false;

buttons.forEach(button => button.addEventListener("click", () => {
    if (button.textContent in operations) {
        operator(button.textContent);
    } else if (button.textContent === "C") {
        clearDisplay();
    } else if (button.textContent === "=") {
        calculate();
    } else if (button.textContent === "DEL") {
        del();
    } else if (Number(button.textContent) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        addToDisplay(button.textContent);
        if (equalWasPressed) {
            resetCalc();
            equalWasPressed = false;
        }
        isLastDisplayCalc = false;
        operationWasPressed = false;
    }
}));

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    if (op === "/" && num2 === 0) {
        addToDisplay("Error: Division by 0");
        return;
    }
    let result = operations[op](num1, num2);
    result = Math.round(result * 100) / 100;
    addToDisplay(result);
    return result;
}

function addToDisplay(item) {
    display.value = isLastDisplayCalc ? item : display.value + item;
}

function operator(op) {
    const num = Number(display.value);
    const prev = currentExpIndex - 1;
    isLastDisplayCalc = true;
    expressions[currentExpIndex] = [0,0,0];
    if (currentExpIndex === 0) {
        expressions[currentExpIndex][0] = num;
        expressions[currentExpIndex][1] = op;
    } else if (operationWasPressed) {
        expressions[prev][1] = op;
        return;
    } else if (currentExpIndex > 0) {
        if (!equalWasPressed) {
            expressions[prev][2] = num;
        }
        expressions[currentExpIndex][0] = operate(expressions[prev][1], expressions[prev][0], expressions[prev][2]);
        expressions[currentExpIndex][1] = op;
    }
    currentExpIndex++;
    equalWasPressed = false;
    operationWasPressed = true;
}

function calculate() {
    const num = Number(display.value);
    const lastExp = currentExpIndex - 1;
    isLastDisplayCalc = true;
    if(!equalWasPressed) {
        expressions[lastExp][2] = num;
        operate(expressions[lastExp][1], expressions[lastExp][0], expressions[lastExp][2]);
        equalWasPressed = true;
    }
}

function clearDisplay() {
    isLastDisplayCalc = true;
    resetCalc();
    addToDisplay("");
}

function resetCalc() {
    expressions = [];
    currentExpIndex = 0;
}

function del() {
    if (isLastDisplayCalc) {
        return;
    }
    if (display.value.length >= 1) {
        display.value = display.value.substring(0, display.value.length - 1);
    }
}
