for (let word of["one", "two", "three"]) {
    console.log(word);
}

let s = new Set([3, 4, 5]);
for (let value of s) {
    console.log(value);
}

let m = new Map([
    ['red', 'rojo'],
    ['blue', 'azul']
]);
for (let [name, value] of m) {
    console.log(name + " = " + value);
}

var colors = new Set(['rojo', 'amarillo', 'azul']);
colors.language = 'es';
for (let name in colors) {
    console.log(name);
}

for (let word of colors) {
    console.log(word);
}