function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let tr = table.rows[i];
    if (tr.cells[3].getAttribute('data-available') === 'true') {
      tr.classList.add('available');
    } else if (tr.cells[3].getAttribute('data-available') === 'false') {
      tr.classList.add('unavailable');
    } else if (!tr.cells[3].hasAttribute('data-available')) {
      tr.hidden = true;
    }
    if (tr.cells[2].innerHTML === 'm') {
      tr.classList.add('male');
    } else if (tr.cells[2].innerHTML === 'f') {
      tr.classList.add('female');
    }
    let num = Number(tr.cells[1].innerHTML);
    if (num < 18) {
      tr.style.textDecoration = 'line-through';
    }
  }
}
