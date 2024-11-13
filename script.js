function calculateTip() {
    // Get the values entered by the user
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  
    // Calculate the tip and total amount
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
  
    // Update the result section with the calculated values
    document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
  }
  