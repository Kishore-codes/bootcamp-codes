// const currentValue = 0;
// let newValue = currentValue;

// const add = (num1, num2) => {
//   const result = num1 + num2;
//   return result;
// };
// newValue = add(3, 5);

// const value = newValue + 11;
// console.log(value);

// function with event LIstener

// const pop = () => {
//   alert("pop");
// };
// var myButton = document.getElementById("butt");
// myButton.addEventListener("click", pop);

//assigning function to varialble name

// const addition = (name, age) => {
//   return `${name} - ${age}`;
// };

// const values = addition("kishore", 23);
// const salary = 2000000;
// const result = salary + " - " + values;
// console.log(result);

//copy by value [primitive data type]

// let a = "kishore";
// let b = a;
// a = "cherry";
// console.log(a);  //cherry
// console.log(b); //kishore

//copy by address[reference data types]

// let array = [1, 2, 3, 4];
// let arr1 = array;
// array.unshift(0, 01);
// console.log(array); //[ 0, 1, 1, 2, 3, 4 ]
// console.log(arr1); //[ 0, 1, 1, 2, 3, 4 ]

//copy using spread operator

// let values = ["kishore", "cherry"];
// let val1 = [...values];

// val1.push("eroshik");

// console.log(values);
// console.log(val1);
