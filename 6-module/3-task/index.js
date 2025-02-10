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
    console.log(c);
    let wMain = 958;
    console.log(wMain);
    let currentPosition = 1;
    let slidesCount = this.slides.length;
    b.style.display = 'none';

    function slideRight() {
      let wRight = currentPosition * wMain;
      c.style.transform = `translateX(-${wRight}px)`;
      currentPosition++;
      if (currentPosition === slidesCount) {
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

  addProduct() {
    const button = this.elem.querySelectorAll('.card__button');
    let id = this.slides.id;
    let ev = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });
    button.addEventListener('click', function (event) {
      button.dispatchEvent(ev);
    });
  }

}
