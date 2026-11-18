// Q3. Product Discount System (Constructor Function + Prototype)

// Constructor function creates Product objects.
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// A prototype method is shared by all Product objects.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 2000);
const product3 = new Product("Keyboard", 1500);

const products = [
    { product: product1, discount: 10 },
    { product: product2, discount: 20 },
    { product: product3, discount: 15 }
];

products.forEach(({ product, discount }) => {
    console.log(
        `${product.name}: Original price = Rs. ${product.price}, ` +
        `${discount}% discount, New price = Rs. ${product.applyDiscount(discount).toFixed(2)}`
    );
});

// Abstraction: the user only calls applyDiscount(percent).
// The calculation details are kept inside the method, so the operation is simple to use.
console.log("Abstraction: applyDiscount() hides the discount calculation details.");
