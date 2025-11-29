'use strict';

const compose = (...fns) => {
    const listeners = [];

    const composedFn = (initialValue) => {
        try {
            return fns.reduceRight((result, fn) => fn(result), initialValue);
        } catch (err) {
            listeners.forEach(handler => handler(err));
            return undefined;
        }
    };

    composedFn.on = (event, handler) => {
        if (event === 'error' && typeof handler === 'function') {
            listeners.push(handler);
        }
    };

    return composedFn;
};

const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';


const dangerousFn = str => {
    if (str.length < 5) throw new Error("Слишком короткая строка!");
    return str + " (ok)";
};


const safeFlow = compose(exclaim, toUpper);

console.log("--- Тест 1: Успех ---");
console.log(safeFlow("hello"));

const riskyFlow = compose(exclaim, toUpper, dangerousFn);


riskyFlow.on('error', (e) => {
    console.log(`[LOG] Поймана ошибка: ${e.message}`);
});

console.log("\n--- Тест 2: Ошибка ---");
const res = riskyFlow("hi");

console.log("Результат вызова:", res);