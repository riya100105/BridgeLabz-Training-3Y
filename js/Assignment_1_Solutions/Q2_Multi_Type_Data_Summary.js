// Q2: Multi-Type Data Summary

const userName = "Riya";
const userAge = 21;
const isActive = true;
const favoriteSubjects = ["JavaScript", "HTML", "CSS"];
const userDetails = { city: "Meerut", role: "student" };
const middleName = null;
let optionalValue;

// Store labels, values, and detected types for a single console.table().
const dataSummary = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "userAge", value: userAge, type: typeof userAge },
    { label: "isActive", value: isActive, type: typeof isActive },
    { label: "favoriteSubjects", value: favoriteSubjects.join(", "), type: Array.isArray(favoriteSubjects) ? "array" : typeof favoriteSubjects },
    { label: "userDetails", value: JSON.stringify(userDetails), type: typeof userDetails },
    { label: "middleName", value: String(middleName), type: middleName === null ? "null" : typeof middleName },
    { label: "optionalValue", value: String(optionalValue), type: typeof optionalValue }
];

console.table(dataSummary);
