# TypeScript Project

A TypeScript project demonstrating basic TypeScript features and compilation.

## Prerequisites

- Node.js and npm installed
- TypeScript compiler installed globally:
  ```bash
  npm install -g typescript
  ```

## Project Structure

```
Typescript/
├── index.ts          # TypeScript source file
├── index.js          # Compiled JavaScript output
├── index.d.ts        # TypeScript declaration file
├── index.js.map      # Source map for debugging
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Getting Started

### Compile TypeScript

To compile the TypeScript file to JavaScript:

```bash
tsc index.ts
```

Or use the TypeScript configuration:

```bash
tsc
```

### Compile with Error Checking

To compile and prevent output if there are errors:

```bash
tsc --noEmitOnError index.ts
```

### Run the Compiled JavaScript

```bash
node index.js
```

## TypeScript Concepts

This project demonstrates fundamental TypeScript concepts through practical examples in `index.ts`.

### Type Annotations

TypeScript uses **type annotations** to specify the data types of variables, function parameters, and return values. The syntax is `variable: type` - the type comes after a colon.

**Why use type annotations?**
- Catch errors at compile-time instead of runtime
- Improve code readability and self-documentation
- Enable better IDE autocomplete and IntelliSense
- Make refactoring safer and easier

### Functions with Type Annotations

TypeScript supports both **arrow functions** and **regular function declarations** with type annotations. You can specify:
- **Parameter types**: `(param1: type1, param2: type2)`
- **Return type**: `: returnType` after the parameter list

**Examples from code:**
- `Sum` (arrow function) takes two `number` parameters and returns a `number`
- `fullname` (arrow function) takes two `string` parameters and returns a `string`
- `greet` (regular function) takes `string` and `number` parameters and returns a `string`
- `greet2` demonstrates **default parameters** with `id: number = 1`
- `greet3` demonstrates **optional parameters** with `id?: number`
- `greet4` demonstrates **rest parameters** with `...name: string[]`

This ensures type safety - TypeScript will error if you try to pass wrong types or return wrong types.

### Primitive Data Types

TypeScript supports several primitive types:

1. **`number`**: Represents both integers and floating-point numbers
   - JavaScript's `Number.MAX_SAFE_INTEGER` is `2^53 - 1` (9,007,199,254,740,991)
   - Beyond this, use `bigint` for precision

2. **`string`**: Represents text data
   - Can be created with single quotes, double quotes, or template literals

3. **`boolean`**: Represents true/false values
   - Only two possible values: `true` or `false`

4. **`bigint`**: Represents arbitrarily large integers
   - Created by appending `n` to the number (e.g., `10n`)
   - Cannot contain decimals
   - Used when you need integers larger than `Number.MAX_SAFE_INTEGER`
   - Cannot be mixed with regular `number` types in operations

### Special Types: `any` vs `unknown`

TypeScript provides two special types for handling dynamic or unknown values:

1. **`any`**: Disables type checking completely
   - Can store any type of data
   - **No type safety** - TypeScript won't catch errors
   - Allows operations without type checking (e.g., calling methods that might not exist)
   - **Use sparingly** - defeats the purpose of TypeScript's type safety
   - Example: You can call `a.toUpperCase()` even if `a` is a number (will cause runtime error)

2. **`unknown`**: Safer alternative to `any`
   - Can store any type of data
   - **Requires type checking** before using the value
   - Forces you to verify the type before operations
   - **More secure** - prevents accidental misuse
   - Example: Must check `typeof u === "string"` before calling `u.toUpperCase()`

**Best Practice**: Prefer `unknown` over `any` when you need to handle dynamic values. It forces you to write type guards, making your code safer.

### Function Declarations

TypeScript supports both arrow functions and regular function declarations with type annotations:

**Regular Function Syntax:**
```typescript
function functionName(param1: type1, param2: type2): returnType {
    // function body
}
```

**Key Points:**
- Parameter types are specified after the parameter name with a colon
- Return type is specified after the parameter list with a colon
- Type annotations are required for parameters and return values (unless using type inference)

### Function Parameters: Default, Optional, and Rest

TypeScript provides flexible ways to handle function parameters:

1. **Default Parameters**
   - Provide a default value if the argument is not passed
   - Syntax: `param: type = defaultValue`
   - Example: `function greet2(name: string, id: number = 1)`
   - If `id` is not provided, it defaults to `1`
   - **Order matters**: Default parameters should come after required parameters

2. **Optional Parameters**
   - Make a parameter optional (can be omitted)
   - Syntax: `param?: type` (note the `?`)
   - Example: `function greet3(name: string, id?: number)`
   - The parameter can be `undefined` if not provided
   - **Order matters**: Optional parameters should come after required parameters
   - **Difference from default**: Optional parameters are `undefined` if not provided, while default parameters use the specified value

3. **Rest Parameters**
   - Accept an unlimited number of arguments as an array
   - Syntax: `...param: type[]` (note the `...` spread operator)
   - Example: `function greet4(...name: string[])`
   - All arguments are collected into an array
   - Useful for functions that need to handle variable numbers of arguments
   - Must be the last parameter in the function signature

**Parameter Order Rules:**
1. Required parameters first
2. Default parameters next
3. Optional parameters next
4. Rest parameters last

**Examples from code:**
- `greet2("zain")` - Uses default `id = 1`
- `greet3("zain")` - `id` is optional (undefined)
- `greet4("zain", "ahmad", "ali")` - Rest parameter collects all names into an array

### Arrays in TypeScript

Arrays in TypeScript are typed collections of elements. You specify the type of elements the array will contain.

**Array Type Syntax:**
- `type[]` - Array of a specific type (e.g., `string[]`, `number[]`)
- `Array<type>` - Generic array syntax (alternative, less common)

**Ways to Create Arrays:**

1. **Array Literal Syntax** (Most Common)
   ```typescript
   const fruits: string[] = ["apple", "banana", "cherry"];
   ```
   - Directly specify elements in square brackets
   - Type annotation ensures all elements are the same type
   - TypeScript will error if you try to add elements of different types

2. **Array.of() Method**
   ```typescript
   const numbers: number[] = Array.of(1, 2, 3, 4, 5);
   ```
   - Creates an array from the arguments provided
   - Useful when you want to create an array from individual values
   - All arguments become array elements

3. **Array Constructor**
   ```typescript
   const numbers2: number[] = new Array(1, 2, 3, 4, 5);
   ```
   - Creates an array using the `new` keyword
   - **Note**: `new Array(n)` with a single number creates an array of that length (empty slots), but `new Array(1, 2, 3)` creates an array with those elements
   - Less commonly used than literal syntax

**Key Points:**
- Arrays are **homogeneous** - all elements must be of the same type (unless using union types)
- Type annotations prevent adding wrong types: `fruits.push(123)` would cause a type error
- Arrays maintain type safety throughout operations (push, pop, map, filter, etc.)
- TypeScript provides autocomplete for array methods based on the element type

**Examples from code:**
- `fruits` - Array of strings
- `numbers` - Array of numbers created with `Array.of()`
- `numbers2` - Array of numbers created with `Array` constructor

### Iterating Over Arrays

TypeScript provides several ways to iterate over arrays, each with different use cases:

1. **`for...of` Loop** - Iterates over array **values**
   ```typescript
   for (const fruit of fruits) {
       console.log(fruit); // "apple", "banana", "cherry"
   }
   ```
   - Gets the **actual values** of array elements
   - Most common and recommended for iterating arrays
   - Type-safe: TypeScript knows `fruit` is of type `string` (from `fruits: string[]`)
   - Cleaner syntax than traditional `for` loops

2. **`for...in` Loop** - Iterates over array **indices**
   ```typescript
   for (const index in fruits) {
       console.log(index); // "0", "1", "2"
   }
   ```
   - Gets the **indices** (keys) of the array
   - Returns strings, not numbers (e.g., `"0"`, `"1"`, `"2"`)
   - Less commonly used for arrays (more useful for objects)
   - **Note**: For arrays, `for...of` is generally preferred

**Key Differences:**
- `for...of` → values: `"apple"`, `"banana"`, `"cherry"`
- `for...in` → indices: `"0"`, `"1"`, `"2"`

### Array Methods with TypeScript

TypeScript provides full type safety for array methods. The most commonly used method is `map()`:

**`map()` Method** - Transforms each element
```typescript
const numbers3: number[] = numbers.map((number) => number * 2);
```
- Creates a new array by transforming each element
- The callback function receives each element with its correct type
- TypeScript infers types: `number` parameter from `numbers: number[]`
- Return type is automatically inferred: `number[]` from the transformation
- **Immutable**: Original array is not modified

**Type Safety Benefits:**
- TypeScript knows the parameter type in the callback
- TypeScript infers the return type of the new array
- Prevents type errors: `numbers.map((n) => n.toUpperCase())` would error (numbers don't have `toUpperCase()`)
- Provides autocomplete based on the element type

**Other Useful Array Methods** (all type-safe):
- `filter()` - Creates new array with filtered elements
- `reduce()` - Reduces array to a single value
- `forEach()` - Executes function for each element
- `find()` - Finds first matching element
- `some()` / `every()` - Boolean checks on elements

**Example from code:**
- `numbers3` - Created by mapping `numbers` and doubling each value

### Type Inference

TypeScript's compiler can **automatically infer** (figure out) types in many cases:

- When you assign a value to a variable, TypeScript infers the type
- When a function returns a value, TypeScript can infer the return type
- Arrays: TypeScript can infer `string[]` from `["apple", "banana"]`
- However, **explicit type annotations are recommended** for:
  - Function parameters (required)
  - Function return types (recommended for clarity)
  - Public APIs and interfaces
  - Arrays when you want to ensure type safety

**Example**: If you write `return "hello"` in a function, TypeScript knows the return type is `string` even without explicitly writing `: string`, but it's better to be explicit for clarity and documentation.

### Key Takeaways

- Type annotations help catch errors early and make code more maintainable
- Each data type has specific use cases and limitations
- TypeScript's type system is optional but recommended for better code quality

### See It In Action

Open `index.ts` to see these concepts implemented with practical examples. 

**Try these experiments:**
- Try passing a string to the `Sum` function and see the type error
- Uncomment the `u.toUpperCase()` line to see how `unknown` prevents unsafe operations
- Compare how `any` allows unsafe operations vs `unknown` requiring type checks
- Experiment with type inference by removing explicit return types and see if TypeScript still catches errors
- Test default parameters: call `greet2("zain")` vs `greet2("zain", 5)` and see the difference
- Test optional parameters: call `greet3("zain")` vs `greet3("zain", 5)` and see how `id` can be undefined
- Experiment with rest parameters: call `greet4()` with different numbers of arguments and see how they're collected into an array
- Try adding a number to the `fruits` array and see the type error: `fruits.push(123)`
- Create arrays using different methods and see how TypeScript enforces type safety
- Compare `for...of` vs `for...in`: see how `for...of` gives values while `for...in` gives indices
- Experiment with `map()`: try `numbers.map((n) => n * 2)` and see how TypeScript infers the return type
- Try using wrong types in `map()`: `fruits.map((f) => f * 2)` to see the type error
- Experiment with other array methods like `filter()`, `find()`, `reduce()` and observe type safety

## TypeScript Configuration

The project uses a `tsconfig.json` file with the following key settings:

- **Module System**: `nodenext` (Node.js ESM)
- **Target**: `esnext` (latest ECMAScript features)
- **Strict Mode**: Enabled for enhanced type safety
- **Source Maps**: Enabled for debugging
- **Declaration Files**: Enabled for type definitions

## Common Commands

- `tsc --init` - Initialize a new TypeScript configuration file
- `tsc --version` - Check TypeScript version
- `tsc --noEmit` - Type-check without generating output files
- `tsc --watch` - Watch mode for automatic recompilation

## Learning Resources

- **Thapa Technical YouTube Playlist**: [TypeScript Tutorial](https://youtu.be/Ek0LMDfTupE?si=3yap7Nhq13gClfE4)

