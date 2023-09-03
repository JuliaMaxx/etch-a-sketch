const container = document.getElementById('grid-container');
const sizeInput = document.getElementById('size-input');
const colorInput = document.getElementById('color-input');
const gridColorInput = document.getElementById('grid-color-input');
const backgroundColorInput = document.getElementById('background-color-input');
const clearButton = document.getElementById('clear-btn');
const toggleGridButton = document.getElementById('toggle-grid');
const toggleEraserButton = document.getElementById('toggle-eraser');
const toggleRainbowButton = document.getElementById('toggle-rainbow');
const togglePastelButton = document.getElementById('toggle-pastel');
const toggleTransparentButton = document.getElementById('toggle-transparent');
const toggleGrayscaleButton = document.getElementById('toggle-grayscale');
const toggleDarkenButton = document.getElementById('toggle-darken');
const toggleLightenButton = document.getElementById('toggle-lighten');
const toggleWarmButton = document.getElementById('toggle-warm');
const toggleColdButton = document.getElementById('toggle-cold');
const screenshotButton = document.getElementById('screenshot');
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
    changeColor();
    changeGridColor(gridColorInput.value);
    changeBackgroundColor(backgroundColorInput.value);
}

let handleMouseOver = function(event) {
    const square = event.target;
    square.style.backgroundColor = colorInput.value;
}

function defaultEventListener() {
    squares.forEach(square => {
        square.addEventListener('mouseover', handleMouseOver);
    });
}

function removeDefaultEventListener() {
    squares.forEach(square => {
        square.removeEventListener('mouseover', handleMouseOver);
    });
}

function checkIfOn(){
    if(container.className === 'on'){
        return true;
    }
    else{
        return false;
    }
}

function changeColor() { 
    checkIfOn()? defaultEventListener(): removeDefaultEventListener();
    squares.forEach(square => {
        square.addEventListener('click', handleMouseOver);
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

function restoreDefaultMouseOver(){
    handleMouseOver = function(event) {
        const square = event.target;
        square.style.backgroundColor = colorInput.value;
    }
    changeColor();
}

colorInput.addEventListener('change', () => {
    toggleColdButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    togglePastelButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    removeDefaultEventListener();
    restoreDefaultMouseOver();
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
    toggleColdButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    togglePastelButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    removeDefaultEventListener();
    toggleEraserButton.classList.toggle('on');
    if(toggleEraserButton.className === 'on'){
        handleMouseOver = function(event) {
            const square = event.target;
            square.style.backgroundColor = backgroundColorInput.value;
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver()   
    }
})

toggleTransparentButton.addEventListener('click', () => {
    toggleColdButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    togglePastelButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    removeDefaultEventListener();
    toggleTransparentButton.classList.toggle('on');
    if(toggleTransparentButton.className === 'on'){
        handleMouseOver = function(event) {
            const square = event.target;
            square.style.backgroundColor = '';
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver();
    }
})

toggleGrayscaleButton.addEventListener('click', () => {
    toggleColdButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    togglePastelButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    removeDefaultEventListener();
    toggleGrayscaleButton.classList.toggle('on');
    if(toggleGrayscaleButton.className === 'on'){
        handleMouseOver = function(event) {
            const square = event.target;
            const currentColor = window.getComputedStyle(square).backgroundColor;
            const values = currentColor.match(/\d+/g);
            const red = parseInt(values[0]);
            const green = parseInt(values[1]);
            const blue = parseInt(values[2]);
            const gray = 0.299 * red + 0.587 * green + 0.114 * blue
            square.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver();
    }
})

toggleWarmButton.addEventListener('click', () => {
    toggleColdButton.classList.remove('on');
    togglePastelButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    removeDefaultEventListener();
    toggleWarmButton.classList.toggle('on');
    if(toggleWarmButton.className === 'on'){
        handleMouseOver = function(event) {
            const square = event.target;
            const currentColor = window.getComputedStyle(square).backgroundColor;
            const values = currentColor.match(/\d+/g);
            const red = parseInt(values[0]);
            const green = parseInt(values[1]);
            const blue = parseInt(values[2]);
            const warmerRed = Math.min(255, red + 20); 
            const coolerGreen = Math.max(0, green - 10);
            const coolerBlue = Math.max(0, blue - 10); 
            square.style.backgroundColor = `rgb(${warmerRed}, ${coolerGreen}, ${coolerBlue})`;
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver();
    }
})

toggleColdButton.addEventListener('click', () => {
    togglePastelButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    removeDefaultEventListener();
    toggleColdButton.classList.toggle('on');
    if(toggleColdButton.className === 'on'){
        handleMouseOver = function(event) {
            const square = event.target;
            const currentColor = window.getComputedStyle(square).backgroundColor;
            const values = currentColor.match(/\d+/g);
            const red = parseInt(values[0]);
            const green = parseInt(values[1]);
            const blue = parseInt(values[2]);
            const coolerBlue = Math.min(255, blue + 20); 
            const warmerRed = Math.max(0, red - 10);
            const warmerGreen = Math.max(0, green - 10);
            square.style.backgroundColor = `rgb(${warmerRed}, ${warmerGreen}, ${coolerBlue})`;
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver();
    }
})

toggleDarkenButton.addEventListener('click', () => {
    toggleColdButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    togglePastelButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    removeDefaultEventListener();
    toggleDarkenButton.classList.toggle('on');
    if(toggleDarkenButton.className === 'on'){
        handleMouseOver = function(event) {
            const square = event.target;
            const currentColor = window.getComputedStyle(square).backgroundColor;
            const values = currentColor.match(/\d+/g);
            const red = parseInt(values[0], 10);
            const green = parseInt(values[1], 10);
            const blue = parseInt(values[2], 10);
            const darkerRed = Math.round(red * (1 - 0.1));
            const darkerGreen = Math.round(green * (1 - 0.1));
            const darkerBlue = Math.round(blue * (1 - 0.1));
            square.style.backgroundColor = `rgb(${darkerRed}, ${darkerGreen}, ${darkerBlue})`;
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver();
    }
})

toggleLightenButton.addEventListener('click', () => {
    toggleColdButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    togglePastelButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    removeDefaultEventListener();
    toggleLightenButton.classList.toggle('on');
    if(toggleLightenButton.className === 'on'){
        handleMouseOver = function(event) {
            const square = event.target;
            const currentColor = window.getComputedStyle(square).backgroundColor;
            const values = currentColor.match(/\d+/g);
            const red = parseInt(values[0], 10);
            const green = parseInt(values[1], 10);
            const blue = parseInt(values[2], 10);
            const lighterRed = Math.round(Math.min(red + (255 - red) * 0.1, 255));
            const lighterGreen = Math.round(Math.min(green + (255 - green) * 0.1, 255));
            const lighterBlue = Math.round(Math.min(blue + (255 - blue) * 0.1, 255));
            square.style.backgroundColor =  `rgb(${lighterRed}, ${lighterGreen}, ${lighterBlue})`;
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver();
    }
})

const rainbowColors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];

toggleRainbowButton.addEventListener('click', () => {
    toggleColdButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    togglePastelButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    removeDefaultEventListener();
    toggleRainbowButton.classList.toggle('on');
    if(toggleRainbowButton.className === 'on') {
        handleMouseOver = function(event) {
            const square = event.target;
            square.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver();
    }
})

const pastelColors = ['#CCD4BF', '#E7CBA9', '#EEBAB2', '#F5F3E7', '#F5E2E4', ' #F7F6CF', '#5784BA', '#9AC8EB', '#E5DB9C', '#BEB4C5', '#C47482', '#218B82', '#E9BBB5'];

togglePastelButton.addEventListener('click', () => {
    toggleColdButton.classList.remove('on');
    toggleWarmButton.classList.remove('on');
    toggleRainbowButton.classList.remove('on');
    toggleLightenButton.classList.remove('on');
    toggleDarkenButton.classList.remove('on');
    toggleGrayscaleButton.classList.remove('on');
    toggleEraserButton.classList.remove('on');
    toggleTransparentButton.classList.remove('on');
    removeDefaultEventListener();
    togglePastelButton.classList.toggle('on');
    if(togglePastelButton.className === 'on') {
        handleMouseOver = function(event) {
            const square = event.target;
            square.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        }
        changeColor();
    }
    else {
        restoreDefaultMouseOver();
    }
})

screenshotButton.addEventListener("click", function () {
    html2canvas(container).then(function (canvas) {
        // Convert the canvas to an image data URL
        const screenshotDataURL = canvas.toDataURL("image/png");

        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = screenshotDataURL;
        downloadLink.download = "screenshot.png";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});

container.addEventListener('click', () => {
    container.classList.toggle('on');
    checkIfOn()? container.style.cursor = 'url("icons8-cursor-22.png"), auto': container.style.cursor = 'auto';
    changeColor();
})


const backgrounds = document.querySelectorAll('.background');

backgrounds.forEach(background => {
    background.addEventListener('click', () => {
        backgrounds.forEach((bg) => {
            bg.firstElementChild.style.borderColor = 'white';
        })
        background.firstElementChild.style.borderColor = 'red';
        document.querySelector('body').style.backgroundImage = `url('${background.dataset.image}')`; 
    })
})


