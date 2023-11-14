function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const strCharsArr = Array.from(str);

  for (let i = 0; i < str.length; i++) {
    const currentPos = alphabet.indexOf(str[i]);
    const newPos =
      currentPos + 13 < 26 ? currentPos + 13 : currentPos + 13 - 26;
    if (currentPos > -1) {
      strCharsArr[i] = alphabet[newPos];
    }
  }

  return strCharsArr.join("");
}
