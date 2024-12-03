// console.log("button file added");

//search: form submit reloading the page

// step:1 -set event handler
// document
//   .getElementById("login-btn")
//   .addEventListener("click", function (event) {
//     // step:2 - prevent default behavior
//     event.preventDefault();

//     // step:3 - get the phone number
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     // console.log(phoneNumber, pinNumber);

//     //step:4 -- validate phone and pin
//     //this is temporary. We should not do like this
//     if (phoneNumber === "01715") {
//       console.log("you are logged in");
//       //   step: 5 -- allow user to use the website
//     } else {
//       alert("Wrong phone or pin");
//     }
//   });

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //get phone & pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);

    //bad way to validate
    if (phoneNumber === "01789343432" && pinNumber === "1234") {
      window.location.href = "./home.html";
    } else {
      alert("phone or pin wrong");
    }
  });
