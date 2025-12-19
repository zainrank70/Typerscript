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
