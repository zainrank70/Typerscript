// console.log("Hello World");
// let num: number = 5;
// num = 55;

// type annotation is done after colons
const Sum = (a: number, b: number): number => {
    return a + b;
};
console.log(Sum(5, 10));

const fullname = (first: string, last: string): string => {
    return first + " " + last;
};
console.log(fullname("zain", "ahmad"));

//Boolean and bigint data types
const isStudent: boolean = true;
console.log(isStudent);

const age: bigint = 10n;
console.log(age);

const maxNumber: number = Number.MAX_SAFE_INTEGER; // this is a constant number that is the maximum safe integer in javascript equals to 2^53 - 1
console.log(maxNumber);

// any data type is used to store any type of data no type checking is done on it
let a: any;

a = 5;           // ok
a = "hello";     // ok
a.toUpperCase(); // ok, no error even if a is number at runtime


// unknown data type is used to store any type of data but it is more secure than any data type e.g if we try to access a property of unknown type it will give an error
let u: unknown;

u = 5;
u = "hello";

// u.toUpperCase(); // ❌ Error: Object is of type 'unknown'

// Type checking first
if (typeof u === "string") {
    console.log(u.toUpperCase()); // ✅ safe
}

// functions innvoction in typescript 
//The compiler automatically figures out the type of a variable based on the value you assign e.g when you not write string in return type it auto detetcs from void to string
function greet(name: string, id: number): string {
    return `Hello ${name} with id ${id}`;
}

console.log(greet("zain", 123));

//deafult and optional parameters in typescript
// default 1 is given to id if not provided
function greet2(name: string, id: number = 1): string {
    return `Hello ${name} with id ${id}`;
}

console.log(greet2("zain"));

//optional parameters in typescript
function greet3(name: string, id?: number): string {
    return `Hello ${name} with id ${id}`;
}

console.log(greet3("zain"));

//rest parameters in typescript
function greet4(...name: string[]): string {
    return `Hello ${name.join(" ")}`;
}

console.log(greet4("zain", "ahmad", "ali"));

//array in typescript
const fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits);

// using array.of method in typescript
const numbers: number[] = Array.of(1, 2, 3, 4, 5);
console.log(numbers);

//using Array constructor in typescript
const numbers2: number[] = new Array(1, 2, 3, 4, 5);
console.log(numbers2);

// for of gives us the value of the array,for in gives us the index of the array
for (const fruit of fruits) {
    console.log(fruit);
}

for (const index in fruits) {
    console.log(index);
}

// using array.map method in typescript
const numbers3: number[] = numbers.map((number) => number * 2);
console.log(numbers3);

// object in typescript
const person: { name: string, age: number, adress: { street: string, city: string, state: string, zip: string } } = {
    name: "zain",
    age: 20,
    adress:{
        street:"123 main st",
        city:"karachi",
        state:"karachi",
        zip:"12345"
    }
}

console.log(person);

// type alias in typescript used semicolon instead of comma to separate the properties
type Product = {
    name: string;
    price: number;
    description?: string; // optional property
    details: {
        color: string;
        size: string;
        quantity: number;
    };
}
const product: Product = {
    name: "shirt",
    price: 20,
    description: "this is a product",
    details: {
        color: "red",
        size: "10",
        quantity: 10
    }
}

const calculateTotal = (product: Product): number => {
    return product.price * product.details.quantity;
}
console.log(calculateTotal(product));



