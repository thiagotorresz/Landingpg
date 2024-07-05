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

// Perguntas sumirem

function toggleTexto0() {
    var t0 = document.getElementById("texto-escondido0");
    if (t0.style.display === "none") {
      t0.style.display = "block";
    } else {
      t0.style.display = "none";
    }
  }

  function toggleTexto1() {
    var t1 = document.getElementById("texto-escondido1");
    if (t1.style.display === "none") {
      t1.style.display = "block";
    } else {
      t1.style.display = "none";
    }
  }

  function toggleTexto2() {
    var t2 = document.getElementById("texto-escondido2");
    if (t2.style.display === "none") {
      t2.style.display = "block";
    } else {
      t2.style.display = "none";
    }
  }

//   MENU 

document.getElementById('toggleMenu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});
