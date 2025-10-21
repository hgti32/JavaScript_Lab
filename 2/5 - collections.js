'use strict';

// 1. Масив об'єктів для телефонної книги
const phoneBookArray = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Seneca', phone: '+380445551122' },
    { name: 'Epictetus', phone: '+380445558877' }
];

function findPhoneByNameInArray(name) {
    for (const contact of phoneBookArray) {
        if (contact.name === name) {
            return contact.phone;
        }
    }
    return 'Контакт не знайдено';
}

console.log('Пошук в масиві:', findPhoneByNameInArray('Seneca'));
console.log('Пошук в масиві:', findPhoneByNameInArray('Plato'));

// 2. Хеш-таблиця для телефонної книги
const phoneBookHash = {
    'Marcus Aurelius': '+380445554433',
    'Seneca': '+380445551122',
    'Epictetus': '+380445558877'
};

function findPhoneByNameInHash(name) {
    return phoneBookHash[name] || 'Контакт не знайдено';
}

console.log('Пошук в хеші:', findPhoneByNameInHash('Marcus Aurelius')); // +380445554433
console.log('Пошук в хеші:', findPhoneByNameInHash('Plato')); // Контакт не знайдено