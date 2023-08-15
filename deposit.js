document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("user-deposit");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //  step 3
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step 04
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  // step 05

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalElementString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalElementString);

  // step 06

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  // step 07

  depositField.value = "";
});
