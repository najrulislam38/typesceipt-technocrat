{
  // Utility Type
  //   Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNO: string;
  };

  //   Pick - বেছে নেওয়া
  type NameAge = Pick<Person, "name" | "age">; // NameAge = { name: string; age: number}

  //   Omit - বাদ দেওয়া
  type ContactInfo = Omit<Person, "name" | "age">; // ContactInfo = {email?: string | undefined; contactNo: string}

  //  Required - Sob property required hoye jay.
  type PersonRequired = Required<Person>;

  //    Partial - Sob property optional hoye jay.
  type PersonPartial = Partial<Person>;

  //   Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Hafiz",
    age: 23,
    contactNO: "021",
  };

  // person1.name = "namidul"; con't modify the property value

  //  Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // }

  type MyObj = Record<string, string>;

  const obj: MyObj = {
    a: "aa",
    b: "lasdaflkdas",
    c: "cat",
    d: "dragon",
  };

  const emptyObj: Record<string, unknown> = {};

  //
}
