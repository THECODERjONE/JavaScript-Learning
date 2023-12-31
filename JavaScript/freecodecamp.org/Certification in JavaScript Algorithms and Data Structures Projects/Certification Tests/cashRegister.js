/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]*/

/*
  let cid = {
    penny: stock.penny * unitValue.penny,
    nickel: stock.penny * unitValue.penny,
    dime: stock.penny * unitValue.penny,
    quarter: stock.penny * unitValue.penny,
    oneDollar: stock.penny * unitValue.penny,
    fiveDollar: stock.penny * unitValue.penny,
    tenDollar: stock.penny * unitValue.penny,
    twentyDollar: stock.penny * unitValue.penny,
    fiftyDollar: stock.penny * unitValue.penny,
    hundredDollar: stock.penny * unitValue.penny;
};
*/

const currencyUnit = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["FIFTY", 50],
  ["ONE HUNDRED", 100]
];

function checkCashRegister(price, cash, cid) {
  const change = cash - price;
  let changeToCover = change;
  let changeCovered = 0;
  let changeUnits = [];

  let totalCID = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  };
  totalCID = totalCID.toFixed(2);

  for(let i = cid.length - 1; (i >= 0) && (changeCovered !== change); i--) {
    const currentCurrIndex = currencyUnit.findIndex(unit => unit[0] === cid[i][0]);
    const currentCValue = currencyUnit[currentCurrIndex][1];
    let currentCChange = 0;
    while ((currentCValue <= changeToCover) && (currentCChange < cid[i][1])) {
      changeCovered += currentCValue;
      currentCChange += currentCValue;
      changeToCover -= currentCValue;
      changeToCover = changeToCover.toFixed(2);
    }
    if(currentCChange > 0) {
      changeUnits.push([cid[i][0], currentCChange]);
    }
  };
 
  if (changeToCover == 0) {
    if (totalCID == change) {
      return { status: "CLOSED", change: cid };
    } else {
      return { status: "OPEN", change: changeUnits };
    }
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}