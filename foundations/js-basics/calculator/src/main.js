let num1 = 0;
let num2 = 0;
let op   = "";

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
    const operations = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide
    }
    return operations[op](num1, num2);
}
