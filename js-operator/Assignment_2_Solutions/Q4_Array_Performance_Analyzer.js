// Q4: Array Performance Analyzer

// Generate 8 random integer scores from 30 through 100
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
const passedStudents = scores.filter(score => score >= 50);
const scoreLabels = scores.map((score, index) => `Student ${index + 1}: ${score}`);

console.log(`
Array Performance Summary
-------------------------
Scores: ${scores.join(", ")}
${scoreLabels.join("\n")}
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed (score >= 50): ${passedStudents.length}
`);
