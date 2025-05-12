# TypeScript Interview Questions & Answers

## 1. What are some differences between interfaces and types in TypeScript?

- **Declaration merging**: Interfaces support declaration merging, but type aliases do not.
- **Extending**: Interfaces can extend other interfaces or type aliases. Type aliases can also extend via intersections (`&`), but not merge.
- **Complex types**: Type aliases can represent primitives, unions, tuples, and more, while interfaces are primarily for object shapes.
- **Readability**: Interfaces are generally preferred for defining object shapes, especially in public APIs, due to better readability.

```ts
interface Person {
  name: string;
}

type Employee = {
  id: number;
};
```

## 2. What is the use of the `keyof` keyword in TypeScript? Provide an example.

The `keyof` keyword creates a union of all property names (keys) of a given type.

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // 'name' | 'age'

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

## 3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

- `any`: Opts out of type checking. It disables type safety, allowing any operation.
- `unknown`: A safer alternative to `any`. You must perform type checks before operating on an `unknown` value.
- `never`: Represents values that never occur, like functions that throw or infinite loops.

```ts
let a: any = 5; // No type safety
let b: unknown = "hi"; // Requires checking before use
let c: never; // Cannot assign anything
```

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums allow the definition of named constants, making code more readable and maintainable.

**Numeric Enum:**

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

**String Enum:**

```ts
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
}
```

## 5. What is type inference in TypeScript? Why is it helpful?

Type inference is when TypeScript automatically infers the type of a variable without explicit annotations. It helps reduce code verbosity while still maintaining type safety.

```ts
let message = "Hello"; // inferred as string
```

**Why it’s helpful:**

- Reduces the need for repetitive annotations
- Increases productivity
- Maintains safety without extra overhead

## 6. How does TypeScript help in improving code quality and project maintainability?

- **Static type checking** reduces runtime errors.
- **Better tooling**: Autocompletion, refactoring, and navigation.
- **Self-documenting code**: Types describe expected structures.
- **Easier refactoring**: Types prevent unintended changes.
- **Improved team collaboration**: Code becomes more predictable.

## 7. Provide an example of using union and intersection types in TypeScript.

**Union Type:**

```ts
function printId(id: string | number) {
  console.log("ID:", id);
}
```

**Intersection Type:**

```ts
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

const employee: Staff = {
  name: "Alice",
  id: 101,
};
```
