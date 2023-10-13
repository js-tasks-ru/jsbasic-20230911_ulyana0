function initCarousel() {
  let currentSlide = 0;
  let carouselItem = document.querySelector(".carousel");
  let carouselItemInner = document.querySelector(".carousel__inner");
  let carouselArrowRight = document.querySelector(".carousel__arrow_right");
  let carouselArrowLeft = document.querySelector(".carousel__arrow_left");  
  let carouselWidth = carouselItemInner.offsetWidth;
  let hide = arrow => (arrow.style.display = "none");
  let show = arrow => (arrow.style.display = "");
  carouselArrowLeft.style.display = "none";  

  carouselItem.addEventListener("click", (event) => {
    let target = event.target;

    if (carouselArrowRight.contains(target)) {
      currentSlide++;
      carouselItemInner.style.transform = `translateX(-${carouselWidth * currentSlide}px)`;
    } else if (carouselArrowLeft.contains(target)) {
      currentSlide--;
      carouselItemInner.style.transform = `translateX(-${carouselWidth * currentSlide}px)`;
    }

    stateChanger();

    function stateChanger() {
      return (currentSlide === 0) ? hide(carouselArrowLeft) : show(carouselArrowLeft), (currentSlide === 3) ? hide(carouselArrowRight) : show(carouselArrowRight);
    }
  });
}