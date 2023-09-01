const container = document.getElementById('grid-container');
const sizeInput = document.getElementById('size-input');
const colorInput = document.getElementById('color-input');
const gridColorInput = document.getElementById('grid-color-input');
const backgroundColorInput = document.getElementById('background-color-input');
const clearButton = document.getElementById('clear-btn');
const toggleGridButton = document.getElementById('toggle-grid');
const toggleEraserButton = document.getElementById('toggle-eraser');
let previousBackgroundColor = '#ffffff';

function rgbToHex(rgb) {
    const values = rgb.match(/\d+/g);

    if (!values || values.length !== 3) {
        return rgb;
    }

    const red = parseInt(values[0]);
    const green = parseInt(values[1]);
    const blue = parseInt(values[2]);

    const toHex = (color) => {
        let hex = color.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const hexColor = "#" + toHex(red) + toHex(green) + toHex(blue);

    return hexColor;
}

function setGrid(size){
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'square grid';
        newDiv.style.backgroundColor = backgroundColorInput.value;
        container.append(newDiv);
    }
    squares = document.querySelectorAll('.square');
    changeColor(colorInput.value);
    changeGridColor(gridColorInput.value);
    changeBackgroundColor(backgroundColorInput.value);
}

function changeColor(color) { 
    toggleEraserButton.classList.remove('on'); 
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        })
    })
}

function changeGridColor(color) {
    squares.forEach((square) => {
        square.style.borderColor = color;
    })
}

function changeBackgroundColor(color) {
    squares.forEach((square) => {
        if (previousBackgroundColor === rgbToHex(square.style.backgroundColor)){
            square.style.backgroundColor = color;
        } 
    })
    previousBackgroundColor = backgroundColorInput.value;
}

function clearBackgroundColor(color) {
    squares.forEach((square) => { 
            square.style.backgroundColor = color;
    })
}

setGrid(16);

sizeInput.addEventListener('change', () => {
     setGrid(sizeInput.value); 
})

colorInput.addEventListener('change', () => {
    changeColor(colorInput.value);
})

gridColorInput.addEventListener('change', () => {
    changeGridColor(gridColorInput.value);
})

backgroundColorInput.addEventListener('change', () => {
    changeBackgroundColor(backgroundColorInput.value);
})

clearButton.addEventListener('click', () => {
    clearBackgroundColor(backgroundColorInput.value);
})

toggleGridButton.addEventListener('click', () => {
    squares.forEach(square => square.classList.toggle('grid'));
})


toggleEraserButton.addEventListener('click', () => {
    toggleEraserButton.classList.toggle('on');
    if(toggleEraserButton.className === 'on') {
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = backgroundColorInput.value;
            })
        })
    }
    else{
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = colorInput.value;
            })
        })
    }
})

