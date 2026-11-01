// Q4: Constructor function and prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared method is stored on Car.prototype.
Car.prototype.getDetails = function () {
    console.log("Brand: " + this.brand + ", Model: " + this.model);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

// Both objects use the same function from Car.prototype.
console.log(car1.getDetails === car2.getDetails); // true
