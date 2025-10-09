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
arrowFunction = (name, surname) => {return `Hello, ${name} ${surname}!`;}

console.log(arrowFunction("Jane", "Doe"));

varFunction = function(name, surname) {
    return `Hello, ${name} ${surname}!`;
}

console.log(varFunction("Jim", "Beam"));