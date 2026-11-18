// Q4. Employee Inheritance (Inheritance + Runtime Polymorphism)

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Override the work() method inherited from Employee.
    work() {
        return `${this.name} manages the ${this.department} department and guides the team.`;
    }
}

const employee1 = new Employee("Aman", "Development");
const manager1 = new Manager("Neha", "Sales");

// Runtime polymorphism: the same method call gives different results
// depending on the actual object.
const team = [employee1, manager1];

team.forEach((person) => {
    console.log(person.work());
});
