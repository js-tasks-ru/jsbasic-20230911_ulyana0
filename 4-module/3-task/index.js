function highlight(table) {
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    if (row.cells[1]) {
      const age = parseInt(row.cells[1].textContent);
      if (age < 18) {
        row.style.textDecoration = 'line-through';
      }
    }
    
    if (row.cells[2]) {
      const gender = row.cells[2].textContent;
      if (gender === 'm') {
        row.classList.add('male');
      } else if (gender === 'f') {
        row.classList.add('female');
      }
    }

    if (row.cells[3]) {
      const status = row.cells[3].getAttribute('data-available');
      if (status === 'true') {
        row.classList.add('available');
      } else if (status === 'false') {
        row.classList.add('unavailable');
      } else {
        row.hidden = true;
      }
    }    
  });
}
