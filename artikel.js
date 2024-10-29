let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (n + slides.length) % slides.length; 
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none"; 
    });
}

function changeSlide(n) {
    slideIndex += n; 
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex + slides.length) % slides.length; 
    showSlide(slideIndex); 
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide(slideIndex);
});
