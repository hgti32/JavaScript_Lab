'use strict';


const sourceArray = [
    true,
    'hello',
    'world',
    5,
    12,
    -200,
    false,
    true,
    null,
    undefined,
    {a: 1},
    () => {},
    100,
    ''
]

const initialCounts = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
    bigint: 0,
    symbol: 0,
    function: 0
}

for (const element of sourceArray) {
    const type = typeof element;
    if (type in initialCounts) {
        initialCounts[type]++;
    }
}
console.log ('підрахунок ключів', initialCounts);