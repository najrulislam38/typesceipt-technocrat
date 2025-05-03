{
  // Generic

  type GenericArray<T> = Array<T>;

  // const rollNumber : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const rollNumber : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const mentors : string[] = ['John', 'Jane', 'Jim', 'Jack', 'Jill'];
  // const mentors : Array<string> = ['John', 'Jane', 'Jim', 'Jack', 'Jill'];
  const mentors: GenericArray<string> = ["John", "Jane", "Jim", "Jack", "Jill"];

  // const boolArray : boolean[] = [true, false, true, false, true, false, true, false, true, false];
  // const boolArray : Array<boolean> = [true, false, true, false, true, false, true, false, true, false];
  const boolArray: GenericArray<boolean> = [true, false, true, false, true];

  const users: GenericArray<{ name: string; age: number; role?: string }> = [
    {
      name: "Najrul",
      age: 25,
      role: "frontend Developer",
    },
    {
      name: "Mahfuz",
      age: 65,
    },
  ];

  //  generic tuple

  type GenericTuple<T, U> = [T, U];

  const Man: GenericTuple<string, string> = ["Hanif", "Rofik"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    134,
    { name: "Hafiz", email: "hafiz@gmail.com" },
  ];

  //
}
