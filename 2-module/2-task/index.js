function isEmpty(obj) {
  let count = 0;
  for (let i in obj) {
    count++;
  }
  if (count > 0) {
    return false;
  } else {
    return true;
  }
}
