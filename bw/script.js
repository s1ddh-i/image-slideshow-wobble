document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const finalMessage = document.getElementById("finalMessage");
  const nextButton = document.getElementById("nextButton");
  const slide4 = document.getElementById("slide4");
  let currentIndex = 0;

  // Function to go to the next slide
  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      slides[currentIndex].classList.remove("active");
      currentIndex++;
      slides[currentIndex].classList.add("active");
    } else if (currentIndex === slides.length - 1) {
      // Hide 4th slide and show final message
      slide4.classList.add("hidden");
      nextButton.classList.add("hidden"); // Hide the next button
      finalMessage.classList.remove("hidden");
      finalMessage.style.opacity = "1"; // Ensure final message appears smoothly
    }
  });
});
