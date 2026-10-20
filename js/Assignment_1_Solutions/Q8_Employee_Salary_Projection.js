// Q8: Employee Salary Projection

const currentSalary = 40000;
const annualIncrementRate = 8; // Percentage increase each year.
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    // Apply the annual increment to the current projected salary.
    projectedSalary *= (1 + annualIncrementRate / 100);

    salaryProjection.push({
        Year: year,
        Salary: Math.round(projectedSalary)
    });
}

console.table(salaryProjection);
