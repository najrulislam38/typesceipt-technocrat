// Problem 1. Write a TypeScript program that outputs a welcome message.

const message: string =
  "Hello World, I will complete this course successfully and become a Next level Web Developer!";

// console.log(message);

/* Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.
 */

// const person: Person = {
//   name: "Mofiz",
//   age: 23,
//   role: "user",
// };

const getUserInfo = (
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  if (role) {
    console.log(`Role: ${role}`);
  } else {
    console.log("Role: not specified");
  }
};

// getUserInfo("Hafiz", 34, "user");

/* 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
 */

type Person = {
  name: string;
  address: string;
  "hair and eyes color": string;
  "income and expense": number;
  hobbies: string;
  "family members": number;
  job: string;
  "marital status": string;
  friends: string[];
};

const person: Person = {
  name: "abcd",
  address: "holonda",
  "hair and eyes color": "black",
  "income and expense": 2000,
  hobbies: "programming",
  "family members": 7,
  job: "Front end developer",
  "marital status": "unmarried",
  friends: ["Rahim", "Jobbar", "Kuddus"],
};

// console.log(person["family members"]);

/* Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine.
 */

interface Book {
  title: string;
  author: string;
  pages: number;
}

interface Magazine {
  title: string;
  publisher: string;
  issueNumber: number;
}

type RedingMaterial = Book | Magazine;

type DetailedPublication = Book & Magazine;

const item1: RedingMaterial = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 42,
};

const item2: RedingMaterial = {
  title: "Clean Code",
  publisher: "Tech Publisher",
  issueNumber: 42,
};

const item3: DetailedPublication = {
  title: "book",
  author: "Writer",
  issueNumber: 45,
  publisher: "Boi Prokasoni",
  pages: 230,
};

/**
 Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that:
Takes a single string argument.
Returns the string in reverse order.
 */

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello world"));

/*  6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

*/
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// console.log(sumAll(1, 2, 3));
// console.log(sumAll(10, 20, 30, 40));
// console.log(sumAll());

{
  const friends = ["Raihan", "Hasim", "Rahman", "Arif", "Jamir"];
  const vehicle = {
    name: "car",
    model: "TH-23423",
    year: 2023,
    price: 600000,
  };

  // spreed operator
  const car = {
    ...vehicle,
    color: "black",
  };

  //  rest operator
  const { name, model, ...rest } = vehicle;

  // destructuring

  const [, , bestFriend] = friends;

  // console.log(car);
  // console.log(rest);
  // console.log(bestFriend);
}

/*
7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number.

*/

function getValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// console.log(getValue("Narrowing"));
// console.log(getValue(10));

/*
 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.
*/

type User = {
  name: string;
  email: string;
};

type Admin = { adminLevel: "first" | "second" | "third" };

type AdminUser = User & Admin;

const adminUsr: AdminUser = {
  name: "admin",
  email: "admin@gmail.com",
  adminLevel: "first",
};

function describeAdmin(user: AdminUser): string {
  return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
}

// console.log(describeAdmin(adminUsr));

/*
Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
 */

const employee: {
  employeeName: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
} = {
  employeeName: "Leo Messi",
  age: 37,
  address: {
    city: "Dhaka",
    country: "bangladesh",
  },
};

function getEmployeeCity(employee: {
  employeeName: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
}): string {
  return employee?.address?.city ?? "city not available.";
}

// console.log(getEmployeeCity(employee));

/*
10: Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
*/

// const isAuthenticate = null;

// const result1 = isAuthenticate ?? "Guest";
// const result2 = isAuthenticate ? isAuthenticate : "Guest";

// console.log({ result1 });
// console.log({ result2 });

const getDisplayName = (name: string | null | undefined) => {
  return name ?? "Anonymous";
};

// console.log(getDisplayName(undefined));

/* 11: Unknown Type
Objective: Handle different types with the unknown type.

Instructions:

Write a function processData(data: unknown) that:
Checks if data is a string and returns the uppercased version.
If data is a number, returns the square of it.

*/

function processData(data: unknown) {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * data;
  }
}

// console.log(processData("hello"));
// console.log(processData(10));

/*
12: Never Type
Objective: Use the never type for functions that don’t return.

Instructions:

Write a function handleError that:
Accepts a message: string.
Throws an error with the given message.
Use the never return type to indicate that this function never returns.

*/

function handleError(message: string): never {
  throw new Error(message);
}

// handleError("Error hoye gese bhai");

/*
14: Asynchronous TypeScript and Type Aliases
Objective: Simulate an asynchronous operation with TypeScript.

Instructions:

Write an asynchronous function that:
Simulates fetching user data (containing name and age).
Returns the data after a short delay.
 */

type UserData = {
  name: string;
  age: number;
};

async function fetchUserData(): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alias", age: 25 });
    }, 1000);
  });
}

fetchUserData().then((data) => {
  console.log("UserData: ", data);
});
