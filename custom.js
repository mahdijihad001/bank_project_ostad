class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

const myAccount = new BankAccount(123456789, "Mohammad Jihad", 1000);
myAccount.displayAccountInfo(); 
myAccount.deposit(500);
myAccount.withdraw(200); 
myAccount.withdraw(2000); 
myAccount.displayAccountInfo(); 
myAccount.deposit(500);
myAccount.withdraw(210);
myAccount.deposit(500);
myAccount.withdraw(1500);