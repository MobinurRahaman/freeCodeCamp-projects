function convertToRoman(num) {
  const intToRomanHash = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let roman = "";
  let remainingNum = num;

  function romanRecur(remainingNum) {
    if (remainingNum === 0) return roman;

    const keys = Object.keys(intToRomanHash);
    const filteredKeys = keys.filter((item) => remainingNum >= Number(item));
    const targetKey = filteredKeys[filteredKeys.length - 1];
    remainingNum = remainingNum - targetKey;
    roman += intToRomanHash[targetKey];
    romanRecur(remainingNum);
  }

  romanRecur(num);
  return roman;
}
