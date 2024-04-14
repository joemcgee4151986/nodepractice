class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  greeting() {
    console.log(`greeting ${this.name} you are ${this.age} years old.`);
  }
    
    }
  
  
  module.exports = Person;