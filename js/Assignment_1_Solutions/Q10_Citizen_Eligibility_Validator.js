// Q10: Citizen Eligibility Validator

const age = 19;
const isCitizen = true;
let eligibilityMessage;

// Evaluate citizenship and age requirements.
if (isCitizen) {
    if (age >= 18) {
        if (age >= 21) {
            eligibilityMessage = "Eligible for all services.";
        } else {
            eligibilityMessage = "Eligible to vote only.";
        }
    } else {
        eligibilityMessage = "Not eligible yet.";
    }
} else {
    if (age >= 18) {
        eligibilityMessage = "Only age criteria met.";
    } else {
        eligibilityMessage = "Not eligible yet.";
    }
}

console.log(eligibilityMessage);
