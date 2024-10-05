"use strict"

const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxInner = document.querySelector(".lightbox-inner");
const imags = Array.from(document.querySelectorAll(".item img"));
const galleryItems = document.getElementById("galleryItems")

let currentIndex;
const btnClose = document.getElementById("close");


galleryItems.addEventListener("click", function(e){
    const item = e.target.closest(".item"); 
    if(item){
        lightboxContainer.classList.replace("d-none", "d-flex");
        lightboxInner.style.setProperty("background-image", `url(${item.querySelector("img").getAttribute("src")})`);
        currentIndex = +item.dataset.imgIndex;
    }
})

function changeSlide(step) {
    currentIndex = currentIndex + step
    if (currentIndex == imags.length) {
        currentIndex = 0;
    }
    if (currentIndex == -1) {
        currentIndex = (imags.length) - 1;
    }
    lightboxInner.style.setProperty("background-image", `url(${imags[currentIndex].getAttribute("src")})`);
}

function close() {
    lightboxContainer.classList.replace("d-flex", "d-none");
}

lightboxContainer.addEventListener("click", function(e){
    if(e.target == btnClose.nextElementSibling){
        changeSlide(1); 
    }else if(e.target == btnClose.previousElementSibling){
        changeSlide(-1)
    }else if(e.target == btnClose || lightboxContainer){
        close();
    }    
})

document.addEventListener("keyup", function(e){
    if (e.key == "ArrowRight") {
        changeSlide(1); 
    }else if(e.key == "ArrowLeft"){
        changeSlide(-1)
    }else if(e.key == "Escape"){
        close();
    }
})