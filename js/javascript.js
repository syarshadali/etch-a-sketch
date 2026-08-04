const container = document.querySelector('#grid-container');
const resizeBtn = document.querySelector('#resize-btn');
const clearBtn = document.querySelector('#clear-btn');
const sizeValue = document.querySelector('#size-value');
const modeButtons = document.querySelectorAll('.mode-btn');


let currentGridSize = 16;
let currentMode = 'black'; //Options: 'black', 'rainbow', 'shading'


// Core Logic: Generate Grid Dimensions & Elements Dynamically

function createGrid(size) {
    // Clean up existing elements
    container.textContent = '';

    // Update UI tracker text
    sizeValue.textContent = `${size} x ${size}`;

    // Calculate precise dimensions for item packing
    const squareSize = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        // Assign Layout Parameters
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Track visual weight state attribute for shading match
        square.dataset.darkness = '0';

        // Attach Interactions
        square.addEventListener('mouseenter', handleDraw);

        container.appendChild(square);
    }
}


// Interactive Tooling: Draw Engine Switcher

function handleDraw(e) {
    const element = e.target;

    if (currentMode === 'black') {
        element.style.backgroundColor = '#000000';
        element.dataset.darkness = '0'; // Reset Tracking Value
        console.log(element);
    }
}