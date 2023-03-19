/** Async --
 *  setTimeout
 *  setinterval
 *  event
 */

// function first() {
//   console.log("First");

//   setTimeout(() => {
//     second();
//   }, 2000);
//   setTimeout(() => {
//     console.log("From 1 second method");
//   }, 1000);

//   console.log("End");
// }

// function second() {
//   console.log("Second");
// }
// first();
// var userIds;

// setTimeout(() => {
//   userIds = [100, 200, 300, 400];
//   console.log(userIds);
//   setTimeout(() => {
//     var user = {
//       id: userIds[0],
//       name: "ali",
//       address: "alex",
//     };
//     setTimeout(() => {
//       var address = user.address;
//       console.log(address);
//     }, 500);
//   }, 1000);
// }, 2000);
/** */

/** js  */

// function getUserIds() {
//   return new Promise(function (a, b) {
//     var userids;
//     setTimeout(() => {
//       userids = [100, 200, 300, 400];
//       if (userids) {
//         a(userids);
//       } else {
//         b("Error on getting ids list");
//       }
//     }, 2000);
//   });
// }

// function getUserData(userId) {
//   return new Promise(function (resolve, reject) {
//     var user;
//     setTimeout(() => {
//       user = {
//         id: userId,
//         name: "ali",
//         address: "alex",
//       };

//       user ? resolve(user) : reject("Error on getting user list");
//     }, 1000);
//   });
// }

// function getAddress(user) {
//   return new Promise(function (resolve, reject) {
//     var address;
//     setTimeout(() => {
//       address = user.address;
//       address ? resolve(address) : reject("Error on getting address");
//     }, 500);
//   });
// }

// async function execute() {
//   try {
//     var userIds = await getUserIds();
//     var user = await getUserData(userIds[0]);
//     var address = await getAddress(user);
//     console.log(address);
//   } catch (error) {
//     console.log(error);
//   }
// }

// execute();
/*
getUserIds()
  .then((usersId) => {
    return getUserData(usersId[0]);
  })
  .then((user) => {
    return getAddress(user);
  })
  .then((address) => {
    console.log(address);
  })
  .catch((myError) => {
    console.log(myError);
  });
*/

/** promises status
 * Pending
 * fulfilled -- success
 * rejected -- fail -- error
 */

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function execute() {
//   try {
//     var response = await fetch("https://jsonplaceholder.typicode.com/todos/6");
//     var data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// execute();

// class Person {
//   #id;
//   constructor(id, fname = "", lname = "", age = 1) {
//     this.fname = fname; /** syntax suger */
//     this.lname = lname;
//     this.age = age;
//     this.#id = id;
//   }
//   display() {
//     console.log(this.fname + " " + this.lname);
//   }
//   // getter

//   get getData() {
//     return this.#id;
//   }

//   // setter
//   set setData(value) {
//     this.#id = value;
//   }
// }

// var p1 = new Person(1, "ali", "ahmed");
// var p2 = new Person(2, "mona", "alaa");
// var p3 = new Person(3, "kareem", "mohamed");

// p1.setData = "12344";
// console.log(p1.getData);
