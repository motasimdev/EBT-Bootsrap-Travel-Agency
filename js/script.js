const swiper = new Swiper('.swiper', {
  slidesPerView: 4, // একসাথে 4 slide
  spaceBetween: 20, // slide এর মধ্যে gap
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 4 },
  },
});
