{
  // Mapped type

  const arrOfNumbers: number[] = [1, 3, 5];

  // const arrOfString: string[] = ["1", "3", "5"];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());

  // console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"];

  // type AreaString = {
  //   height: string;
  //   width: string;
  // };

  // using keyof operator. AreaNumber => "height" | "width"
  //  mapped type

  //  T => { height: string; width: number }
  // key => T["height" | "width"]
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 238,
  };

  //
}
