{
  // Function with generic type
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  type User = {
    id: number;
    name: string;
  };

  const result1 = createArray("Hello World");
  const result2 = createArrayWithGeneric<string>("Hello World");
  const result3 = createArrayWithGeneric<User>({
    id: 31254,
    name: "Mohammad",
  });

  // Function with Tuple type
  const createArrayWithTuple = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
  };

  const result1WithTuple = createArrayWithTuple<string, number>(
    "Hello World",
    123
  );
  const result2WithTuple = createArrayWithTuple<string, { name: string }>(
    "Hello World",
    { name: "Hafiz" }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return { ...student, course };
  };

  const student1 = addCourseToStudent<{
    name: string;
    email: string;
    devType: string;
  }>({ name: "Mehadi", email: "mehedi@gmail.com", devType: "MERN" });
  const student2 = addCourseToStudent<{
    name: string;
    email: string;
    devType: string;
    hasWatch: boolean;
  }>({
    name: "haljdgf",
    email: "halaf@gmail.com",
    devType: "PERN",
    hasWatch: true,
  });

  //
}
