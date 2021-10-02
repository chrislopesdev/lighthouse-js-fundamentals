// const sayHello = function (name) {
//   console.log("Hello, " + name);
// }

// sayHello("Chris");


const sayHello = function (name) {
  console.log(`Hello, ${name}`);
}
sayHello("Chris");


const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("John");

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
console.log(greeting);


const isEven = function (num) {
  return num % 2 === 0;
}

// const tenIsEven = isEven(10);
// const elevenIsEven = isEven(11);
// console.log(tenIsEven);
// console.log(elevenIsEven);
// Can be written without creating variables:
console.log(isEven(10));
console.log(isEven(11));
