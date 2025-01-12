/*
have a grid of squares in a container
(css) use flex to create the grid pattern
the squares should always fit the container

use event bubbling to detect mouseover on the squares
change background color of square when hovered over


*/


const container = document.querySelector('.container');
const containerSize = 480;

function setContainer() {
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    createGrid();
}

function createGrid() {
    let size = 16;
    let squareSize = containerSize / size;
    for (let i = 0; i < (size * size); i++) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('square');
        divSquare.style.width = `${squareSize}px`;
        divSquare.style.height = `${squareSize}px`;
        container.appendChild(divSquare);
    }
}

function backgroundColorChange(event) {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'yellow';
    }
}

setContainer();
container.addEventListener('mouseover', backgroundColorChange);