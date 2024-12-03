// add money to the account

// step-1: add an event handler to the add monet button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    //prevent page reload after form submit
    event.preventDefault();

    //   step-2: get money to be added to the account
    const addMoneyInput = parseInt(
      document.getElementById("input-add-money").value
    );

    //step-3: get the pin number
    const pinNumberInput = document.getElementById("input-pin-number").value;

    // step:4 Verify the input value
    // wrong way to validate input value
    if (
      typeof addMoneyInput === "number" &&
      addMoneyInput >= 0 &&
      !Number.isNaN(addMoneyInput) &&
      pinNumberInput === "1234"
    ) {
      const balance = document.getElementById("available-balance").innerText;
      const newBalance = parseInt(balance) + addMoneyInput;

      // step-6: update the balance in the UI/DOM
      document.getElementById("available-balance").innerText = newBalance;
    } else {
      alert("failed to add money!");
    }
  });
