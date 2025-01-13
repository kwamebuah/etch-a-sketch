const container = document.querySelector('.container');
const containerSize = 600;

const squareSizeBtn = document.querySelector('#square-size');
const clearBtn = document.querySelector('#clear');
const rainbowBtn = document.querySelector('#rainbow');
const blackBtn = document.querySelector('#black');

function setContainer() {
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    createGrid();
}

function createGrid(size = 16) {
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

function getSquareSize() {
    const maxSquares = 100;
    const minSquares = 10;
    let numOfSquares = prompt('Enter the number of squares (max of 100)');
    numOfSquares = (numOfSquares < minSquares) ? minSquares : (numOfSquares > maxSquares) ? maxSquares : numOfSquares;
    clearGrid();
    createGrid(numOfSquares);
}

function backgroundColorChange(event) {
    if (event.target.classList.contains('square')) {
        if (event.target.classList.contains('rainbow')) {
            setBackgroundRainbow(event);
        }
        else {
            event.target.style.backgroundColor = '#000';
        }
    }
}


function resetColors() {
    for (let child of Array.from(container.childNodes)) {
        child.style.backgroundColor = '#fff';
    }
}

function randomColorGenerator() {
    let colorArray = [0, 0, 0];
    for (let i = 0; i < colorArray.length; i++) {
        let rand = Math.floor(Math.random() * 255);
        colorArray[i] = rand;
    }
    const randomColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
    return randomColor;
}

function setBackgroundRainbow(event) {
    event.target.style.backgroundColor = randomColorGenerator();
}

setContainer();

container.addEventListener('mouseover', backgroundColorChange);

squareSizeBtn.addEventListener('click', getSquareSize);

clearBtn.addEventListener('click', resetColors);

rainbowBtn.addEventListener('click', () => {
    const divSquare = document.querySelectorAll('.square');

    for (const element of divSquare) {
        if (!element.classList.contains('rainbow')) {
            element.classList.add('rainbow');
        }
    }
});

blackBtn.addEventListener('click', () => {
    const divSquare = document.querySelectorAll('.square');

    for (const element of divSquare) {
        if (element.classList.contains('rainbow')) {
            element.classList.remove('rainbow');
        }
    }
});