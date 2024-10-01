"use strict"

const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxInner = document.querySelector(".lightbox-inner");
const imags = Array.from(document.querySelectorAll(".item img"));

let currentIndex;
const btnPrve = document.getElementById("prv");
const btnClose = document.getElementById("close");
const btnNext = document.getElementById("next");


for (let i = 0; i < imags.length; i++) {
    imags[i].addEventListener("click", function (e) {
        lightboxContainer.classList.replace("d-none", "d-flex");
        lightboxInner.style.setProperty("background-image", `url(.${this.getAttribute("src")})`);
        currentIndex = imags.indexOf(this);
    })
}

function changeSlide(step) {
    currentIndex = currentIndex + step
    if (currentIndex == imags.length) {
        currentIndex = 0;
    }
    if (currentIndex == -1) {
        currentIndex = (imags.length) - 1;
    }
    lightboxInner.style.setProperty("background-image", `url(.${imags[currentIndex].getAttribute("src")})`);
}

function close() {
    lightboxContainer.classList.replace("d-flex", "d-none");
}


btnNext.addEventListener("click", function () {
    changeSlide(1);
});
btnPrve.addEventListener("click", function () {
    changeSlide(-1)
});
btnClose.addEventListener("click", close);
lightboxContainer.addEventListener("click", close);

lightboxInner.addEventListener("click", function (e) {
    e.stopPropagation();
});