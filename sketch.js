const container = document.getElementById('grid-container');
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';

for (let i=0; i<16*16; i++) {
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