const container = document.getElementById('grid-container');
const sizeInput = document.getElementById('size-input');
const colorInput = document.getElementById('color-input');
const backgroundColorInput = document.getElementById('background-color-input');
const clearButton = document.getElementById('clear-btn');
const toggleGridButton = document.getElementById('toggle-grid');

function changeColor(color) {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        })
    })
}

function changeBackgroundColor(color) {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
            square.style.backgroundColor = color;   
    })
}

function setGrid(size){
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'square grid';
        container.append(newDiv);
    }
    changeColor(colorInput.value);
    changeBackgroundColor(backgroundColorInput.value);
}

setGrid(16);

sizeInput.addEventListener('change', () => {
     setGrid(sizeInput.value); 
})

colorInput.addEventListener('change', () => {
    changeColor(colorInput.value);
})

backgroundColorInput.addEventListener('change', () => {
    changeBackgroundColor(backgroundColorInput.value);
})

clearButton.addEventListener('click', () => {
    changeBackgroundColor(backgroundColorInput.value);
})

toggleGridButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => square.classList.toggle('grid'));
})
