{
  //  interface
  type User1 = {
    name: string;
    age: number;
  };

  //   intersect
  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: "John",
    age: 32,
  };

  const user: UserWithRole2 = {
    name: "Najrul",
    age: 25,
    role: "admin",
  };

  //   js --> object , array --> object, function --> object

  //   array interface

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3, 4, 5];

  type Add = (num1: number, num2: number) => number;
  //   function interface
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
