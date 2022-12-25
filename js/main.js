
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

const elChangeCategoriesList = document.querySelector(".categories__change-btns-list");
const elCompactCarsBtn = document.querySelector("#compact-btn");
const elSportCarsBtn = document.querySelector("#sport-btn");
const elVanCarsBtn = document.querySelector("#van-btn");
const elServiceWrapper = document.querySelector(".service-wrapper");
const elCompactCarsList = document.querySelector(".categories__compact-cars-list");
const elSportCarsList = document.querySelector(".categories__sport-cars-list");
const elVanCarsList = document.querySelector(".categories__van-cars-list");

var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        834: {
            enabled: false,
            slidesPerView: 6,

        },
        320: {
            enabled: true,
            slidesPerView: 3,
            spaceBetween: 40
        }

    }
})




elChangeCategoriesList.addEventListener("click", (evt) => {

    if (evt.target.matches("#compact-btn")) {
        elSportCarsList.style.display = "none";
        elVanCarsList.style.display = "none";
        elCompactCarsList.style.display = "flex";
        elSportCarsBtn.classList.remove("active");
        elVanCarsBtn.classList.remove("active");
        elCompactCarsBtn.classList.add("active");
    }


    if (evt.target.matches("#sport-btn")) {
        elCompactCarsList.style.display = "none";
        elVanCarsList.style.display = "none";
        elSportCarsList.style.display = "flex";
        elCompactCarsBtn.classList.remove("active");
        elSportCarsBtn.classList.add("active");
        elVanCarsBtn.classList.remove("active");
    }

    if (evt.target.matches("#van-btn")) {
        elCompactCarsList.style.display = "none";
        elSportCarsList.style.display = "none";
        elVanCarsList.style.display = "flex";
        elCompactCarsBtn.classList.remove("active");
        elSportCarsBtn.classList.remove("active");
        elVanCarsBtn.classList.add("active");
    }
})