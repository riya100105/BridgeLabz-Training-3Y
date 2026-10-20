// Q5: Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    // All four conditions must be true for the home to be secure.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use OR and NOT to identify any unsafe condition.
    const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

    console.log(isSecure && !isUnsafe ? "Secure" : "Unsafe");
}

console.log("Test 1: All conditions satisfied");
checkSecurity();

console.log("Test 2: Alarm is off");
isAlarmOn = false;
checkSecurity();

console.log("Test 3: Alarm is on, owner is outside");
isAlarmOn = true;
isOwnerInside = false;
checkSecurity();
