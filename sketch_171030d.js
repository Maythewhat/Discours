var monSon;
var volume;

function preload() {
    // set the global sound formats
    soundFormats('mp3');

    // load either beatbox.mp3, or .ogg, depending on browser
    monSon = loadSound('assets/battement_de_coeur.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    monSon.play();
}

function draw() {
    background(0);
    volume = map(mouseX, 0, height, 0, 1);
    volume = constrain(volume, 0, 1);
    monSon.amp(volume);
} 