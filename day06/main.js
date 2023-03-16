/**
 *  let .. var .. const
 *  arrow functions
 *  spreed operator
 *  destructuring
 *  Array API
 */
/**====================== */
/**
 * var
 * --------------
 *  == Hoisting
 *  == reassign
 *  == redclare
 *  == function scope
 * == addedd to window object
 *=============================
    let 
    -----------
    == reassign
    == can't redeclare
    == can't be hoisting
    == block scope
    == not addedd to window
 *=============================
    const 
    -----------
    == can't reassign
    == can't redeclare
    == can't be hoisting
    == block scope
 */

// const person = { fname: "ali" };
// person.lname = "alaa"; //

// person = {}; // error
// console.log(person);

// let fname = "mona";
// console.log(fname);

// const PI = 3.14;

// PI = 4; //
// console.log(PI);

// function print() {
//   let test = "ali";
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     console.log(test);
//   }

// }

// print();
/**============================ */
// this object
// function print() {
//   console.log(this.fname);
// }

// let person = {
//   fname: "ahmed",
//   display: print,
// };

// person.display();

// print();
/***====================== */
/** that pattern */
/*var fname = "salma";
let person = {
  fname: "ali",

  display: function () {
    let that = this;
    setTimeout(function () {
      console.log(that.fname);
    }, 2000);
  },
};

person.display();
*/

/**
 *   user defined
 *      -- function statement
 *      -- function expression
 */

// function add(a, b) {
//   return a + b;
// } /** function statement */
// var add = function (a, b) {
//   return a + b;
// }; /** function expression */

/** arrow function */
// var add = (a, b) => {
//   console.log("Hello");
//   return a + b;
// };

// var result = add(4);

// console.log(result);

// var print = _ => console.log("Hello");
/**================== */
/** that pattern */
// var age = 40;

// let person = {
//   age: 10,
//   display: print,
// };
// var print = () => {
//   console.log(this.age);
// };

// person.display();

// function print() {
//   console.log(this.age);
// }

// person.display(); // this = window
// // window
// var fname = "salma";
// let person = {
//   fname: "ali",

//   display: function () {
//     setTimeout(() => {
//       console.log(this.fname);
//     }, 2000);
//   },
// };

// person.display(); // this = person
// let arr = [1, 2, 3, "mona"];

// let arr2 = [];

// for (var i = 0; i < arr.length; i++) {
//   arr2[i] = arr[i];
// }
// arr.push("new value");

// console.log("arr : ", arr);
// console.log("arr2:", arr2);
/**================== */

// let arr = [1, 2, 3, "mona"];

// let arr2 = ["ali,", ...arr, "alaa"];

// arr.push("new value");

// console.log("arr : ", arr);
// console.log("arr2:", arr2);

// let a = 4;

// let b = a;

// a = 5;
// console.log(a);
// console.log(b);

// let person = {
//   fname: "ali",
//   age: 40,
// };

// let person2 = { ...person, color: "red" };

// console.log(person);
// console.log(person2);
// function getArray() {
//   return ["mona", "ahmed", 5];
// }

// let [, , z] = getArray();

// console.log(z);
/**================= */
// let person = { fname: "ali", age: 40, color: "red" };

// let { fname, color } = person; // syntax suger -- fname:fname

// console.log(fname);
// console.log(color);
/**rest params */
// function print(...rest) {
//   console.log(rest);
// }
// console.log(print(2, 5, "mona", "ali", 4));
// function findElement() {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].startsWith("a")) {
//       return arr[i];
//     }
//   }

//   return -1;
// }

// var result = findElement();
// console.log(result);
