function sumSalary(obj) {
  let salary = 0;
  for (let i in obj) {
    if (isFinite(obj[i])) {
      salary = salary + obj[i];
    }
  }
  return salary;
}
