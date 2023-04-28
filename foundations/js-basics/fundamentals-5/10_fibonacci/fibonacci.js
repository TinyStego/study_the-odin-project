const fibonacci = function(num) {
    if (Number.isInteger(num) && num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return num;
    }
    let curr = 1;
    let prev = 0;
    for (let i = 1; i < +num; ++i) {
        const temp = prev;
        prev = curr;
        curr = temp + curr;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
