// Q9: Person -> Student inheritance using ES6 classes

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the Person constructor.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

const student1 = new Student("Riya", "Computer Science");

student1.showName();   // Inherited from Person
student1.showBranch(); // Defined in Student

console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true

// This produces the same behavior as the constructor/prototype
// inheritance example in Q5.
