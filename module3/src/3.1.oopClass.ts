{
  // OOP --> Class
  class Animal {
    // public name: string; // default vabe public thake. tar pore o public key diye bole dewya jay.
    // public species: string;
    // public sound: string;

    // constructor(name: string, species: string, sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    // }

    // parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Bangoli Tiger Devil", "dog", "ghew ghew");
  const cat = new Animal("Bonolota", "cat", "meaw meaw");
  //   cat.name;
  //   dog.name;

  dog.makeSound();

  //
}
