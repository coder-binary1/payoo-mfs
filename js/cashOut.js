document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = parseFloat(document.getElementById("input-cash-out").value);
    const pinNumber = document.getElementById("input-cash-out-pin").value;

    //wrong way to verify pin number
    if (typeof cashOut === "number" && !Number.isNaN(cashOut) && cashOut > 0) {
      const balance = document.getElementById("available-balance").innerText;

      const newBalance = parseFloat(balance) - cashOut;

      //   update the ui/dom
      document.getElementById("available-balance").innerText = newBalance;
      document.getElementById("input-cash-out").value = "";
      document.getElementById("input-cash-out-pin").value = "";
    } else {
      alert("Failed to cash out. Please try again");
    }
  });
