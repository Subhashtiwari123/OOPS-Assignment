// Q1. Create a BankAccount class in *avaScript using Object-Oriented Programming (OOP) principles. The class
// should have methods for depositing, withdrawing, and checking the account balance. Ensure that account
// balances cannot go below zero and that both deposit and withdrawal amounts must be positive.


class BankAccount {
    constructor (accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Rs.${amount}. New balance: Rs.${this.balance}`);
        } else {
            console.log('Invalid deposit amount. Please enter a positive amount.');
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`);
            } else {
                console.log('Insufficient funds for withdrawal.');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a positive amount.');
        }
    }

    checkBalance() {
        console.log(`Account balance for ${this.accountHolder}: Rs.${this.balance}`);
    }
}

const myAccount = new BankAccount('Subhash S', 1000);
myAccount.checkBalance();
myAccount.deposit(500);
myAccount.deposit(-50);
myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);
myAccount.checkBalance();