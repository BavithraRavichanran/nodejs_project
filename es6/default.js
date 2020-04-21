function testFunc(x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
}
console.log(testFunc(1));

function testFunc(x, y = 7, z = 42) {
    return x + y + z;
}
console.log(testFunc(1));