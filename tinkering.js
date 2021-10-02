function multiply(a, b) {
    return a * b;
}

const result = multiply(2, 4);

console.log(result);


function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("christopher"));


function sayHello() {
  const message = "Hello!";
  return message;
}

console.log(sayHello());

function findAverage(x, y) {
  let answer = (x + y) / 2;
  return answer;
}

console.log(findAverage(5, 9));


function isPrime(integer) {
  for (let x = 2; x < integer; x++) {
    if(integer % x === 0) {
      console.log(integer + " is divisible by " + x);
      return false;
    }
  }
  console.log(integer + " is a prime number.")
  return true;
}

isPrime(47);