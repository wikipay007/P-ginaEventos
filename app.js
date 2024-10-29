document.addEventListener("DOMContentLoaded", function() {
  const myCarouselElement = document.querySelector('#carouselExampleAutoplaying');
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 8000,
    touch: false
  });
});
