// converting the name into uppercase
// const nameFn = (name) => {
//   return name.toUpperCase();
// };
// const nameWrap = nameFn("shankar");
// console.log(nameWrap);

// 1. Write a JavaScript function that reverses a number.
//    Example x = 32243;
//    Expected Output : 34223

const reversesFn = (inputNumbers) => {
  return inputNumbers.reverse();
};
const numbersWrap = reversesFn([3, 2, 2, 4, 3]);
console.log(numbersWrap);
