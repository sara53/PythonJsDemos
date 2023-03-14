/** Dom Object  built in object
 * document object model
 */

// console.log(document);
/** Events */
/** how to select on dom
 * ------------------------
 *  1- getElementById --> element
 *  2- querySelector --> element
 * 3- getElementsByClassName --> collection
 * 4- getElementsByTagName --> collection
 * 5- getElementsByName --> collection
 * 6- querySelectorAll --> collection
 * --------------------
 * -- lastElementChild
 *  -- lastChild
 *  -- firstElementChild
 *  -- firstChild
 *  -- children
 *  -- childNodes
 * ----------------------
 *  -- document.body
 * -- document.imgs
 * -- document.links
 * -- document.forms
 */

// var myH1 = document.getElementById("myDiv");
// console.log(myH1);

// var div = document.getElementById("myDiv");
// console.log(div.childNodes);

// var element = document.querySelector("div:nth-child(2)");
// console.log(element);
// for (var i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }

// console.log(document.images[1]);
// console.log(document.links);
// function changeContent() {
//   var p = document.getElementsByClassName("test1")[0];
//   p.innerHTML = "<h1>Hello Python</h1>"; // set<h1>Hello Python</h1>
// }

//   p.style.backgroundColor = "#646471";
//   p.style.color = "#fff";
//   p.style.padding = "20px";
//   p.style.display = "none";
//   p.className += " jsClass";
//   //   console.log(p.className); // get
/** change content
 *  innerText
 *  innerHtml
 *  textContent (search)
 * ==============Change style===========
 *  ===> style
 *  ==> className
 *  ==> classList
 *      --> add
 *      --> remove
 *      --> toggle
 */

// function changeStyle() {
// //   var p = document.querySelector("div p");
// //   p.classList.toggle("jsClass");
// //   //   p.classList.remove("p1");
// //   //   p.classList.add("jsClass");
// //   console.log(p.classList);
// }
// function login() {
//   var input1 = document.getElementById("input1");
//   var input2 = document.getElementById("input2");
//   var result = document.getElementById("result");
//   console.log(input1.name);
//   console.log(input2.name);
//   //   result.innerHTML =
//   //     "Login Successfully , Your Name is : " +
//   //     input1.value +
//   //     " Your Age is :" +
//   //     input2.value;
// }
