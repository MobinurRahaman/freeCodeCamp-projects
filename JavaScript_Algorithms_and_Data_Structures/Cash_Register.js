function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeDue = cash - price;
  let changeArray = [];

  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = totalCid.toFixed(2);

  if (Number(totalCid) < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (Number(totalCid) === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const coinName = cid[i][0];
      const coinTotal = cid[i][1];
      const coinValue = currencyUnit[coinName];

      let availableCoins = coinTotal / coinValue;

      let returnedCoins = Math.floor(changeDue / coinValue) * coinValue;
      returnedCoins = Math.min(returnedCoins, coinTotal);

      changeDue = (changeDue - returnedCoins).toFixed(2);
      if (returnedCoins > 0) {
        changeArray.push([coinName, returnedCoins]);
      }
    }
  }

  if (Number(changeDue) > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    return { status: "OPEN", change: changeArray };
  }
}
