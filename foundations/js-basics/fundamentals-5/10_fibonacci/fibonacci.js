const fibonacci = function(num) {
    num = Number(num);
    if (Number.isInteger(num) && num < 0) {
        return "OOPS";
    }
    if (num === 0 || num === 1) {
        return num;
    }
    let current = 1;
    let prev = 0;
    let fib = 0;
    for (let i = 1; i < num; ++i) {
        fib = current + prev;
        prev = current;
        current = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
