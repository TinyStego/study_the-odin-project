const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
}
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const exp = [];
let index = 0;

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
    result = operations[op](num1, num2);
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
    if (index === 0) {
        exp[index] = [0,0,0];
        exp[index][0] = num;
        exp[index][1] = op;
    } else if (index > 0) {
        exp[index] = [0,0,0];
        exp[prev][2] = num;
        exp[index][0] = operate(exp[prev][1], exp[prev][0], exp[prev][2]);
        exp[index][1] = op;
    }
    index++;
}

function calculate() {
    let expression = display.value;
    if (expression[expression.length - 1] in operations) {
        return;
    }

    display.value = test;
}
