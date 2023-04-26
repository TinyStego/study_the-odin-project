const container = document.querySelector(".container");

function createGrid() {
    const pixels = document.querySelectorAll(".pixel");
    let pixelsPerRow = parseInt(prompt("How many pixels per row? Maximum: 100"));
    
    if (Number.isInteger(pixelsPerRow) && pixelsPerRow > 0) {
        clearGrid(pixels);
        createPixels(pixelsPerRow);
    }
}

function createPixels(pixelsPerRow) {
    const pixelSize = container.clientWidth / pixelsPerRow;
    console.log(pixelSize);
    for (let i = 0; i < pixelsPerRow; ++i) {
        for (let j = 0; j < pixelsPerRow; ++j) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.width = `${pixelSize}px`
            pixel.style.height = `${pixelSize}px`
            container.appendChild(pixel);
        }
    }
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
    }))
}

function clearGrid(pixels) {
    pixels.forEach(pixel => container.removeChild(pixel));
}

function resetPixels(pixels) {
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

