// Pseudoclassical Pattern
function Animal(loction, numberOfLegs) {
  this.location = loction;
  this.numberOfLegs = numberOfLegs;
}

Animal.prototype = {
  eat(){
    return `I live in ${this.location} and I can eat`;
  },
  changeLocation(newLocation){
    this.location = newLocation;
    return this.location;
  },
  summary() {
    return  `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
};

function Dog(loction, numberOfLegs, name, color){
  Animal.call(this, loction, numberOfLegs);
  this.name = name;
  this.color = color;
}

Dog.prototype = {
  bark() {
    return `I am ${name} and I can bark 🐶`;
  },
  changeName(newName) {
    this.name = newName;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

let dog = new Dog('pune', 2 , 'sun', 'red');

function Cat(loction, numberOfLegs, name, colorOfEyes){
  Animal.call(this, loction, numberOfLegs);
  this.name = name;
  this.colorOfEyes = colorOfEyes;
}

Cat.prototype = {
  meow() {
    return `I am ${this.name} and I can do mewo meow 😹`;
  },
  changeName(newName) {
    this.name = newName;
    return this.name;
  },
  changeColor(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype);

let cat = new Cat('pune', 2 , 'sun', 'red');

// Class

class Animal {
  constructor(loction, numberOfLegs){
    this.loction = loction;
    this.numberOfLegs = numberOfLegs;
  }
  eat(){
    return `I live in ${this.location} and I can eat`;
  }
  changeLocation(newLocation){
    this.location = newLocation;
    return this.location;
  }
  summary() {
    return  `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
};

class Dog extends Animal {
  constructor(loction, numberOfLegs, name, color){
    super(loction, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    return `I am ${this.name} and I can bark 🐶`;
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

let dog = new Dog('pune', 2 , 'sun', 'red');

class Cat extends Animal {
  constructor(loction, numberOfLegs, name, color){
    super(loction, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  meow() {
    return `I am ${this.name} and I can do mewo meow 😹`;
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

let cat = new Cat('pune', 2 , 'sun', 'red');