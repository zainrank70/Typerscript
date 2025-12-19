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

### Arrow Functions with Type Annotations

When defining arrow functions, you can specify:
- **Parameter types**: `(param1: type1, param2: type2)`
- **Return type**: `: returnType` after the parameter list

**Example from code:**
- `Sum` function takes two `number` parameters and returns a `number`
- `fullname` function takes two `string` parameters and returns a `string`

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

### Key Takeaways

- Type annotations help catch errors early and make code more maintainable
- Each data type has specific use cases and limitations
- TypeScript's type system is optional but recommended for better code quality

### See It In Action

Open `index.ts` to see these concepts implemented with practical examples. Try modifying the code to see how TypeScript catches type errors - for example, try passing a string to the `Sum` function and see what happens!

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

