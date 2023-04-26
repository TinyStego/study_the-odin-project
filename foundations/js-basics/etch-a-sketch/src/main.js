const container = document.querySelector(".container");
const SIZE = 16;

for (let i = 0; i < SIZE; ++i) {
    const row = document.createElement("div");
    for (let j = 0; j < SIZE; ++j) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        row.appendChild(pixel);
    }
    container.appendChild(row);
}
