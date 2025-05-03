{
  // type assertion
  let anyValue;
  anyValue = "hello world";
  anyValue = 1234;

  anyValue as number;

  const kgToGam = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const convertedResult = parseInt(value) * 1000;
      return `Value in gram is ${convertedResult}`;
    } else if (typeof value === "number") {
      return `Value in gram is ${value * 1000}`;
    }
  };

  const result1 = kgToGam(5) as number;
  const result2 = kgToGam("5 kg") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
