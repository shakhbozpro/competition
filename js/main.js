const elChangeCategoriesList = document.querySelector(".categories__change-btns-list");
const elCompactCarsBtn = document.querySelector("#compact-btn");
const elSportCarsBtn = document.querySelector("#sport-btn");
const elVanCarsBtn = document.querySelector("#van-btn");
const elCompactCarsList = document.querySelector(".categories__compact-cars-list");
const elSportCarsList = document.querySelector(".categories__sport-cars-list");
const elVanCarsList = document.querySelector(".categories__van-cars-list");


elChangeCategoriesList.addEventListener("click", (evt) => {

    if (evt.target.matches("#compact-btn")) {
        elSportCarsList.style.display = "none";
        elVanCarsList.style.display = "none";
        elCompactCarsList.style.display = "block";
    }

    if (evt.target.matches("#sport-btn")) {
        elCompactCarsList.style.display = "none";
        elVanCarsList.style.display = "none";
        elSportCarsList.style.display = "block";
    }

    if (clickedElement.matches("#van-btn")) {
        elCompactCarsList.style.display = "none";
        elSportCarsList.style.display = "none";
        elVanCarsList.style.display = "block";
    }
})