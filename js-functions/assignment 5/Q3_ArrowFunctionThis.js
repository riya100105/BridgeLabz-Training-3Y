// Q3: Arrow function vs normal function and the value of this

const user = {
    name: "Riya",

    // Arrow functions do not get their own 'this'.
    showName: () => {
        console.log("Arrow function name:", this.name);
    }
};

user.showName(); // In a typical Node.js/browser script, this.name is undefined.

// Fix: use a normal method function, which gets 'this' from the calling object.
user.showName = function () {
    console.log("Normal function name:", this.name);
};

user.showName(); // Riya
