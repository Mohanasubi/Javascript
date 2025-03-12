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

let x = 5;
console.log(++x); 
console.log(x--);

