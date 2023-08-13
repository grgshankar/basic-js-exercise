// const person = {
//   name: "Shankar",
//   lastname: "Gurung",
//   dob: 2000,
//   fullName: () => {
//     return person.name + " " + person.lastname;
//   },
//   age: function (year) {
//     return year - this.dob;
//   },
// };
// // accessing properties
// const firstName = person.name;
// console.log({ firstName });

// const age = person.age(2023);
// console.log({ age });

// const fullDetails = person.fullName;
// console.log({ fullDetails });

//Array
// const cars = [
//   {
//     name: "Volvo",
//     model: 2000,
//   },
//   {
//     name: "Saab",
//     model: 1995,
//   },
//   {
//     name: "Tesla",
//     model: 2009,
//   },
// ];

// const firstCar = cars[0];
// console.log(firstCar);
// const sortedCars = cars.sort((a, b) => {
//   return a.model - b.model;
// });

// console.log(sortedCars);

// Exercise find the largest country based on character count
// const countries = ["India", "United States of Amercia", "Nepal", "China"];
// let countriesIndex = 0;
// countries.map((country, index) => {
//   // comparing each element by it's index number
//   if (country.length > countries[countriesIndex].length) {
//     countriesIndex = index;
//   }
// });
// console.log("The largest countries name is ", countries[countriesIndex]);

// const name = "monkey d. luffy";
// output => Monkey D. Luffy
// using string method

// const firstLetterCapital = (str) => {
//   return str.replace(/\b\w/g, (C) => C.toUpperCase());
// };
// const name = "monkey d. luffy";
// const convertedString = firstLetterCapital(name);
// console.log(convertedString);

// 2. a. Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%.
//    b. Update the object with the new property - discount and the corresponding value (7% or 10%) and the new price.

let discount;
const priceProperty = (price) => {
  if (price > 100) {
    const discountCal = price / 100;
    return (discount = discountCal * 10);
  } else {
    // discount = (price / 100) * 7;
  }
};
const discountRate = priceProperty(200);
console.log(discountRate);
