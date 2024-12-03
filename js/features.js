document
  .getElementById("add-money-select")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });

document
  .getElementById("cash-out-select")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.remove("hidden");
  });

document
  .getElementById("input-add-money")
  .addEventListener("keyup", function (event) {
    if (event.target.value > 0) {
      document.getElementById("btn-add-money").removeAttribute("disabled");
    } else {
      document.getElementById("btn-add-money").setAttribute("disabled", true);
    }
  });

document
  .getElementById("input-cash-out")
  .addEventListener("keyup", function (event) {
    if (event.target.value > 0) {
      document.getElementById("btn-cash-out").removeAttribute("disabled");
    } else {
      document.getElementById("btn-cash-out").setAttribute("disabled", true);
    }
  });
