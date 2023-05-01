const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
}
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let expressions = [];
let isLastDisplayCalc = false;
let wasEqualPressed = false;
let wasOpPressed = false;
let wasDecPressed = false;

document.addEventListener('DOMContentLoaded', () => {
    display.value = "";
});

buttons.forEach(button => button.addEventListener("click", () => {
    if (button.textContent in operations) {
        newOp(button.textContent);
    } else if (button.textContent === "C") {
        clearDisplay();
    } else if (button.textContent === "=") {
        calculate();
    } else if (button.textContent === "DEL") {
        del();
    } else if (button.textContent === ".") {
        if (!wasDecPressed) {
            if (display.value.length === 0 || wasEqualPressed || wasOpPressed) {
                addToDisplay("0.");
            } else if (display.value.length > 0) {
                addToDisplay(button.textContent);
            }
            wasDecPressed = true;
            isLastDisplayCalc = false;
        }
    } else if (Number(button.textContent) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        addToDisplay(button.textContent);
        if (wasEqualPressed) { 
            resetCalc();
            wasEqualPressed = false;
        }
        isLastDisplayCalc = false;
        wasOpPressed = false;
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

function newOp(op) {
    const num = Number(display.value);
    wasEqualPressed = false;
    wasDecPressed = false;
    isLastDisplayCalc = true;
    if (wasOpPressed) {
        expressions[1] = op;
        return;
    }
    if (expressions.length === 0) {
        expressions[0] = num;
        expressions[1] = op;
    } else if (expressions.length === 2 && !wasEqualPressed) {
        expressions[0] = operate(expressions[1], expressions[0], num);
        expressions[1] = op;
    }
    wasOpPressed = true;
}

function calculate() {
    const num = Number(display.value);
    isLastDisplayCalc = true;
    wasDecPressed = false;
    wasOpPressed = true;
    if(!wasEqualPressed) {
        expressions[0] = operate(expressions[1], expressions[0], num); 
        wasEqualPressed = true;
    }
}

function clearDisplay() {
    isLastDisplayCalc = true;
    wasDecPressed = false;
    resetCalc();
    addToDisplay("");
}

function resetCalc() {
    expressions = [];
}

function del() {
    if (isLastDisplayCalc) {
        return;
    }
    if (display.value.length >= 1) {
        display.value = display.value.substring(0, display.value.length - 1);
    }
}
