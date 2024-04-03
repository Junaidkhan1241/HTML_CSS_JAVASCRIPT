const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

let slideIndex = 0;
slides[slideIndex].classList.add("active");

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

function prev() {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex === 0) ? slideIndex.length - 1 : slidesIndex + 1;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(${slideIndex * 100} %)`
}

function next() {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slidesIndex + 1;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(${slideIndex * 100} %)`


}