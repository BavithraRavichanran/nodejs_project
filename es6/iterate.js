let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


let iterable = {
    [Symbol.iterator]() {
        let step = 0;
        let iterator = {
            next() {
                if (step <= 2) {
                    step++;
                }
                switch (step) {
                    case 1:
                        return { value: 'hello', done: false };
                    case 2:
                        return { value: 'world', done: false };
                    default:
                        return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
};

for (let x of iterable) {
    console.log(x);
}
// Output:
// hello
// world


// ADVANCED LEARNING: Iterators that are iterable
function iterateOver(...args) {
    let index = 0;
    let iterable = {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (index < args.length) {
                return { value: args[index++] };
            } else {
                return { done: true };
            }
        }
    };
    return iterable;
}


// let arr = ['a', 'b'];
// let iterator = arr[Symbol.iterator]();

// for (let x of iterator) {
//     console.log(x); // a
//     break;
// }

// Continue with same iterator:
// for (let x of iterator) {
//     console.log(x); // b
// }





// String
let blogPostName = 'Iterables';
for (let character of blogPostName) {
    console.log(character);
}

// Set
let words = ['Call', 'me', 'maybe', 'maybe'];
let uniqueWords = new Set(words);
for (let word of uniqueWords) {
    console.log(word);
}

// Map
let kvArray = [
    ['Sachin', 1],
    ['ABD', 2]
];
let rankings = new Map(kvArray);
for (let [player, rank] of rankings) {
    console.log(player, ': ', rank);
}