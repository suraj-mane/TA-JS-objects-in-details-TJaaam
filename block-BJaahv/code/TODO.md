# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

Using function to create object

function projects(name, id, noOfProjects){
  let nproject = {};
  return function (){
    :getProjects function() {
      return noOfProjects;
    } 
    :changeName function(newName) {
      return name ; 
      name = newName;
    }
    :incrementProject function (){
      return noOfProjects + 1;
    }
    :decrementProject function () {
      return noOfProjects - 1;
    }
  }
  return nproject;
}

Using Object.create (prototypal pattern)

let newProject = {
  :getProjects function() {
    return noOfProjects;
  } 
  :changeName function(newName) {
    return name ; 
    name = newName;
  }
  :incrementProject function (){
    return noOfProjects + 1;
  }
  :decrementProject function () {
    return noOfProjects - 1;
  }
}

function Project(name, id, noOfProjects){
  let nProject = Object.create(newProject);
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

///Class function;

Class Project() {
  constructor(name, id, noOfProjects){
  getProjects () {
    return noOfProjects;
  } 
  changeName (newName) {
    return name ; 
    name = newName;
  }
  incrementProject (){
    return noOfProjects + 1;
  }
  decrementProject() {
    return noOfProjects - 1;
  }
  }
}