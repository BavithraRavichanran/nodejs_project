function* genFunc() {
    console.log('First');
    yield;
    console.log('Second');
}
let genObj = genFunc();
genObj.next();
genObj.next();

function* objectEntries(obj) {
        let propKeys = Reflect.ownKeys(obj);

        for (let propKey of propKeys) {
            yield [propKey, obj[propKey]];
        }

    }
    // Usage
let jane = { first: 'Jane', last: 'Doe' };
for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}


function* run() {
    var cities = ['Chicago', 'San Francisco', 'Los Angeles', 'Santa Barbara'];

    var citiesData = cities.map(city => {
        asyncQueryFn(city);
    });

    return yield Promise.all(citiesData);
}