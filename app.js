const DEFAULT_GRID = 16;
const DEFAULT_COLOR = "#424949";
const grid = document.querySelector(".grid");

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

  e.target.style.backgroundColor = `${DEFAULT_COLOR}`;
};

window.onload = () => {
  getGrid(DEFAULT_GRID);
};
