// Q8: Creating a custom myMap() method for all arrays

Array.prototype.myMap = function (callback) {
    const result = [];

    // Visit each element and store the callback's returned value.
    for (let index = 0; index < this.length; index++) {
        // Match the built-in map() behavior by skipping empty array slots.
        if (index in this) {
            result[index] = callback(this[index], index, this);
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(function (number) {
    return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6]
