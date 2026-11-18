// Q2. Online Food Ordering (map + Error Handling)

const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // map() finds the price of each ordered item.
    const priceList = orderItems.map((itemName) => {
        const menuItem = menu.find((item) => item.name.toLowerCase() === itemName.toLowerCase());

        // Stop the calculation if an item is not present in the menu.
        if (!menuItem) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return menuItem.price;
    });

    // reduce() adds all item prices to get the final bill.
    return priceList.reduce((total, price) => total + price, 0);
}

// Valid order
try {
    const order = ["Pizza", "Burger", "Pasta"];
    console.log("Order:", order.join(", "));
    console.log("Total bill: Rs.", calculateBill(order));
} catch (error) {
    console.log("Unable to place order:", error.message);
}

// Invalid order: this demonstrates the error handling.
try {
    const order = ["Pizza", "Sushi"];
    console.log("Total bill: Rs.", calculateBill(order));
} catch (error) {
    console.log("Unable to place order:", error.message);
}
