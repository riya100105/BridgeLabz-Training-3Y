// Q7: Closure

function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier variable.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

const double = makeMultiplier(2);
console.log(double(5)); // 10

// Closure: the inner function keeps access to the multiplier value
// from the outer function, even after makeMultiplier() has finished.
