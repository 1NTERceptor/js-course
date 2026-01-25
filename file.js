console.log('Hello, World!');

{
    var test = "Test"
    console.log(test);
}
console.log(test);

let now = new Date();
console.log(now);
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
console.log(`Today is ${year}-${month}-${day}`);
console.log(greet("John", "Doe"));

function greet(name, surname) {
    return `Hello, ${name.charAt(0)} ${surname.charAt(0)}!`;
}
const arrowFunction = (name, surname) => {return "Hello, ".concat(name, " ",surname, "!")}

console.log(arrowFunction("Jane", "Doe"));

const varFunction = function(fullname) {
    spacerIndex = fullname.indexOf(" ");
    
    return `Hello, ${fullname.charAt(0)} ${fullname.charAt(spacerIndex+1)}!`;
}

console.log(varFunction("Jim Beam"));


const numbers =(a, b) => {
    return a % b === 0;
}

console.log(numbers(10, 2)); 
console.log(numbers(10, 3));

function generateInvoice(productName, quantity, unitPrice) {
    console.log("Faktura: ".concat(quantity, " szt. ", productName, " - Razem do zapłaty: ", unitPrice*quantity, " zł."));
}

generateInvoice('Laptop', 2, 2500)

let tabnumbers = [1,2,3]

console.log(tabnumbers[0]);

tabnumbers.push(47);
console.log("after push",tabnumbers);

const number = tabnumbers.pop();
console.log("after pop",tabnumbers);
console.log("popped number:", number);

tabnumbers.unshift(0);
console.log("after unshift",tabnumbers);

const firstNumber = tabnumbers.shift();
console.log("after shift",tabnumbers);
console.log("shifted number:", firstNumber);

tabnumbers.splice(1,2);
console.log("after splice",tabnumbers);

tabnumbers.splice(1,0,888,999)
console.log("after splice insert",tabnumbers);

const indexOf = tabnumbers.indexOf(999);
tabnumbers.splice(indexOf,1);
console.log("after removing 999",tabnumbers);

filtereTable = tabnumbers.filter((num) => num > 50);
console.log("after filter >50",filtereTable);

const bignumber = tabnumbers.find((num) => num > 800);
console.log("first number >800 : ",bignumber);

const includesX = tabnumbers.includes(1);
console.log("includes 1 :",includesX);

console.log("all positive", tabnumbers.every((num) => num > 0));

// odracanie tablicy

tabnumbers.reverse();
console.log("after reverse",tabnumbers);

function swapArrayElements(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function countBiggerThan(arr, num) {
    return arr.reduce((count, current) => current > num ? count + 1 : count, 0);
}

let sampleArray = [10, 20, 30, 40, 50];
console.log("array beforswaping",sampleArray);
swapArrayElements(sampleArray, 1, 3);
console.log("after swapping index 1 and 3",sampleArray);
let count = countBiggerThan(sampleArray, 25);
console.log("elements bigger than 25",count);

const t = [5, 10, 15, 20, 25];

const callback = (element, index, arr) => {
    console.log("Index: ", index, "Element: ", element);
    arr[index] = element ** 2;
}

t.forEach(callback);

console.log("after forEach squaring",t);

const t2 = [8, 10, 15, 20, 17];

const SumOfArray = (arr) => {
    let sum = 0;
    arr.forEach(element => sum += element);
    return sum; 
}

const AvgOfArray = (arr) => {
    let sum = 0;
    arr.forEach(element => sum += element);
    return sum / arr.length;
}

console.log("Sum of array elements:", SumOfArray(t2));
console.log("Average of array elements:", Math.floor(AvgOfArray(t2)));

const celsiusTemp = [0, 15, 30, 35, 60];

console.log("celsius temps:", celsiusTemp)

const toFahrenheit = (element, index, arr) => {
    arr[index] = (element * 9/5) + 32;
}

const fahrenheitTemps = celsiusTemp.map(c => (c * 9/5) + 32);
console.log("celsius temps:", celsiusTemp)
//const fahrenheitTemps2 = celsiusTemp;
console.log("celsius temps:", celsiusTemp)
//fahrenheitTemps2.forEach(toFahrenheit);
//console.log("celsius temps:", celsiusTemp)

console.log("Fahrenheit temps using map:", fahrenheitTemps);
//console.log("Fahrenheit temps using forEach:", fahrenheitTemps2);

console.log("celsius temps:", celsiusTemp)
const joined = celsiusTemp.join(":");
console.log("Joined celsius temps:", joined)

const newarray = celsiusTemp.concat(fahrenheitTemps);

console.log("Concatenated string:", newarray);

const ppl = [
    {
        name: "Alice",
        age: 28,
        phoneNumers: ["123-456-7890", "987-654-3210"]
    },
    {
        name: "Bob",
        age: 34,
        phoneNumers: ["555-555-5555"]
    },
    {
        name: "Charlie",
        age: 22,
        phoneNumers: ["111-222-3333", "444-555-6666"]
    }
]

let allNumbers = ppl.map(person => person.phoneNumers);
console.table(allNumbers);

let allNumbers2 = [];
ppl.map(person => person.phoneNumers)
    .forEach(phoneNumers => allNumbers2=allNumbers2.concat(phoneNumers));

console.table(allNumbers2);

let allNumbers3 = ppl.flatMap(person => person.phoneNumers);
console.table(allNumbers3);

const tab = [5, 12, 8, 20, 7, 15];

function filterAndDisplay(array, elementPredicate, displayCallback) {
    const results = array.filter(elementPredicate);

    displayCallback(results);
}

const displayCallback = (results) => {
    results.forEach(num => console.log("Filtered number:", num));
}

filterAndDisplay(tab, (num) => num > 5, displayCallback);
filterAndDisplay(tab, (num) => num > 10, console.log);

const tab1 = [23, 10, 3, 453, 1000];

tab1.sort((a,b)=> b-a);

console.log("Sorted array:", tab1);

const names = ["Zoe", "Adam", "John", "Charlie", "Bob"];
names.sort((a,b) => b.length - a.length);
console.log("Sorted names:", names);

const persons = [
    {name: "Alice", age: 28},
    {name: "Bob", age: 34},
    {name: "Charlie", age: 22}
];

persons.sort((a,b) => a.age - b.age);
console.table(persons);

function Get3BiggestNumbers(tab1, tab2, length) {
    return tab1.concat(tab2).sort((a,b) => b - a).slice(0, length);
}

const tabA = [23, 46, 5];
const tabB = [11, 3];
const biggest3 = Get3BiggestNumbers(tabA, tabB, 3);
console.log("3 biggest numbers:", biggest3);

const coordinates = [150,424,5]

const x = coordinates[0];
const y = coordinates[1];
const z = coordinates[2];

console.log("X:", x, "Y:", y, "Z:", z);

//destrukturyzacja tablic
const [x2, y2, z2] = coordinates;

console.log("X:", x2, "Y:", y2, "Z:", z2);

// pomijanie elementu i reszta tablicy
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
const [firstColor,  ,...otherColors] = colors;

console.log("First Color:", firstColor);
console.log("Other Colors:", otherColors);

const values = [10];

//domyślne wartości
const [firstValue, secondValue = 20, thirdValue = 30] = values;

console.log("First Value:", firstValue);
console.log("Second Value (default 20):", secondValue);
console.log("Third Value (default 30):", thirdValue);

const tabC = [1, 2, 3];
const tabD = [4, 5, 6];

const result = [9,...tabC, ...tabD, 12];

console.log("Resulting array:", result);
