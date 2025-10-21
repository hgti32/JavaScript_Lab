'use strict';

const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x ** 3;

function calculate() {
    const results = [];
    for (let i = 0; i < 10; i++) {
        const sq = square(i);
        const cb = cube(i);
        const avg = average(sq, cb);
        results.push(avg);
    }
    return results;
}

console.log(calculate());