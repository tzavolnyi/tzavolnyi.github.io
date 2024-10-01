document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    for(const image of images){
        console.log(image)
    }
})

const colors = ['#ADD8E6', '#90EE90']; // Light blue and light green colors
const numberOfShapes = 100; // Total number of falling shapes

function createShape() {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Randomly position the shape
    shape.style.left = Math.random() * 100 + 'vw'; // Position it anywhere in the viewport width
    
    // Set a random size (between 5px and 15px)
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    shape.style.width = size + 'px';
    shape.style.height = size + 'px';

    // Set a random animation duration (between 4s and 10s for slower falling speed)
    shape.style.animationDuration = Math.random() * 6 + 4 + 's'; // Between 4s and 10s
    
    document.getElementById('falling-shapes').appendChild(shape);
    
    // Remove shape after falling
    shape.addEventListener('animationend', () => {
        shape.remove();
    });
}

// Create shapes on page load
window.onload = () => {
    for (let i = 0; i < numberOfShapes; i++) {
        createShape();
    }
}
