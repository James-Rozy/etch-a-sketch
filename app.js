const DEFAULT_GRID = 16;
const DEFAULT_COLOR = "#424949";

let penColor = DEFAULT_COLOR;
let gridSize = DEFAULT_GRID;

const grid = document.querySelector(".grid");
const btnReset = document.querySelector(".reset");
const inpColor = document.querySelector("#color");
const inpSlider = document.querySelector("#sizeSlider");
const txtSize = document.querySelector("#sizeTxt");

btnReset.onclick = () => newGrid();
inpColor.onchange = (e) => setColor(e.target.value);
inpSlider.onmousemove = (e) => setSlideSize(e.target.value);
inpSlider.onchange = (e) => setSize(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let getGrid = (size) => {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", etchSketch);
    pixel.addEventListener("mousedown", etchSketch);
    grid.appendChild(pixel);
  }
};

let etchSketch = (e) => {
  if (e.type === "mouseover" && mouseDown === false) {
    return;
  }

  e.target.style.backgroundColor = `${penColor}`;
};

let newGrid = () => {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  getGrid(gridSize);
};

let setColor = (color) => {
  penColor = color;
} 

let setSlideSize = (size) => {
  txtSize.textContent = size + " X " + size;
}

let setSize = (size) => {
  gridSize = size;
  setSlideSize(size);
  newGrid();
}

window.onload = () => {
  getGrid(DEFAULT_GRID);
};
