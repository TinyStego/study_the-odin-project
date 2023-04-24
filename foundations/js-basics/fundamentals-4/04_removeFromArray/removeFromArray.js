const removeFromArray = function(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; ++i) {
        let isFound = false;
        for (let j = 1; j < arguments.length; ++j) {
            if (arr[i] === arguments[j]) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
