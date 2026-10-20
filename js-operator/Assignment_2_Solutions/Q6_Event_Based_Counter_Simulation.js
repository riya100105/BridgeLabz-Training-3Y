// Q6: Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);

    // Nested function can access the outer function's variables.
    function showCount() {
        console.log(`Nested function sees count: ${count}`);
    }

    showCount();
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// Simulate clicks by calling the functions
increment();
increment();
decrement();
increment();
decrement();
