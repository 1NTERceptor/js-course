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
    return `Hello, ${name} ${surname}!`;
}
const arrowFunction = (name, surname) => {return `Hello, ${name} ${surname}!`;}

console.log(arrowFunction("Jane", "Doe"));

const varFunction = function(name, surname) {
    return `Hello, ${name} ${surname}!`;
}

console.log(varFunction("Jim", "Beam"));


const numbers =(a, b) => {
    return a % b === 0;
}

console.log(numbers(10, 2));
console.log(numbers(10, 3));