// console.log("Hello World");
// let num: number = 5;
// num = 55;

// type annotation is done after colons
const Sum = (a:number,b:number):number=>{
    return a + b;
};
console.log(Sum(5, 10));

const fullname = (first:string,last:string):string=>{
    return first + " " + last;
};
console.log(fullname("zain","ahmad"));

//Boolean and bigint data types
const isStudent:boolean = true;
console.log(isStudent);

const age:bigint = 10n;
console.log(age);

const maxNumber:number = Number.MAX_SAFE_INTEGER; // this is a constant number that is the maximum safe integer in javascript equals to 2^53 - 1
console.log(maxNumber);