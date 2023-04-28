const findTheOldest = function(people) {
    return oldest = people.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const aAge = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const bAge = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        return (aAge < bAge) ? 1 : -1;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
