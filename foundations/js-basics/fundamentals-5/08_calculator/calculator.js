const add = function(x, y) {
    return x + y;	
};

const subtract = function(x, y) {
    return x - y;	
};

const sum = function(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);	
};

const multiply = function(numbers) {
    return numbers.reduce((total, number) => {
        return total * number;
    }, 1);	
};

const power = function(num, pow) {
    let total = 1;
    for (let i = 0; i < pow; ++i) {
        total *= num;
    }
    return total;
};

const factorial = function(num) {
    if (num === 0) {
        return 1;
    }
    let total = 1;
    for (let i = 1; i <= num; ++i) {
        total *= i;
    }
    return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
