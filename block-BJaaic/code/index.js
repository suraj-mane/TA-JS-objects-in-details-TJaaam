let CreateAnimal = {
    eat: function(){
      return `I live in ${this.location} and I can eat`;
    },
    cangeLocation: function(newLoction){
      this.loction = newLoction;
    },
    summery: function(){
      return `I live in ${this.location} and I have ${this.numberOfLegs}`
    },
}

let CreateDog = {
  brek() {
    return `I am ${this.name} and I can bark 🐶`;
  },
  changeName(newName) {
    return this.name = newName;
  },
  changeColor(newColor) {
    return this.color = newColor;
  },
  summery() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(CreateDog, CreateAnimal);

let CreateCat = {
  meow(){
    return `I am ${this.name} and I can do mewo meow 😹`
  },
  changeColorOfEye(newColor){
    this.color = newColor;
    return this.color;
  }
};

Object.setPrototypeOf(CreateCat, CreateAnimal);

function animal(loction, numberOfLegs){
  let user = Object.create(CreateAnimal);
  user.location = loction;
  user.numberOfLegs = numberOfLegs;
  return user;
}

function dog(location, numberOfLegs, name, color){
  let user = animal(location, numberOfLegs);
  Object.setPrototypeOf(user, CreateDog);
  user.name = name;
  user.color = color;
  return user;
}

function cat(location, numberOfLegs, name, color){
  let user = animal(location, numberOfLegs);
  Object.setPrototypeOf(user, CreateCat);
  user.name = name;
  user.colorOfEye = color;
  return user;
}
