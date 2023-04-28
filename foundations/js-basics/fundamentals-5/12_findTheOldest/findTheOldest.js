const findTheOldest = function(people) {
    return people.sort((a, b) => {
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        return (aAge < bAge) ? 1 : -1;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
