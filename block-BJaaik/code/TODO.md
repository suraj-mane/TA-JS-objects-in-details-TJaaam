## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

class Person {
  constructor(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat(){
    return `The ${this.name} is eat. and his age is ${this.age}.`;
  }
  sleep(){
    return `The ${this.name} is sleep at 11am.`;
  }
  walk(){
    return `The ${this.name} is walk behind the bilding.`;
  }
}

class Player extends Person {
  constructor(sportsName, name, age, gender){
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    return `${this.sportsName} is play ${this.name}. and age is ${this.age}`;
  }
}

class Teacher extends Person {
  constructor(instituteName,name, age, gender){
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach(){
    return `${this.name} is teacher at the ${this.instituteName} of univercity.`
  }
}

class Artist extends Person {
  constructor(kind, name, age, gender){
    super(name, age, gender);
    this.kind = kind;
  }
  createArt(){
    return `The ${this.name} is ${this.kind}.`;
  }
}

class Cricketer extends Player {
  constructor(name, age, gender,teamName, sportsName){
    super(name, age, gender,sportsName);
    this.teamName = teamName;
  }
  playCricket(){
    return `The ${this.teamName} is great team`;
  }
}


let pune = new Cricketer('pune', 'cricket');