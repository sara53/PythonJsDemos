// function testLocation() {
//   //   location.assign("https://www.google.com.eg/");
//   //   location.pathname = "/about.html";
//   //   console.log(location.pathname);
//   //   location.href = "https://www.google.com.eg/";
// }

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
}
function error() {
  console.log("user denied thw per..");
}
