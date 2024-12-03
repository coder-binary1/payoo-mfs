// console.log("button file added");

//search: form submit reloading the page

// step:1 -set event handler
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    // step:2 - prevent default behavior
    event.preventDefault();
    console.log("login button clicked");

    // step:3 - get the phone number
    const phoneNumber = document.getElementById("input-number");
    console.log(phoneNumber.value);
  });
