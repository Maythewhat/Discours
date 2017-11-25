// Sons P5js
var soundPage1;
var soundPage2;
var soundPage3;
var soundPage4;

var volume;

function preload() {
    // set the global sound formats
    soundFormats('mp3');

    soundPage1 = loadSound('assets/badinter_2.m4a');
    soundPage2 = loadSound('assets/badinter_2.m4a');
    soundPage3 = loadSound('assets/badinter_3.m4a');
    soundPage4 = loadSound('assets/badinter_4.m4a');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    volume = map(mouseX, 0, height, 0, 1);
    volume = constrain(volume, 0, 1);
    soundPage1.amp(volume);
    soundPage2.amp(volume);
    soundPage3.amp(volume);
    soundPage4.amp(volume);
}

function goPage1() {
    soundPage1.play();
    var pages = document.getElementById('pages');
    if (pages) {
        pages.style.transform = 'translateX(0)';
    }
}

function goPage2() {
    soundPage2.play();
    var pages = document.getElementById('pages');
    if (pages) {
        pages.style.transform = 'translateX(-100vw)';
    }
}

function goPage3() {
    soundPage3.play();
    var pages = document.getElementById('pages');
    if (pages) {
        pages.style.transform = 'translateX(-200vw)';
    }
}

function goPage4() {
    soundPage4.play();
    var pages = document.getElementById('pages');
    if (pages) {
        pages.style.transform = 'translateX(-300vw)';
    }
}