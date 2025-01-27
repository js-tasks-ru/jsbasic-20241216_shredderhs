function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    let name = friends[i].firstName + ' ' + friends[i].lastName;
    li.append(name);
    ul.append(li);
  }
  return ul;
}
