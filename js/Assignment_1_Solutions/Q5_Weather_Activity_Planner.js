// Q5: Weather Activity Planner

const temperature = 24;
const isRaining = false;
const windSpeed = 12;
let advice;

// Rain takes priority over all other conditions.
if (isRaining) {
    advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
} else {
    advice = "Perfect day for a walk.";
}

// Example of combining && and || in a condition.
const weatherIsUncomfortable =
    isRaining || (temperature < 15 && windSpeed > 20);

console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind speed: ${windSpeed} km/h`);
console.log(`Advice: ${advice}`);
console.log(`Weather is uncomfortable: ${weatherIsUncomfortable}`);
