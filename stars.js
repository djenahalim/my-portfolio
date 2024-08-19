$(document).ready(function() {
  const electron = document.querySelector('.electron');
  const starContainer = document.querySelector('.stars-container');
  let shootingStarExists = false;

  // Number of stars and twinkling stars
  const totalStars = 200;
  const twinklePercent = 0.3; // 30% of stars should twinkle
  const numTwinklingStars = Math.floor(totalStars * twinklePercent);

  // Create regular stars
  for (let i = 0; i < totalStars; i++) {
    const random2 = Math.floor(Math.random() * 100);
    const random3 = Math.floor(Math.random() * 100);
    const random4 = Math.floor(Math.random() * 3) + 2;
    const randomDelay = Math.random() * 3; // Random delay for twinkling effect

    // Determine if this star should twinkle
    const isTwinkling = Math.random() < twinklePercent;
    const starClass = isTwinkling ? 'dot twinkle' : 'dot';

    $(electron).append(
      `<div class='${starClass}' style='left: ${random2}%; top: ${random3}%; width: ${random4}px; height: ${random4}px; --random-delay: ${randomDelay}s;'></div>`
    );
  }

  // Function to create a shooting star
  function createShootingStar() {
    if (shootingStarExists) return;

    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');

    // Set random position for the shooting star
    const randomXStart = Math.random() * 100;
    const randomYStart = Math.random() * 50;

    shootingStar.style.left = `${randomXStart}vw`;
    shootingStar.style.top = `${randomYStart}vh`;

    starContainer.appendChild(shootingStar);
    shootingStarExists = true;

    // Remove the shooting star after the animation ends
    shootingStar.addEventListener('animationend', () => {
      shootingStar.remove();
      shootingStarExists = false;
    });
  }

  // Create a shooting star at random intervals
  setInterval(() => {
    createShootingStar();
  }, Math.random() * 3000 + 2000); // Adjust interval time for more or less frequent shooting stars
});
