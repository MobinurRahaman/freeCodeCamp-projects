function palindrome(str) {
  const alphaNumChars = str.split(/[\W_]+/g).join("").toLowerCase();
  const reversedAlphaNumChars = alphaNumChars.split("").reverse().join("")
  return alphaNumChars === reversedAlphaNumChars
}