console.log('Hello, World!');

const user = {
    fullname: "John Doe",
    age: 30,
    money: 0,
    work: function() {
        console.log(this.fullname + " is working...");
        this.money += 100;
    },
    "# someProperty":"someValue"
}

console.log(user);
console.log(user.fullname)
user.work();

let propName = "# someProperty";
console.log(user[propName]);

const bankomat = {
    money: 1000,
    getSaldo: function() {
        console.log("Current balance: $" + this.money);
    },
    withDrawMoney: function(amount) {
        if (this.money >= amount) {
            this.money -= amount;
            console.log("Withdrawn: $" + amount);
        } else {
            console.log("Insufficient funds");
        }
    },
    depositMoney: function(amount) {
        this.money += amount;
        console.log("Deposited: $" + amount);
    }
}

bankomat.getSaldo();
bankomat.withDrawMoney(200);
bankomat.getSaldo();
bankomat.depositMoney(500);
bankomat.getSaldo();