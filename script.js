const board = document.querySelector('#board');
const SQUARES_NUMBER = 504;
const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(square) {
    let color = colorRandom();
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColor(square) {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = `0 0 2px #000`;
}

function colorRandom() {
    let index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
}