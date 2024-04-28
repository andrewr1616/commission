function calculate() {
  // Get the input value
  const checkAmount = parseFloat(document.getElementById("check").value);

  // Perform the calculation
  const taxAmount = checkAmount * 0.36;
  const afterTaxAmount = checkAmount - taxAmount;

  // Display the result on the screen
  document.getElementById("result").innerText =
    "After Tax Amount: $" + afterTaxAmount.toFixed(2);
}

document.getElementById("submitBtn").addEventListener("click", calculate);

document.getElementById("check").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate();
  }
});
