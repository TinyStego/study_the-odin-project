const drumKeyElements = document.querySelectorAll(".key");
const drumKeys = {
    a: "clap",
    s: "hihat",
    d: "kick",
    f: "openhat",
    g: "boom",
    h: "ride",
    j: "snare",
    k: "tom",
    l: "tink"
}

function playSound(e) {
    if (e.key in drumKeys) {
        const sound = new Audio(`sounds/${drumKeys[e.key]}.wav`);
        sound.play();
        playAnimation(e.key);
    } 
}

function playAnimation(keyPressed) {
    const key = document.querySelector(`div[data-key=${keyPressed}]`);
    key.classList.add("playing");
}

function removeClass(e) {
    if (e.propertyName === "transform") {
        this.classList.remove("playing");
    }
}

window.addEventListener("keypress", playSound)
drumKeyElements.forEach(key => key.addEventListener("transitionend", removeClass));
