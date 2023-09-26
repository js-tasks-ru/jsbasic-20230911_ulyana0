function showSalary(users, age) {
  return users.filter(key => key.age <= age).map(key => key.name + ', ' + key.balance).join('\n');
}
