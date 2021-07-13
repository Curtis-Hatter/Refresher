// Let's create a class of Person

// function Person(name){
//     this.name = name;
//     this.greeting = function(){
//         console.log(`Hi! I'm ${this.name}.`);
//     };
// };

// Create a more difficult constructor
// function Person(first, last, age, gender, interests){
//     this.name={
//         first: first,
//         last : last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function(){
//         let personBio = `Hello, my name is ${this.name.first} ${this.name.last}, I'm ${this.age} years old and I like `;
//         for(let i=1; i<this.interests.length;i++)
//         {
//             personBio = personBio.concat(`${this.interests[i-1]}, `)
//         }
//         personBio = personBio.concat(`and ${this.interests[this.interests.length-1]}!`)
//         console.log(personBio);
//     };
//     this.greeting = function(){
//         console.log(`Hello, my name is ${this.name.first} ${this.name.last}.`);
//     };
// }

// const foo={
//     name: "albert"
// };

// console.log(foo.name);
// delete foo.name;
// console.length(foo.name);

// var person1 = new Person("Curtis", "Hatter", 27, 'M', ["Coding", "Video Games", "Movies"]);
// // var person2 = new Person("Savannah");
// // console.log(person1.name);
// person1.bio();
// // person1.greeting();


// inline caching
function findUser(user){
    return `found ${user.firstName} ${user.lastName}`;
};

const UserData= {
    firstName: "Johnson",
    lastName: "Junior"
}

findUser(UserData); //Convert this to simply say found Johnson Junior

// hidden classes
// this will deoptimize code
function Animal(x,y){
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

obj1.a = 20;
obj1.b = 100;
abj2.b = 30;
obj2.a = 100;

// Call stack + Memory Heap
const number = 610; //allocate memory for number
const string = 'some text' //allocate memory for a string
const human = { // allocate memory for an object... and its values.
    first: 'andrei',
    last: 'neagoie'
}

function subtractTwo(num){
    return num -2;
}

function calculate(){
    const sumTotal = 4 +5;
    // return sumTotal;
    return subtractTwo(sumTotal);
}

// Everytime we run this code, we use the call stack.
// think of Call stack as a region in memory which operaties in "first in last out mode"
calculate();

//Call stack: adds calculate to the call stack and once executed removes it.

// Let's cause a stack overflow
// Recursion
// function inception(){
//     inception()
// }

// Let's cause a memory leak
// Infinite loop that fills all the memory heap and doesn't allow garbage collector to execute that crashes the browser
// let array =[];
// for (let i=5; i>1; i++){
//     array.push(i-1);
// }

// What can cause Memory Leaks
// Global variables
// var a = 1;

// Event listeners
// You keep adding but never remove the event listeners
// var element = document.getElementById('button');
// element.addEventListener('click', onclick);

// SetInterval
// setInterval(()=>{
    // These objects will never be collected by the garbage collector
    // unless there is a clear it will constantly run
    // referncing objects...
// })

// Dealing with the synchronicity of Javascript
console.log('1');
setTimeout(()=>{console.log('2'), 1000});
console.log('3');

// This will print 1 3 2
// log(1) is printed
// setTimeout is a web API that is not sent to the call stack
// log(3) is printed
// behind the scenes: setTimeout waits 1 sec then will push the callback (what to do once it is done). The call back is log(2)
// the callback sets a que that waits for the eventLoop to respond against the call stack waiting till the call stack is empty to 
// then push the call back que onto the call stack