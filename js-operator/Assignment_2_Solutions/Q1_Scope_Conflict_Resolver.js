// Q1: Scope Conflict Resolver

// Global bonus variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local salary variable
    let salary = 40000;

    // Add bonus only for permanent employees
    let totalSalary = salary;
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${totalSalary}`);
}

// Test with different values
calculateSalary(true);
calculateSalary(false);

// Changing the local parameter does not change the global bonus.
function demonstrateScope() {
    let isPermanent = true; // Local variable
    isPermanent = false;
    console.log(`Local isPermanent changed to: ${isPermanent}`);
    console.log(`Global bonus remains: ₹${bonus}`);
}

demonstrateScope();
