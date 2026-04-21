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

const date = new Date();

console.log("Current date and time: " + date);

const pastDate = new Date(1990, 4, 14)
console.log(pastDate)

console.log(pastDate > date)

const stringDate = "1990/06/06"

const date2 = new Date(stringDate)

console.log(date2)

function isAdult(date){
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age > 18;
}

function monthsToAdult(date){
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();   
    return age * 12 + monthDifference;
}

console.log(isAdult("2000/01/01"))
console.log(monthsToAdult("2000/01/01"))

const user2 ={
    name: "Alice",
    surname: "Smith",
    age: 25,
}

const {name, surname, age} = user2;

console.log(name);
console.log(surname);
console.log(age);   

function printUserInfo({name, surname, age}){
    console.log("Name: " + name);
    console.log("Surname: " + surname);
    console.log("Age: " + age);
}

printUserInfo(user2);
console.log(user2);

let user3 = {...user2, ...user, status: "active"};

console.log(user3);