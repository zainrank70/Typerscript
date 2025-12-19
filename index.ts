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
    displaycountry: (country: string) => string; //method call signature for the function 
    
}
const product: Product = {
    name: "shirt",
    price: 20,
    description: "this is a product",
    details: {
        color: "red",
        size: "10",
        quantity: 10
    },
    displaycountry: (country: string) => country
}

const calculateTotal = (product: Product): number => {
    return product.price * product.details.quantity;
}
console.log(calculateTotal(product));

console.log(product.displaycountry("Pakistan"));

// Enum use when a property can have only one value at a time, selected from a predefined list of values and to restrict values, avoid magic strings, improve readability, and prevent invalid assignments.

//************************************enums************************************ */
enum Roles{
    ADMIN = "admin",
    USER = "user"
}

type LoginDetails = {
    username: string;
    password: string;
    role: Roles;
}

const user1: LoginDetails = {
    username: "zain",
    password: "123456",
    role: Roles.ADMIN
}

const user2: LoginDetails = {
    username: "ali",
    password: "123456",
    role: Roles.USER
}

const isAdmin = (user: LoginDetails): boolean => {
    return user.role === Roles.ADMIN;
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));


//************************************interfaces************************************ */
// Interfaces in TypeScript define the shape/structure of an object
// Similar to type aliases, but interfaces are specifically designed for object shapes
// Interfaces can be extended and merged, making them more flexible for complex scenarios
// Use interfaces when defining object contracts that classes or objects must follow

interface User {
    name: string;        // required property: must be a string
    age: number;         // required property: must be a number
    isStudent: boolean;  // required property: must be a boolean
}

//below is auto merged with the above interface
interface User{
    youtubeChannel: string;
}
// Creating an object that implements the User interface
// The object must have all required properties with correct types
// TypeScript will error if any property is missing or has wrong type
const user3: User = {
    name: "zain",
    age: 20,
    isStudent: true,
    youtubeChannel: "zain"
}
console.log(user3);

// Interface Extension using 'extends' - different from merging
// 'extends' creates an inheritance relationship where one interface inherits all properties from another
// This is useful for creating specialized interfaces from base interfaces

// Base interface - defines common properties
interface Animal {
    name: string;
    age: number;
    species: string;
}

// Extended interface - inherits all properties from Animal and adds new ones
interface Dog extends Animal {
    breed: string;
    isTrained: boolean;
}

// Another extended interface - same base, different additional properties
interface Cat extends Animal {
    color: string;
    isIndoor: boolean;
}

// Objects implementing extended interfaces must have all properties from both base and extended
const myDog: Dog = {
    name: "Buddy",
    age: 3,
    species: "Canine",
    breed: "Golden Retriever",
    isTrained: true
}

const myCat: Cat = {
    name: "Whiskers",
    age: 2,
    species: "Feline",
    color: "Orange",
    isIndoor: true
}

console.log(myDog);
console.log(myCat);

// Takeaway:
// Use interface for class contracts — it's clear, mergeable, and idiomatic.
// Use type for unions, intersections, or aliasing primitives and for method signatures

//************************************Primitives datatypes**************************** */
// Primitives in TypeScript (and JavaScript) are immutable
// This means you cannot modify them directly - you must create a new value

// Example: Trying to modify a string in place
let b: string = "Hello";
// b[0] = "h";  // ❌ This doesn't work - strings are immutable
// In JavaScript/TypeScript, trying to modify a string like this silently fails
// The string remains unchanged because primitives are immutable

console.log(b); // "Hello" ✅ unchanged

// How to "change" a string
// Since you cannot modify a string in place, you need to create a new string:

// Method 1: Using slice() - slice from index 1 to end
b = "h" + b.slice(1);
console.log(b); // "hello" ✅ new string created

// Method 2: Using substring() with template literals
b = `H${b.substring(1)}`;
console.log(b); // "Hello" ✅ new string created

// Method 3: Using replace() method
b = b.replace("H", "h");
console.log(b); // "hello" ✅ new string created

// Key takeaway:
// Primitives are immutable, so you cannot modify them directly.
// To "change" them, you always create a new value and assign it back.