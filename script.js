const container = document.querySelector('.container');
const containerSize = 600;

function setContainer() {
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    createGrid();
}

function createGrid(size=16) {
    let squareSize = containerSize / size;
    for (let i = 0; i < (size * size); i++) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('square');
        divSquare.style.width = `${squareSize}px`;
        divSquare.style.height = `${squareSize}px`;
        container.appendChild(divSquare);
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function backgroundColorChange(event) {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'yellow';
    }
}

function getSquareSize() {
    const maxSquares = 100;
    const minSquares = 10;
    let numOfSquares = prompt('Enter the number of squares (max of 100)');
    numOfSquares = (numOfSquares < minSquares) ? minSquares : (numOfSquares > maxSquares) ? maxSquares : numOfSquares;
    clearGrid();
    createGrid(numOfSquares);
}

function resetColors() {
    for (let child of Array.from(container.childNodes)) {
        child.style.backgroundColor = '#fff';
    }
}

setContainer();
container.addEventListener('mouseover', backgroundColorChange);

const squareSize = document.querySelector('#square-size');
const clear = document.querySelector('#clear');

squareSize.addEventListener('click', getSquareSize);
clear.addEventListener('click', resetColors);