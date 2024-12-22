function truncate(str, maxlength) {
  let len = str.length;
  if (len > maxlength) {
    let str1 = str.slice(0, (maxlength - 1)) + "…";
    return str1;
  } else {
    return str;
  }
}
