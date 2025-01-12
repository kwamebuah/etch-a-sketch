/*
have a grid of squares in a container
(css) use flex to create the grid pattern
the squares should always fit the container

use event bubbling to detect mouseover on the squares
change background color of square when hovered over


*/


const container = document.querySelector('.container');
const containerSize = 480;

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;


// create 16x16 grid
let size = 16;
let squareSize = containerSize / size;
for (let i = 0; i < (size * size); i++) {
    const divSquare = document.createElement('div');
    divSquare.classList.add('square');
    divSquare.style.width = `${squareSize}px`;
    divSquare.style.height = `${squareSize}px`;
    container.appendChild(divSquare);
}
