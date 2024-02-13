// Animal Class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
    document.getElementById('output').innerHTML += `<p>The ${this.species} makes a sound</p>`;
  }
}

// Cat Class
class Cat extends Animal {
  purr() {
    console.log('purr');
    document.getElementById('output').innerHTML += `<p>purr</p>`;
  }
}

// Dog Class
class Dog extends Animal {
  bark() {
    console.log('woof');
    document.getElementById('output').innerHTML += `<p>woof</p>`;
  }
}

// Test Cases
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
