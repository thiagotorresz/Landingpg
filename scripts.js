function changeSlide(n, sliderId) {
    let slider = document.getElementById(sliderId);
    let slides = slider.getElementsByClassName("slide");
    let activeSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
    slides[activeSlideIndex].classList.remove("active");
    
    let newSlideIndex = (activeSlideIndex + n) % slides.length;
    if (newSlideIndex < 0) newSlideIndex = slides.length - 1;
    
    slides[newSlideIndex].classList.add("active");
}

// Initialize sliders
document.addEventListener("DOMContentLoaded", function() {
    let sliders = document.getElementsByClassName("slider");
    for (let slider of sliders) {
        slider.querySelector(".slide").classList.add("active");
    }
});
