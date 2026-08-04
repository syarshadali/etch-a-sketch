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
}