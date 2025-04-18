const container = document.querySelector('.container');
const button = document.querySelector('#size');
const TOTAL_WIDTH = container.clientWidth;

createGrid();

function createGrid(numSquares = 16) {
    container.innerHTML = '';
    const SQUARE_SIZE = `${TOTAL_WIDTH / numSquares}px`;

    for (let i = 0; i < numSquares ** 2; i ++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        square.style.width = SQUARE_SIZE;
        square.style.height = SQUARE_SIZE;
        container.appendChild(square);
    }
}

container.addEventListener('mouseover', (e) => {
    if (e.target === e.currentTarget) return;
    const selectedCell = e.target;
    selectedCell.style.backgroundColor = generateRandomColor();
});

button.addEventListener('click', () => {
    let NUM_SQUARES = +prompt('Enter squares per side (100 max)');
    if ((NUM_SQUARES < 1 || NUM_SQUARES > 100) || !NUM_SQUARES) {
        alert('Enter a valid number between 1 and 100.');
        return;
    }
    
    createGrid(NUM_SQUARES);
});

function generateRandomColor() {
    const r = generateRandomRGBValue();
    const g = generateRandomRGBValue();
    const b = generateRandomRGBValue();

    return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomRGBValue() {
    return Math.floor(Math.random() * 256);
}