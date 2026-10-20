// Q3: Monthly Expense Tracker

const expenses = {
    food: 5000,
    travel: 1800,
    rent: 12000,
    bills: 2200,
    leisure: 1500
};

let totalExpenses = 0;

// Add each category expense to the total.
for (const category in expenses) {
    totalExpenses += expenses[category];
}

const averageExpense = totalExpenses / Object.keys(expenses).length;

// Add 10% tax to the total using an assignment operator.
let finalAmount = totalExpenses;
finalAmount += totalExpenses * 0.10;

console.log("Monthly Expense Summary");
console.log("-----------------------");
console.log(`Total before tax: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
