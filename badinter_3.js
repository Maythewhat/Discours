// JavaScript Document
var monSon;
var volume;

function preload() {
    // set the global sound formats
    soundFormats('m4a');

    // load either beatbox.mp3, or .ogg, depending on browser
    monSon = loadSound('assets/badinter_3.m4a');
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