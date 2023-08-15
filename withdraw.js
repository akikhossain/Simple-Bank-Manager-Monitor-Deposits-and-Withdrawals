document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("user-withdraw");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step 3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step 4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 05

  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotal.innerText;
  const previousBalanceTotalDollar = parseFloat(previousBalanceTotalString);

  // step 06
  const currentBalanceTotalDollar =
    previousBalanceTotalDollar - newWithdrawAmount;
  balanceTotal.innerText = currentBalanceTotalDollar;
  // step 7
  withdrawField.value = "";
});
