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