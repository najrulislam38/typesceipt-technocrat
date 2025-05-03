{
  // constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return { ...student, course };
  };

  interface Student {
    id: number;
    name: string;
    email: string;
    devType: string;
    hasWatch?: boolean;
  }

  const student3 = addCourseToStudent({
    id: 323,
    name: "hafza",
    email: "x@gmail.com",
    computer: "computer",
  });

  const student1 = addCourseToStudent<Student>({
    id: 232,
    name: "Mehadi",
    email: "mehedi@gmail.com",
    devType: "MERN",
  });
  const student2 = addCourseToStudent<Student>({
    id: 4312,
    name: "haljdgf",
    email: "halaf@gmail.com",
    devType: "PERN",
    hasWatch: true,
  });

  //
}
