const DEFAULT_GRID = 16;

const body = document.querySelector("body");
const container = document.createElement("div");
const header = document.createElement("div");
const grid = document.createElement("div");
const footer = document.createElement("div");

container.classList.add("container");
grid.classList.add("grid");

let getGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    grid.appendChild(pixel);
  }
};

let getHeader = () => {
  header.classList.add("header");
  const title = document.createElement("h1");
  title.textContent = "ETCH-A-SKETCH";
  header.appendChild(title);
  container.appendChild(header);
};

let getFooter = () => {
  footer.classList.add("footer");
  const credit = document.createElement("p");
  credit.textContent = "James Rozsypal 2022";
  footer.appendChild(credit);
  container.appendChild(footer);
};

window.onload = () => {
  getGrid(DEFAULT_GRID);
  getHeader();
  container.appendChild(grid);
  getFooter();
  body.appendChild(container);
};
