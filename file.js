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