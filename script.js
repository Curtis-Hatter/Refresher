// Let's create a class of Person

function Person(name){
    this.name = name;
    this.greeting = function(){
        console.log(`Hi! I'm ${this.name}.`);
    };
};

var person1 = new Person("Curtis");
var person2 = new Person("Savannah");
console.log(person1.name);
person1.greeting();

