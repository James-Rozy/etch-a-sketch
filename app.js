const DEFAULT_GRID = 16;

const grid = document.querySelector(".grid");

let getGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    grid.appendChild(pixel);
  }
};

window.onload = () => {
  getGrid(DEFAULT_GRID);
};
