const bannerSwiper = new Swiper('.banner-swiper', {
  loop: true,
  pagination: {
    el: '.banner-swiper .swiper-pagination',
    clickable: true
  }
})

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.mySwiper', {
    slidesPerView: 3, // 一次顯示三張
    spaceBetween: 8,
    loop: true, // 必開，才能從最後一張回到第一張
    loopedSlides: 3, //loop 在少量圖片時也正常
    slidesPerGroup: 1, // 每次移動一張
    navigation: {
      nextEl: '.thumb-button-next',
      prevEl: '.thumb-button-prev'
    }
  })
})
