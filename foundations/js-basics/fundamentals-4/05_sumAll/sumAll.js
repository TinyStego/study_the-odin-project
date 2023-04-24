const sumAll = function(int1, int2) {
    const range = getMinMax(int1, int2);
    let sum = 0;
    for (let i = range.min; i <= range.max; ++i) {
        sum += i;
    }
    return sum;
};

function getMinMax(int1, int2) {
    if (int1 < int2) {
        return { min: int1, max: int2 };
    }
    return { min: int2, max: int1 };
}

// Do not edit below this line
module.exports = sumAll;
