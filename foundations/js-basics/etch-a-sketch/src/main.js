const container = document.querySelector(".container");
const PIXEL_PER_ROW = 16;
const PIXEL_SIZE = 50;
const Grid_Size = PIXEL_PER_ROW * PIXEL_SIZE;

container.style.width = `${Grid_Size}px`;
container.style.height = `${Grid_Size}px`;

for (let i = 0; i < PIXEL_PER_ROW; ++i) {
    for (let j = 0; j < PIXEL_PER_ROW; ++j) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
}
