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
  brek: function() {
    return `I am ${this.name} and I can bark 🐶`;
  },
  changeName: function(newName) {
    return this.name = newName;
  },
  changeColor: function(newColor) {
    return this.color = newColor;
  },
  summery: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

let CreateCat = {
  meow: function(){
    return `I am ${this.name} and I can do mewo meow 😹`
  },
  changeColorOfEyes: function(newColor){
    this.color = newColor;
  }
};

Object.setPrototypeOf(CreateDog, CreateCat);

function animal(loction, numberOfLegs){
  let user = Object.create(CreateAnimal);
  user.location = loction;
  user.numberOfLegs = numberOfLegs;
  return user;
}

function dog(name, color){
  let user = Object.create(CreateDog);
  user.name = name;
  user.color = color;
  return user;
}

function cat(name, color){
  let user = Object.create(CreateCat);
  user.name = name;
  user.color = color;
  return user;
}

let animal1 = new dog('moon', 'black');
let animal2 = new cat('mo', 'white');