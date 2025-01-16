function getMinMax(str) {
  let s = str.split(' ');
  let num = [];
  for (let i = 0; i < s.length; i++) {
    let ch = Number(s[i]);
    if (!isNaN(ch)) {
      num.push(ch);
    }
  }
  let minn = Math.min(...num);
  let maxn = Math.max(...num);
  let result = {
    min: minn,
    max: maxn,
  };
  return result;
}
