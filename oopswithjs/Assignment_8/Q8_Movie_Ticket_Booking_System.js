// Q8. Movie Ticket Booking System (Inheritance + Prototype Chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Add printTicket() to MovieTicket's prototype.
MovieTicket.prototype.printTicket = function () {
    console.log("------------------------------");
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Ticket price: Rs.", this.price);
    console.log("------------------------------");
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTicket1 = new OnlineTicket("The Adventure", "A1", 200, 25);
const onlineTicket2 = new OnlineTicket("The Adventure", "A2", 200, 25);

// OnlineTicket objects can use printTicket() through the prototype chain.
onlineTicket1.printTicket();
console.log("Convenience fee: Rs.", onlineTicket1.convenienceFee);
console.log("Total amount: Rs.", onlineTicket1.getTotalAmount());

onlineTicket2.printTicket();
console.log("Total amount: Rs.", onlineTicket2.getTotalAmount());

console.log(
    "Prototype chain works:",
    MovieTicket.prototype.isPrototypeOf(onlineTicket1)
);
