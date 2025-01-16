function showSalary(users, age) {
  let arr = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      let f = users[i].name + ', ' + users[i].balance;
      console.log(f);
      arr.push(f);
    }
  }
  let str = arr.join('\n');
  return str;
}
