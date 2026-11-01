// Q5: Inheritance using constructor functions and prototypes

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name: " + this.name);
};

function Student(name, branch) {
    // Call Person so that the Student object gets the name property.
    Person.call(this, name);
    this.branch = branch;
}

// Student.prototype inherits methods from Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Branch: " + this.branch);
};

const student1 = new Student("Riya", "Computer Science");

student1.showName();   // Inherited from Person.prototype
student1.showBranch(); // Defined on Student.prototype

console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
