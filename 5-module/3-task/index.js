function initCarousel() {
  let a = document.querySelector('.carousel__arrow_right');
  let b = document.querySelector('.carousel__arrow_left');
  let c = document.querySelector('.carousel__inner');
  let wMain = c.offsetWidth;
  let currentPosition = 1;
  b.style.display = 'none';

  function slideRight() {
    let wRight = currentPosition * wMain;
    c.style.transform = `translateX(-${wRight}px)`;
    currentPosition++;
    if (currentPosition === 4) {
      a.style.display = 'none';
    } else {
      a.style.display = '';
      b.style.display = '';
    }
  }

  function slideLeft() {
    let wLeft = (currentPosition - 2) * wMain;
    c.style.transform = `translateX(-${wLeft}px)`;
    currentPosition--;
    if (currentPosition === 1) {
      b.style.display = 'none';
    } else {
      b.style.display = '';
      a.style.display = '';
    }
  }

  a.addEventListener('click', slideRight);
  b.addEventListener('click', slideLeft);
}
