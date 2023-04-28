const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
}
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let exp = [];
let index = 0;
let pressedEqual = false;

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
    if (item in operations) {
        return;
    }
    display.value = item;
}

function operator(op) {
    const num = Number(display.value);
    const prev = index - 1;
    exp[index] = [0,0,0];
    if (index === 0) {
        exp[index][0] = num;
        exp[index][1] = op;
    } else if (index > 0) {
        if (!pressedEqual) {
            exp[prev][2] = num;
        }
        exp[index][0] = operate(exp[prev][1], exp[prev][0], exp[prev][2]);
        exp[index][1] = op;
    }
    index++;
    pressedEqual = false;
}

function calculate() {
    const num = Number(display.value);
    const lastExp = index - 1;
    if(!pressedEqual) {
        exp[lastExp][2] = num;
        operate(exp[lastExp][1], exp[lastExp][0], exp[lastExp][2]);
        pressedEqual = true;
    }
}

function clearDisplay() {
    addToDisplay("");
    exp = [];
    index = 0;
}
