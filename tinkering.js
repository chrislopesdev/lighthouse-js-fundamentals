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


// .map() example

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(item) {
  item = item *= 1.15;
  return Number(item.toFixed(2));
})

console.log(totals);