// Q5. Ride-Sharing Application (Classes + Error Handling)

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        // Check that distance was provided and is a valid non-negative number.
        if (this.distance === undefined || this.distance === null ||
            this.distance === "" || !Number.isFinite(Number(this.distance)) ||
            Number(this.distance) < 0) {
            throw new Error("Please provide a valid, non-negative trip distance.");
        }

        const ratePerKm = 10; // Example fare rate: Rs. 10 per kilometre.
        return Number(this.distance) * ratePerKm;
    }
}

const rider = new User("Riya", 4.8);
const driver = new Driver("Arjun", 4.9, "Car", "UP 85 AB 1234");

console.log(`Rider: ${rider.name}, Rating: ${rider.rating}`);
console.log(`Driver: ${driver.name}, Vehicle: ${driver.vehicle}, Number: ${driver.vehicleNumber}`);

// Valid trip
try {
    const trip = new Trip("Mathura", "Agra", 60);
    console.log(`Trip: ${trip.fromLocation} to ${trip.toLocation}`);
    console.log("Fare: Rs.", trip.calculateFare());
} catch (error) {
    console.log("Unable to calculate fare:", error.message);
}

// Invalid trip: negative distance causes an error.
try {
    const invalidTrip = new Trip("Mathura", "Agra", -5);
    console.log("Fare: Rs.", invalidTrip.calculateFare());
} catch (error) {
    console.log("Unable to calculate fare:", error.message);
}
