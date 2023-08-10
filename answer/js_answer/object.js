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
const countries = ["India", "United States of Amercia", "Nepal", "China"];
let countriesIndex = 0;
countries.map((country, index) => {
  // comparing each element by it's index number
  if (country.length > countries[countriesIndex].length) {
    countriesIndex = index;
  }
});
console.log("The largest countries name is ", countries[countriesIndex]);

// const name = "monkey d. luffy";
// output => Monkey D. Luffy
// using string method
