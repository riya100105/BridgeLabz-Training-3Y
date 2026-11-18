// Q7. Banking Application (Private Fields + Error Handling)

class BankAccount {
    // #balance is private and cannot be accessed directly from outside the class.
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }

        this.#balance += amount;
        console.log(`Deposited Rs. ${amount}.`);
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal cannot be completed.");
        }

        this.#balance -= amount;
        console.log(`Withdrawn Rs. ${amount}.`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

try {
    account.deposit(2000);       // Valid deposit
    account.withdraw(1000);      // Valid withdrawal
    console.log("Current balance: Rs.", account.getBalance());

    account.withdraw(10000);     // Invalid: more than available balance
} catch (error) {
    console.log("Transaction failed:", error.message);
}

console.log("Final balance: Rs.", account.getBalance());

// console.log(account.#balance); // Not allowed: private fields cannot be accessed outside the class.
