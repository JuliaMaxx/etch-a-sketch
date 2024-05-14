# Etch a Sketch
## Live Preview: https://juliamaxx.github.io/etch-a-sketch/
### Description: website made for pixel-painting 
![image](https://github.com/JuliaMaxx/etch-a-sketch/assets/121096183/7623c1af-1715-40cf-adb9-71e7e5461d15)

### Features:
- website mainly consist of square `canvas` and `buttons` to modify(paint on) it
- the size of the grid(canvas) can be modified by range input from `1x1` to `64x64`
  - changing size of the grid erases everything that has been painted
- canvas has three states `activated`, `not activated` and `color grabber`
  - when canvas is in activated state - `cursor is yellow`
  - when canvas is in color grabber state - `cursor is blue`
  - when is not activated - cursor is browser's `default cursor`
- **canvas *activates* when `clicked on`**:
  - default behaviour is to paint black squares that are hovered on
  - default hover behaviour can be changed by:
    -  `color picker`: lets you choose any color for painting
    -  `eraser`: returns color to the background color of the canvas
    -  `rainbow`: paints squares in random rainbow color
    -  `transparent`: makes squares transparent
    -  `grayscale`: turns color to its balck and white version
    -  `darken`: makes color 10% darker
    -  `lighten`: makes color 10% lighter
    -  `pastel`: paints squares in random pastel color
    -  `warm`: makes color warmer
    -  `cold`: makes color cooler
    -  `invert`: inverts color using **rgb(255 - R, 255 - G, 255 - B)** formula, where R, G and B are initial values
  - any modification can be turned on and off by **clicking the corresponding button**
    
- **canvas *deactivates* when `clicked on in active state`**
  
- **canvas is in *color grabber* mode when `color grabber button is turned on`**
  - color grabber lets you chose any color that is already on the canvas by clicking on it
  - color grabber mode `turns off automatically` when the color is picked, the **canvas becomes active**
- **background color** can be chosen for the canvas itself using second color picker
  - changing background color does not erase what was painted
- `clear` button lets you erase everything that has been painted, returning canvas to its set background color
- `grid` button lets you turn off/on grid lines on the canvas
- third color picker allows you to change `grid color`
- `screenshot` button lets you make screenshot of the canvas
- there is a choice of `10` images as background of the page
  - since images take a while to load, there is a `preloader` that was styled by codepen.io
- website is desktop-only 
