function filterRange(arr, a, b) {
  let filt = [];
  for (let i = 0; i < arr.length; i++) {
    if (a <= arr[i] && arr[i] <= b) {
      filt.push(arr[i]);
    }
  }
  return filt;
}
