const container = document.querySelector(".container");

function createGrid() {
    const pixels = document.querySelectorAll(".pixel");
    const userPrompt = prompt("How many pixels per row?\nMinimum: 1 | Maximum: 100");
    const pixelsPerRow = parseInt(userPrompt);
    
    if (!Number.isInteger(pixelsPerRow)) {
        alert(`Error: ${userPrompt} is not a number.`)
        return;
    } else if (pixelsPerRow <= 0) {
        alert(`Error: ${pixelsPerRow} is less than the minimum.`)
        return;
    } else if (pixelsPerRow > 100) {
        alert(`Error: ${pixelsPerRow} is more than the maximum.`)
        return;
    } 

    clearGrid(pixels);
    createPixels(pixelsPerRow);
}

function createPixels(pixelsPerRow) {
    const pixelSize = container.clientWidth / pixelsPerRow;
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

