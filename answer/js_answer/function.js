// converting the name into uppercase
// const nameFn = (name) => {
//   return name.toUpperCase();
// };
// const nameWrap = nameFn("shankar");
// console.log(nameWrap);

// 1. Write a JavaScript function that reverses a number.
//    Example x = 32243;
//    Expected Output : 34223

// const reversesFn = (inputNumbers) => {
//   return inputNumbers.reverse();
// };
// const numbersWrap = reversesFn([3, 2, 2, 4, 3]);
// console.log(numbersWrap);

// 2. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//    Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//    Example string : 'The quick brown fox'
//    Expected Output : 5
const vowelWord = "The quick brown fox";
const checkVowelFn = (vowelWord) => {
  const filterVowels = vowelWord.match(/[aeiou]/gi);
  const lengthOfVowels = filterVowels.length;
  console.log("The total number of Vowels =", lengthOfVowels);
};
checkVowelFn(vowelWord);
