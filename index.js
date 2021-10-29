//----------rest parameter-----------

// const addition = (...values) => {
//   let result = values.reduce((a, b) => a + b);
//   return result;
// };
// const result1 = addition(1, 2, 5, 3, 5, 5, 8);
// const result2 = addition(-34, -67, 23, 90, 0);
// console.log(result1);

//----------callback function----------
// const fun1 = (info, ...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum = sum + num;
//   }
//   info(sum);
// };

// const userInfo = (salary) => {
//   console.log(salary);
// };

// fun1(userInfo, 2, 4, 3, 4, 3, 4, 5);

//------------bind method------------
// let person1 = {
//   name: "kishore",
//   age: "23",
//   getInfo: function () {
//     console.log(`Name - ${this.name} and age - ${this.age}`);
//   },
// };
// let person2 = {
//   name: "cherry",
//   age: "25",
// };
// person1.getInfo.bind(person2)(); //here now this keyword points to object person2
// const details = person1.getInfo.bind(person2); // we can use above line of method or this method
// details();

//----------bind method----------------

// let user1 = {
//   name: "dinfling",
//   age: "21",
// };
// let user2 = {
//   name: "popo",
//   age: "33",
// };
// function bindFunction() {
//   console.log(`${this.name} - ${this.age}`);
// }

// const userDetails = bindFunction.bind(user2);
// userDetails();

//----------call method-----------
// let user1 = {
//   name: "dinfling",
//   age: "21",
// };
// let user2 = {
//   name: "popo",
//   age: "33",
// };
// function bindFunction(job) {
//   return `${this.name} - ${this.age} ${job}`;
// }

// const userDetails = bindFunction.call(user2, "working as developer");
// console.log(userDetails);

//----------apply method--------------
let user1 = {
  name: "dinfling",
  age: "21",
};
let user2 = {
  name: "popo",
  age: "33",
};
function bindFunction(job) {
  return `${this.name} - ${this.age} ${job}`;
}

const userDetails = bindFunction.apply(user2, ["developer"]);
console.log(userDetails);
