function camelize(str) {
  let s = str.split('-');
  for (let i = 1; i < s.length; i++) {
    let f = s[i].charAt(0).toUpperCase() + s[i].slice(1);
    s[i] = f;
  }
  return s.join('');
}
