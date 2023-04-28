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

const multiply = function(x, y) {
    return x * y;
};

const power = function() {
	
};

const factorial = function() {
	
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
