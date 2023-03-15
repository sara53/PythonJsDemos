// /** BOM --> Browser object Model
//  *  -- window
//  *  --history
//  *  --location
//  *  -- screen // self study
//  * -- navigation // self study
//  */

// // console.log(window);
// var myWin;
// function openNewWindow() {
//   myWin = window.open("about.html", "", "width=200,height=200");
//   // open()
// }
// function closeWindow() {
//   myWin.close();
// }
// function moveToWindow() {
//   myWin.moveTo(300, 300);
// }
// function moveByWindow() {
//   myWin.moveBy(-100, -100);
// }
// function resizeToWindow() {
//   myWin.resizeTo(300, 300);
// }
// function resizeByWindow() {
//   myWin.resizeBy(100, 100);
// }

// var btn1 = document.getElementById("btn1");
// var downLink = document.getElementById("downLink");
// btn1.addEventListener("click", function () {
//   downLink.innerHTML = "Download link will appear after 3 seconds";
//   downLink.style.color = "blue";
//   setTimeout(function () {
//     downLink.innerHTML = "<a href='#'>www.google.come</a>";
//     downLink.style.color = "green";
//   }, 3000);
// });
// /**
//  *  == setTimeOut
//  *  == setInterval
//  */

// // setTimeout(function () {
// //   window.open("about.html");
// // }, 2000);
// var i = 0;
// var myInterval = setInterval(function () {
//   console.log(i++);
// }, 1000);

// setTimeout(function () {
//   clearInterval(myInterval);
// }, 5000);

// var result = document.getElementById("result");
// var myInterval;
// var i = 0;
// function startCount() {
//   myInterval = setInterval(function () {
//     result.innerHTML = i++;
//   }, 1000);
// }
// function stopCount() {
//   clearInterval(myInterval);
// }

/**
 * length 2 , 0 , 1
 * forward
 * back
 * go --> 1 --> go(1)
 *
 */
// function testLocation() {
//   //   location.assign("https://www.google.com.eg/");
//   //   location.pathname = "/about.html";
//   //   console.log(location.pathname);
//   //   location.href = "https://www.google.com.eg/";
// }
