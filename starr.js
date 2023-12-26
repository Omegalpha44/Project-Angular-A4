function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Apply random styles to stars
function applyRandomStylesToStars() {
    const stars = document.querySelectorAll('.star'); // Select all your stars

    stars.forEach(star => {
        // Generate random values for each property
        const starTailLength = randomRange(5, 10) + 'em';
        const starWidth = starTailLength / 6;
        const fallDuration = randomRange(6, 12) + 's';
        const fallDelay = randomRange(0, 10) + 's';

        // Apply styles directly to the star elements
        star.style.setProperty('--star-tail-length', starTailLength);
        star.style.setProperty('--star-width', `${starWidth}px`);
        star.style.setProperty('--fall-duration', fallDuration);
        star.style.setProperty('--fall-delay', fallDelay);
    });
}

// Call this function when the DOM is ready
document.addEventListener('DOMContentLoaded', applyRandomStylesToStars);