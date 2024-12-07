// Select the cursor element
const cursor = document.querySelector('.cursor');

// Add an event listener for mouse movements
document.addEventListener('mousemove', (e) => {
    // Set the cursor position to the mouse position
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Clone the cursor to create a trail effect
    const trail = cursor.cloneNode(true);
    trail.classList.add('cursor-trail');
    document.body.appendChild(trail);

    // Remove the trail after animation ends
    setTimeout(() => {
        trail.remove();
    }, 3000); // Adjust the duration to match the trail effect timing
});
