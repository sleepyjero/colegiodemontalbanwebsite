
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.profiles-track');
  const cards = document.querySelectorAll('.profile-card');
  const prevButton = document.querySelector('.slider-button.prev');
  const nextButton = document.querySelector('.slider-button.next');

  let currentIndex = 0;

  // Function to calculate the card width based on screen size
  function getCardWidth() {
    const card = cards[0];
    return card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight); // card width + margin
  }

  // Function to calculate how many cards to show based on the window width
  function getCardsToShow() {
    return window.innerWidth <= 768 ? 2 : 3;  // 2 cards on mobile, 3 cards on desktop
  }

  // Function to update the slider position
  function updateSliderPosition() {
    const cardWidth = getCardWidth();
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Event listener for the previous button
  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  // Event listener for the next button
  nextButton.addEventListener('click', function () {
    const totalCards = cards.length;
    const cardsToShow = getCardsToShow();  // Get updated number of cards to show
    if (currentIndex < totalCards - cardsToShow) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  // Update the number of cards shown on window resize
  window.addEventListener('resize', function () {
    updateSliderPosition();  // Update the slider position on window resize
  });

  // Initial update to set the first position
  updateSliderPosition();
});
let images = document.querySelectorAll('.carousel-image');
let textAndButton = document.querySelector('.welcome-text');
let currentIndex = 0;

function cycleImages() {
    images[currentIndex].style.opacity = 0;  // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Cycle to the next image
    images[currentIndex].style.opacity = 1;  // Show new image

    // Toggle the text and button visibility
    if (currentIndex === 0) {
        textAndButton.style.opacity = 1;  // Show on first image
    } else {
        textAndButton.style.opacity = 0;  // Hide on other images
    }
}

// Cycle every 5 seconds
setInterval(cycleImages, 5000);


