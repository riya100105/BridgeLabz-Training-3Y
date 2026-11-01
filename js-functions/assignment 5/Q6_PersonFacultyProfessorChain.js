// Q6: Prototype chain Person -> Faculty -> Professor

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log("Person name: " + this.name);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.teach = function () {
    console.log("Faculty teaches: " + this.subject);
};

function Professor(name, subject, designation) {
    Faculty.call(this, name, subject);
    this.designation = designation;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showDesignation = function () {
    console.log("Designation: " + this.designation);
};

const professor1 = new Professor("Dr. Sharma", "Computer Science", "Professor");

// The Professor object can access its own method and methods up the chain.
professor1.showDesignation();
professor1.teach();
professor1.introduce();

console.log(professor1 instanceof Professor); // true
console.log(professor1 instanceof Faculty);    // true
console.log(professor1 instanceof Person);     // true
