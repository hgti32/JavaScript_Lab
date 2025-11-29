'use strict';

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error(`Очікування функції отримано ${typeof fn}`);
        }
    }
    return (x) => fns.reduce((v, f) => f(v), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;


try {
    const f1 = pipe(inc, twice, cube);
    const x1 = f1(5);
    console.log('Результат 1:', x1);
} catch (e) {
    console.error(e.message);
}

try {
    const f2 = pipe(inc, inc);
    const x2 = f2(7);
    console.log('Результат 2:', x2);
} catch (e) {
    console.error(e.message);
}

try {
    console.log('Спроба створити зламаний pipe...');
    const f3 = pipe(inc, 7, cube);
    console.log('Це повідомлення не повинно зявитись');
} catch (e) {
    console.log('Піймана помилка:', e.message);
}