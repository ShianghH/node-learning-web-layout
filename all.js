//  Banner Swiper 初始化
const bannerSwiper = new Swiper('.banner-swiper', {
  loop: true,
  pagination: {
    el: '.banner-swiper .swiper-pagination',
    clickable: true
  }
})
// 縮圖 Swiper 初始化
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

// 玩家卡片 Swiper 初始化（偵測寬度，1920 以下啟用）

const playerSwiper = new Swiper('#player-swiper', {
  slidesPerView: 1.5,
  spaceBetween: 24,
  pagination: {
    el: '#player-swiper .swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: { slidesPerView: 1.5 }
  }
})
