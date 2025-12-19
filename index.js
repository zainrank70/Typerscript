"use strict";
// console.log("Hello World");
// let num: number = 5;
// num = 55;
Object.defineProperty(exports, "__esModule", { value: true });
// type annotation is done after colons
const Sum = (a, b) => {
    return a + b;
};
console.log(Sum(5, 10));
const fullname = (first, last) => {
    return first + " " + last;
};
console.log(fullname("zain", "ahmad"));
//Boolean and bigint data types
const isStudent = true;
console.log(isStudent);
const age = 10n;
console.log(age);
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);
//# sourceMappingURL=index.js.map