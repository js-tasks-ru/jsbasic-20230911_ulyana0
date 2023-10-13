export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }

  render() {
    this.table = document.createElement('table');
    this.thead = document.createElement('thead');

    this.table.appendChild(this.thead);

    this.table.tHead.insertAdjacentHTML('beforeend', `<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>`);

    this.table.insertAdjacentHTML('beforeend', this.rows
      .map(({ name, age, salary, city }) => `<tr><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`).join(''));

    this.table.addEventListener('click', (event) => {
      return event.target.matches('button') ? event.target.closest('tr').remove() : '';
    });

    return this.table;
  }
}