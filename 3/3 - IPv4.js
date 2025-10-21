'use strict';

const ipToInt = (ip = '127.0.0.1') => {
    return ip.split('.').reduce((acc, octet) => (acc << 8) | +octet, 0);
};

console.log(`127.0.0.1      -> ${ipToInt('127.0.0.1')}`);
console.log(`10.0.0.1       -> ${ipToInt('10.0.0.1')}`);
console.log(`192.168.1.10   -> ${ipToInt('192.168.1.10')}`);
console.log(`0.0.0.0        -> ${ipToInt('0.0.0.0')}`);
console.log(`Виклик без аргументів -> ${ipToInt()}`);