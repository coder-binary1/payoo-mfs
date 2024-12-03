/**
 * 1. add event listener to the add Money Button (form submit)
 * make sure to preventDefault so that page doses't reload
 * 2. get the money user wants to add,
 * also, get the pin number provided
 * 3. verify the pin number. for, wrong pin number ==> failed to add for right pin number, allow to add the number to add the number to the account balance
 *
 * 4. get the current balance
 *
 * 5. add money to be added with the current balance
 *
 * 6. display/update the balance in  the DOM/UI
 */

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get money and the pin number
    const addMoney = parseFloat(
      document.getElementById("input-add-money").value
    );
    const pinNUmber = document.getElementById("input-pin-number").value;

    // console.log(addMoney, pinNUmber);

    if (
      typeof addMoney === "number" &&
      !Number.isNaN(addMoney) &&
      addMoney >= 0 &&
      pinNUmber === "1234"
    ) {
      const balance = document.getElementById("available-balance").innerText;
      const newBalance = parseFloat(balance) + addMoney;

      document.getElementById("available-balance").innerText = newBalance;
      document.getElementById("input-add-money").value = "";
      document.getElementById("input-pin-number").value = "";
    } else {
      alert("Failed to add money. Please try again later");
    }
  });
