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
        let sound = new Audio(`sounds/${drumKeys[e.key]}.wav`);
        sound.play();
    } 
})
