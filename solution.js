var testOne=5;
testOne = "abc"
function test(a){
    console.log(a)
}
test(testOne)


let testTwo = 5
testTwo = "xyz"
function test2(a){
    console.log(a)
}
test2(testTwo)


const testThree = 3.14;
function test3(a){
    console.log(a)
}
test3(testThree)

//primitive datatypes
let str1 = "subi"
console.log(typeof(str1))
const number= 3.14
console.log(typeof(number))
let bool = true;
console.log(typeof(bool))
let input;
console.log(typeof(input))
let input2 = null;
console.log(input2)

//operators
const sum = 5 + 3;
const diff = 10 - 2; 
const p = 4 * 2; 
const q = 8 / 2; 
console.log(sum, diff, p, q);

let n = 10;
n += 5;
n *= 2;
console.log(n);

console.log(10 > 5);
console.log(10 === "10");

const a = true, b = false;
console.log(a && b);
console.log(a || b);

const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

let num = 5;
console.log(++num); 
console.log(num--);

//function declaration
function greet(){
    console.log("Function declaration")
}
greet()
//function expression
const greet1 = function(){
    console.log("expression")
}
greet1()

//arrow function
const greet2 = ()=>{
    console.log("arrow function")
}
greet2()


//template literals
let strInput='subi'
console.log(`hello ${strInput}`)

//default parameters
//default parameter set to undefined
function multiplyNumbers(x,y)
{
    console.log(x*y)
}
multiplyNumbers()

function addNumbers(x,y=10)
{
    console.log(x+y)
}
addNumbers(10)

//array destructuring

const arrayInput = [10, 20, 30, 40]

const [x, y, z, w] = arrayInput;
console.log(x);
console.log(y);
console.log(z);
console.log(w);

//object destructuring

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  let {lastName, firstName} = person;
  console.log(lastName +' '+ firstName)

  //spread operator

  let inputOne= [10,20]
  let inputTwo=[...inputOne,30,40,50]
  let inputThree=[...inputOne,...inputTwo,60,70,80]
  console.log(inputTwo)
  console.log(inputThree)

  //rest operator

  function calculateSum(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(calculateSum(1, 2)); 
console.log(calculateSum(1, 2, 3)); 
console.log(calculateSum(1, 2, 3, 4, 5));




