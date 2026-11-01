// Q1: Callback function

// This function greets the user and then calls the callback.
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

// This function is passed as a callback.
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstrating callback flow.
greetUser("Riya", showEndMessage);
