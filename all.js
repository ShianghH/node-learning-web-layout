const bannerSwiper = new Swiper('.banner-swiper', {
  loop: true,
  pagination: {
    el: '.banner-swiper .swiper-pagination',
    clickable: true
  }
})

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mySwiper').forEach((swiperEl) => {
    new Swiper(swiperEl, {
      slidesPerView: 2.5,
      spaceBetween: 8,
      loop: true,
      loopedSlides: 3,
      slidesPerGroup: 1,
      navigation: {
        nextEl: swiperEl.parentElement.querySelector('.thumb-button-next'),
        prevEl: swiperEl.parentElement.querySelector('.thumb-button-prev')
      }
    })
  })
})
