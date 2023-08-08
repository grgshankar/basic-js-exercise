// - Write a JavaScript program that prints 'Hello World'.
// console.log("hellow world!!!");

// - Write a JavaScript program to set the value of PI.
// const piValue = Math.PI;
// console.log(piValue);

// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
// const val1 = Number(prompt("Enter first number"));
// const val2 = Number(prompt("Enter second number"));
// if (val1 === val2) {
//   const sumNum = val1 + val2;
//   const tripleNum = sumNum * 3;
//   alert("The triple sum is " + tripleNum);
// } else {
//   alert(
//     "The given number aren't equal to eacthother please re-enter the same number"
//   );
// }

// 2. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
// const positiveNumber = prompt("Enter any positive number");
// if (positiveNumber % 3 === 0 || positiveNumber % 7 === 0) {
//   alert("the number you have enter is of multiple 3 or the 7");
// } else {
//   alert("The number you have entered is neither of multiple 3 or 7 ");
// }

// 3. Write a JavaScript program to get the current date.
// const date = new Date();
// console.log(date);

// 4. Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)
// this function is for the multiplications
// const multiply = (a, b) => {
//   return a * b;
// };
// const multiplication = multiply(2, 2);
// console.log("Multiplication of two integer is =", multiplication);

// // this function is for the division
// const divide = (a, b) => {
//   return a / b;
// };
// const division = divide(6, 3);
// console.log("Division of two integer is = ", division);

// 5. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//    `[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]`

// - Expected Output :
// - 60°C is 140 °F
// - 45°F is 7.222222222222222°C

// 6. Write a JavaScript program to count the number of vowels in a given string.
const words =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
//   function to count the vowels string
const fnVowels = (words) => {
  // using regex to store the array of matched vowels
  const filterVowels = words.match(/[aeiou]/gi);
  console.log(filterVowels);
};
fnVowels(words);
