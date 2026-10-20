// Q7: Smart Guessing Game (Number Range)

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Test value; change this to try different guesses.

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number (for testing): ${secretNumber}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 numbers of the secret number.
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
