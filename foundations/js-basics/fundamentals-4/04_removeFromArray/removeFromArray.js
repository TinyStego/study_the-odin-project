const removeFromArray = function(arr, ...items) {
    return arr.filter(x => !items.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
