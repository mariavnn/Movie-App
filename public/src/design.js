var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  }
});

