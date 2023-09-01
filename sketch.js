const container = document.getElementById('grid-container');
const sizeRange = document.getElementById('size-input');
function setGrid(size){
    container.innerHTML = '';
    console.log(size);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i=0; i<size*size; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'square';
        container.append(newDiv);
    }
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    })
}

setGrid(16);

sizeRange.addEventListener('change', () => {
     setGrid(sizeRange.value); 
})
