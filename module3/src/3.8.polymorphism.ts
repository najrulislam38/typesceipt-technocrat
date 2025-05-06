{
  // polymorphism

  class Person {
    getSleep() {
      console.log("I am sleeping for 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping for 7 hours per day");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping for 6 hours per day");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  //
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // Circle low: pi * r * r
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  //   Rectangle low: height * width
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShareArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 8);

  getShareArea(shape1);
  getShareArea(shape2);
  getShareArea(shape3);

  //
}
