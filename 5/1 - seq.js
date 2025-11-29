'use strict';

function seq(...args) {
    const funcs = [...args];

    function chain(arg) {
        if (typeof arg === 'function') {
            funcs.push(arg);
            return chain;
        } else {
            return funcs.reduceRight((result, fn) => fn(result), arg);
        }
    }

    return chain;
}

const res1 = seq(x => x + 7)(x => x * 2)(5);
console.log(res1); // 17

const res2 = seq(x => x * 2)(x => x + 7)(5);
console.log(res2); // 24

const res3 = seq(x => x + 1)
(x => x * 2)
(x => x / 3)
(x => x - 4)(7);

console.log(res3); // 3
/*
Логика выполнения (справа налево):
1. (7 - 4) = 3
2. (3 / 3) = 1
3. (1 * 2) = 2
4. (2 + 1) = 3
*/