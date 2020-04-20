// this function
var func = function(param) {
    return param.split(" ");
};

// would become:
var func = param => param.split(" ");

// Examples
var users = [
    { name: 'Jack', age: 21 },
    { name: 'Ben', age: 23 },
    { name: 'Adam', age: 22 }
];

// ES5
var ages = console.log(users.map(function(user) {
    return user.age;
})); // [21, 23, 22]

// ES6
var ages = users.map(user => user.age);
console.log(ages); // [21, 23, 22]


var sum = ages.reduce((a, b) => a + b);
console.log(sum); // 66

// IIFE
(x => x * 2)(3); // 6

// Scope

// In ES6
// document.body.addEventListener('click', evt => console.log(evt, this)); // EventObject, BodyElement