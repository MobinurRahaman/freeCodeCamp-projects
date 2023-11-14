function telephoneCheck(str) {
  var cleanStr = str.replace(/[^\d]/g, "");

  var strLength = cleanStr.length;

  if (strLength === 10 || (strLength === 11 && cleanStr[0] === "1")) {
    return /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/.test(str);
  }

  return false;
}
