const container = document.getElementById('grid-container');
const sizeInput = document.getElementById('size-input');
const colorInput = document.getElementById('color-input');
function changeColor(color) {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        })
    })
}
function setGrid(size){
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'square';
        container.append(newDiv);
    }
    changeColor(colorInput.value);
}

setGrid(16);

sizeInput.addEventListener('change', () => {
     setGrid(sizeInput.value); 
})

colorInput.addEventListener('change', () => {
    changeColor(colorInput.value);
})