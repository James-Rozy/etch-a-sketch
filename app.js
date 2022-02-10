const DEFAULT_GRID = 16;

const body = document.querySelector("body");
const container = document.createElement("div");
const grid = document.createElement("div");

container.classList.add("container");
grid.classList.add("grid");

let getGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    grid.appendChild(pixel);
  }
};

window.onload = () => {
  getGrid(DEFAULT_GRID);
  container.appendChild(grid);
  body.appendChild(container);
};
