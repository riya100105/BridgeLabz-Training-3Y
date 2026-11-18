// Q9. Fitness App Analytics (filter + reduce + map + Error Handling)

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.data = data;
    }

    getActiveUsers() {
        // Active users have completed more than 7000 steps.
        return this.data.filter((person) => person.steps > 7000);
    }

    getAverageCalories() {
        const totalCalories = this.data.reduce(
            (total, person) => total + person.calories,
            0
        );

        return totalCalories / this.data.length;
    }

    getUserSummary() {
        // map() converts each user's data into a readable message.
        return this.data.map(
            (person) =>
                `${person.user} walked ${person.steps} steps and burned ${person.calories} calories.`
        );
    }
}

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active users:", analytics.getActiveUsers());
    console.log("Average calories:", analytics.getAverageCalories());
    console.log("User summaries:");
    analytics.getUserSummary().forEach((summary) => console.log(summary));
} catch (error) {
    console.log("Analytics error:", error.message);
}

// Uncomment these lines to test the empty-dataset error.
// try {
//     const emptyAnalytics = new FitnessAnalytics([]);
// } catch (error) {
//     console.log("Analytics error:", error.message);
// }
