document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  nextBtn.addEventListener("click", function() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  prevBtn.addEventListener("click", function() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }
    updateSlider();
  });

  function updateSlider() {
    const translateValue = -currentIndex * 100 + "%";
    track.style.transform = "translateX(" + translateValue + ")";
  }
});
