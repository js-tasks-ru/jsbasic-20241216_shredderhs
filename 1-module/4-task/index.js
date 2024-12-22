function checkSpam(str) {
  let ch = str.toLowerCase();
  if (ch.includes("1xbet") || ch.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
