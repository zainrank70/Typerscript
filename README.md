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

## Example Code

The `index.ts` file contains a simple example using an arrow function:

```typescript
const Sum = (a: number, b: number): number => {
    return a + b;
};
console.log(Sum(5, 10));
```

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

