{
  // interface - generic

  interface Developer<T, U = undefined> {
    name: string;
    computer: {
      brand: string;
      model: string;
      ram: number;
      processor: string;
    };
    smartWatch: T;
    bike?: U;
  }

  interface SmartWatch {
    brand: string;
    model: string;
    display: string;
    heartTracker?: boolean;
    sleepTracker?: boolean;
  }

  type Bike = {
    brand: string;
    model: string;
    engine: number;
  };

  //   generic with multiple types

  const poorDeveloper: Developer<SmartWatch> = {
    name: "Najrul",
    computer: {
      brand: "Walton",
      model: "Walton 1",
      ram: 8,
      processor: "i5",
    },
    smartWatch: {
      brand: "Multi-Nation",
      model: "Multi-Nation 1",
      display: "OLED",
    },
  };

  const richDeveloper: Developer<SmartWatch, Bike> = {
    name: "Tanzir Rifat",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      ram: 16,
      processor: "M1 Pro",
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch",
      display: "Retina",
      heartTracker: true,
      sleepTracker: true,
    },
    bike: {
      brand: "Yamaha",
      model: "R15",
      engine: 155,
    },
  };

  //
}
