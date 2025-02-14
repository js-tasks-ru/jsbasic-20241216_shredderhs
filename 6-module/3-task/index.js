import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel();
    this.fillCarousel();
    this.initCarousel();
  }

  createCarousel() {
    let carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
        </div>
    `);
    return carousel;
  }

  fillCarousel() {
    let inner = this.elem.querySelector('.carousel__inner');
    for (let i = 0; i < this.slides.length; i++) {
      inner.append(this.createSlide(i));
    }
  }

  createSlide(i) {
    let slide = createElement(`
      <div class="carousel__slide" data-id="${this.slides[i].id}">
        <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
          <div class="carousel__title">${this.slides[i].name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`);
    return slide;
  }

  initCarousel() {
    let a = this.elem.querySelector('.carousel__arrow_right');
    let b = this.elem.querySelector('.carousel__arrow_left');
    let c = this.elem.querySelector('.carousel__inner');

    let elem = this.elem;

    let currentPosition = 0;
    let slidesCount = this.slides.length;
    b.style.display = 'none';

    function slideRight() {
      currentPosition++;
      let offset = elem.offsetWidth * currentPosition;
      c.style.transform = `translateX(-${offset}px)`;
      if (currentPosition === (slidesCount - 1)) {
        a.style.display = 'none';
      } else {
        a.style.display = '';
        b.style.display = '';
      }
    }

    function slideLeft() {
      currentPosition--;
      let offset = elem.offsetWidth * currentPosition;

      c.style.transform = `translateX(-${offset}px)`;
      if (currentPosition === 0) {
        b.style.display = 'none';
      } else {
        b.style.display = '';
        a.style.display = '';
      }
    }

    a.addEventListener('click', slideRight);
    b.addEventListener('click', slideLeft);

    this.elem.onclick = ({ target }) => {
      let button = target.closest('.carousel__button');
      if (button) {
        let id = target.closest('[data-id]').dataset.id;

        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }
    };
  }


}
