'use strict';

const contract = (fn, ...types) => {
    const resultType = types[types.length - 1];
    const argTypes = types.slice(0, -1);

    const validate = (value, type, positionName) => {
        const typeName = type.name.toLowerCase(); // 'Number' -> 'number'

        if (typeof value !== typeName) {
            throw new TypeError(
                `Помилка в ${positionName}: очікування ${type.name}, отриманий ${typeof value}`
            );
        }
    };

    return (...args) => {
        if (args.length !== argTypes.length) {
            throw new TypeError(`Очікування аргументів: ${argTypes.length}, отримано: ${args.length}`);
        }
        args.forEach((arg, index) => {
            validate(arg, argTypes[index], `аргументе №${index + 1}`);
        });
        const result = fn(...args);

        validate(result, resultType, 'результаті');
        return result;
    };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);

try {
    const res = addNumbers(2, 3);
    console.dir(res); // Output: 5
} catch (e) {
    console.error(e.message);
}

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);

try {
    const res = concatStrings('Hello ', 'world!');
    console.dir(res); // Output: Hello world!
} catch (e) {
    console.error(e.message);
}

try {
    console.log("Спроба скласти число і рядок...");
    addNumbers(2, 'oops');
} catch (e) {
    console.error("Виявлено помилку:", e.message);
}

const badReturn = (a) => "Рядок";
const checkReturn = contract(badReturn, Number, Number);

try {
    console.log("Перевірка невірного повернення...");
    checkReturn(5);
} catch (e) {
    console.error("Виявлено помилку:", e.message);
}