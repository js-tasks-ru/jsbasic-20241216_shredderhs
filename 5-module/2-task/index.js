function toggleText() {
  let toggle = false;
  let a = document.querySelector('.toggle-text-button');
  let b = document.getElementById('text');
  a.addEventListener('click', function () {
    if (!toggle) {
      b.hidden = true;
      toggle = true;
    } else {
      b.hidden = false;
      toggle = false;
    }
  });
}
