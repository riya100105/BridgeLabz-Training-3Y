// Q2: Passing a callback function as an argument

function applyOperation(numbers, operation) {
    // map() applies the given operation to every number.
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number.
const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});
console.log("Doubled:", doubledNumbers);

// Square each number.
const squaredNumbers = applyOperation(numbers, function (number) {
    return number * number;
});
console.log("Squared:", squaredNumbers);
