// Q2: String Manipulation Report

const productName = " wireless headphones PRO ";

// Remove extra spaces, convert to lowercase, and capitalize each word
const trimmedName = productName.trim().toLowerCase();
const capitalizedName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition"
const cleanedTitle = capitalizedName.replace("Pro", "Pro Edition");

console.log(`Cleaned product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
