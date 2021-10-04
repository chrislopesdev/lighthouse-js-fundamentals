// function multiply(a, b) {
//     return a * b;
// }

// const result = multiply(2, 4);

// console.log(result);


// function reverseString(reverseMe) {
//   let reversed = "";
//   for (let i = reverseMe.length - 1; i >= 0; i--) {
//     reversed += reverseMe[i];
//   }
//   return reversed;
// }

// console.log(reverseString("christopher"));


// function sayHello() {
//   const message = "Hello!";
//   return message;
// }

// console.log(sayHello());

// function findAverage(x, y) {
//   let answer = (x + y) / 2;
//   return answer;
// }

// console.log(findAverage(5, 9));


// function isPrime(integer) {
//   for (let x = 2; x < integer; x++) {
//     if(integer % x === 0) {
//       console.log(integer + " is divisible by " + x);
//       return false;
//     }
//   }
//   console.log(integer + " is a prime number.")
//   return true;
// }

// isPrime(47);


// // .map() example

// var bills = [50.23, 19.12, 34.01,
//   100.11, 12.15, 9.90, 29.11, 12.99,
//   10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];

// var totals = bills.map(function(item) {
//   item = item *= 1.15;
//   return Number(item.toFixed(2));
// })

// console.log(totals);


// // looping over arrays in arrays

// var donutBox = [
//   ["glazed", "chocolate glazed", "cinnamon"],
//   ["powdered", "sprinkled", "glazed cruller"],
//   ["chocolate cruller", "Boston creme", "creme de leche"]
// ];

// // here, donutBox.length refers to the number of rows of donuts
// for (var row = 0; row < donutBox.length; row++) {
//   console.log(donutBox[row]);
// }

// for (var row = 0; row < donutBox.length; row++) {
//   // here, donutBox[row].length refers to the length of the donut array currently being looped over
//   for (var column = 0; column < donutBox[row].length; column++) {
//     console.log(donutBox[row][column]);
//   }
// }


// var numbers = [
//   [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//   [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//   [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//   [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//   [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//   [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//   [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//   [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//   [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//   [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];

// your code goes here
// for (var row = 0; row < numbers.length; row++) {
//   for (var col = 0; col <numbers[row].length; col++) {
//       if (numbers[row][col] % 2 === 0) {
//           numbers[row][col] = 'even';
//       } else {
//           numbers[row][col] = 'odd';
//       }
//   }
// }

// console.log(numbers);


// looping range

const range = function (start, end, step) {
  let numbers = [];
  // console.log(start);
  // console.log(end);
  // console.log(step);
  if (start === undefined || start > end || end === undefined || step === undefined || step <= 0) {
    return numbers = [];
    // console.log("Please enter valid numbers") 
  } else {
    for (let i = start; i <= end; i = i + step) {
      numbers.push(i);
    }
    return numbers;
    // console.log("These numbers are valid")
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

