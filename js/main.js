var swiper = new Swiper(".MySwiper",{
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
  },
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const elOpenModalBtn = document.querySelector(".header__modal-open-btn");
const elCloseModalBtn = document.querySelector(".header__modal-close-btn");
const elLinksWrapper = document.querySelector(".header__links-wrapper");

elOpenModalBtn.addEventListener("click", () => {
  elLinksWrapper.style.right = "0";
  document.body.style.overflowY = "hidden";
})
elCloseModalBtn.addEventListener("click", () => {
  elLinksWrapper.style.right = "-100%";
})