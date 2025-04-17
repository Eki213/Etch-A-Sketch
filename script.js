const container = document.querySelector('.container');
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