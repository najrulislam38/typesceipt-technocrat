{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    bus: string;
  };

  type Owner = "bike" | "car" | "bus"; // manually defined
  type Owner2 = keyof Vehicle; // define by keyof operator'

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Hafiz",
    age: 25,
    address: "Dhaka",
  };

  const car = {
    model: "BMW",
    year: 2023,
  };

  const res1 = getPropertyValue(user, "name");
  const resByCar = getPropertyValue(car, "model");

  // obj[key];  25

  //
}
