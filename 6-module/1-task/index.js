/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.renderTableHeader();
    this.renderTableBody();
    this.elem.addEventListener('click', this.removeRow);
  }

  renderTableHeader() {
    this.thead = document.createElement('thead');
    let trow = this.thead.insertRow();
    for (let key in this.rows[0]) {
      trow.insertAdjacentHTML(
        'beforeend', `<th> ${key} </th>`
      );
    }
    trow.insertAdjacentHTML(
      'beforeend', `<th> </th>`
    );
    this.elem.append(this.thead);
  }

  renderTableBody() {
    this.tbody = document.createElement('tbody');
    for (let i = 0; i < this.rows.length; i++) {
      let trow = this.tbody.insertRow();
      trow.insertAdjacentHTML(
        'beforeend',
        `<td> ${this.rows[i].name} </td>
                <td> ${this.rows[i].age} </td>
                <td> ${this.rows[i].salary} </td>
                <td> ${this.rows[i].city} </td>
                <button> X </button>`
      );
    }
    this.elem.append(this.tbody);
  }

  removeRow(ev) {
    let b = ev.target.closest('button');
    if (b) {
      b.parentNode.remove();
    }
  }
}
