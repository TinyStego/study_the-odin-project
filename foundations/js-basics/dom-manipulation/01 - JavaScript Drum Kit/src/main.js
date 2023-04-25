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

window.addEventListener("keypress", e => {
    if (e.key in drumKeys) {
        const sound = new Audio(`sounds/${drumKeys[e.key]}.wav`);
        const key = document.querySelector(`div[data-key=${e.key}]`);
        sound.play();
        key.classList.add("playing");
    } 
})
