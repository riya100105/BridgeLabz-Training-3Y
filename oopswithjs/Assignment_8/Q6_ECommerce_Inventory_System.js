// Q6. E-Commerce Inventory System (filter + sort + reduce)

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 4 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 15 },
    { id: 3, name: "Notebook", category: "Stationery", price: 60, stock: 3 },
    { id: 4, name: "Pen Pack", category: "Stationery", price: 100, stock: 20 },
    { id: 5, name: "Chair", category: "Furniture", price: 2500, stock: 5 },
    { id: 6, name: "Desk", category: "Furniture", price: 6000, stock: 8 }
];

function getLowStockProducts(productList) {
    // Products with 5 or fewer items are considered low in stock.
    return productList.filter((product) => product.stock <= 5);
}

function sortProductsByPrice(productList) {
    // Use a copy so the original array order is not changed.
    return [...productList].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(productList) {
    // Inventory value = price multiplied by stock for every product.
    return productList.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

function groupByCategory(productList) {
    // reduce() builds an object whose keys are product categories.
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:", getLowStockProducts(products));
console.log("Products sorted by price:", sortProductsByPrice(products));
console.log("Total inventory value: Rs.", calculateTotalInventoryValue(products));
console.log("Products grouped by category:", groupByCategory(products));
