const removeFromArray = function(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== item) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
