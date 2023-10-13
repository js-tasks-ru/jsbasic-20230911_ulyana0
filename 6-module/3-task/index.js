import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarouselElem();
  }

  generateProductAddCarouselEvent(carouselElem) {

    this.carouselButton = carouselElem.querySelector('.carousel__button');

    this.carouselInner.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button')) {
        let productAddCarouselEvent = new CustomEvent('product-add', {
          detail: event.target.closest('.carousel__slide').dataset.id,
          bubbles: true
        });
        this.carouselButton.dispatchEvent(productAddCarouselEvent);
      }
    });
  }

  initCarousel(carouselElem) {
    this.arrowRight = carouselElem.querySelector('.carousel__arrow_right');
    this.arrowLeft = carouselElem.querySelector('.carousel__arrow_left');
    this.carouselList = carouselElem.querySelectorAll('.carousel__slide');
    let showNum = 1;

    this.arrowLeft.style.display = 'none';

    carouselElem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__arrow_right')) {
        if (showNum < this.carouselList.length - 1) {
          this.carouselInner.style.transform = `translateX(-${this.carouselInner.offsetWidth * showNum}px)`;
          showNum++;
          this.arrowLeft.style.display = '';
        } else {
          this.carouselInner.style.transform = `translateX(-${this.carouselInner.offsetWidth * showNum}px)`;
          showNum++;
          this.arrowRight.style.display = 'none';
          this.arrowLeft.style.display = '';
        }
      }

      if (event.target.closest('.carousel__arrow_left')) {
        if (showNum === 2) {
          this.carouselInner.style.transform = `translateX(0px)`;
          showNum--;
          this.arrowLeft.style.display = 'none';
        } else {
          this.carouselInner.style.transform = `translateX(-${this.carouselInner.offsetWidth * (showNum - 2)}px)`;
          showNum--;
          this.arrowRight.style.display = '';
        }
      }
    });
  }

  createCarouselElem() {
    const carouselElem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
        </div>
      </div>
    `);

    this.carouselInner = carouselElem.querySelector('.carousel__inner');

    const carouselSlide = this.slides.map(item => createElement(`
        <div class="carousel__slide" data-id="${item.id}">
          <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${item.price.toFixed(2)}</span>
            <div class="carousel__title">${item.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`
    ));

    this.carouselInner.append(...carouselSlide);

    this.generateProductAddCarouselEvent(carouselElem);
    this.initCarousel(carouselElem);

    return carouselElem;
  }
}