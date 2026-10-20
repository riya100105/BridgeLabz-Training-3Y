// Q4: Academic Performance Evaluator

// Marks for five subjects; change these values to test other outcomes.
const marks = [88, 91, 79, 85, 90];
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const averageMarks = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Any subject below 35 means the student is detained.
const hasFailedSubject = marks.some(mark => mark < 35);
let result;

if (hasFailedSubject) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
