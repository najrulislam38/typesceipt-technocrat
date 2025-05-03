{
  //  nullable type, unknown type, never type

  //1. nullable type

  const search = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("There is no value to search");
    }
  };

  search("hello");

  // 2. unknown typeof type

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedResult = (value * 1000) / 3600;
      console.log(`Speed in meter per second is ${convertedResult}`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedResult = (parseInt(result) * 1000) / 3600;
      console.log(`Speed in meter per second is ${convertedResult}`);
    } else {
      console.log("Invalid value type");
    }
  };

  // getSpeedInMeterPerSecond(1500)
  getSpeedInMeterPerSecond("1578 kmh^-1"); // string value
  getSpeedInMeterPerSecond(null); // invalid value type

  // 3. never type

  const throwError = (message: string): never => {
    throw new Error(message);
  };

  throwError("This is an error message");
}
