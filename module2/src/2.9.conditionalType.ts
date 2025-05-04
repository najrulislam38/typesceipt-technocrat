{
  // conditional type
  type A = true;
  type B = undefined;

  type C = A extends B ? "A is true" : "A is false"; // A is false
  type D = A extends null ? true : B extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    hors: string;
  };

  // use keyof to get the keys of the object

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasHors = CheckVehicle<"hors">;
  // type HasTractor = CheckVehicle<"tractor">; // false

  //
}
