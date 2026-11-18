// Q1. Student Result Processing (reduce + Classes)

// Create a Student class with a name and an array of marks.
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // reduce() adds all marks. Divide by the number of subjects for the average.
    calculateAverage() {
        if (this.marks.length === 0) {
            throw new Error("Marks are not available.");
        }

        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    // Grade is decided using the student's average.
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) return "A";
        if (average >= 75) return "B";
        if (average >= 50) return "C";
        return "F";
    }
}

// Test the class for three students.
const students = [
    new Student("Aarav", [92, 88, 95]),
    new Student("Diya", [78, 82, 74]),
    new Student("Kabir", [45, 52, 40])
];

students.forEach((student) => {
    console.log(
        `${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`
    );
});
