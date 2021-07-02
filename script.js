// Let's create a class of Person

// function Person(name){
//     this.name = name;
//     this.greeting = function(){
//         console.log(`Hi! I'm ${this.name}.`);
//     };
// };

// Create a more difficult constructor
function Person(first, last, age, gender, interests){
    this.name={
        first: first,
        last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function(){
        let personBio = `Hello, my name is ${this.name.first} ${this.name.last}, I'm ${this.age} years old and I like `;
        for(let i=1; i<this.interests.length;i++)
        {
            personBio = personBio.concat(`${this.interests[i-1]}, `)
        }
        personBio = personBio.concat(`and ${this.interests[this.interests.length-1]}!`)
        console.log(personBio);
    };
    this.greeting = function(){
        console.log(`Hello, my name is ${this.name.first} ${this.name.last}.`);
    };
}


var person1 = new Person("Curtis", "Hatter", 27, 'M', ["Coding", "Video Games", "Movies"]);
// var person2 = new Person("Savannah");
// console.log(person1.name);
person1.bio();
// person1.greeting();

