// Sons P5js
var soundPage2;
var soundPage3;
var soundPage4;

var volume;

function preload() {
    // set the global sound formats
    soundFormats('m4a');

    soundPage2 = loadSound('assets/badinter_2.m4a');
    soundPage3 = loadSound('assets/badinter_3.m4a');
    soundPage4 = loadSound('assets/badinter_4.m4a');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
	
	var perc = mouseX * 100 / width;
	if(perc <= 50){
		volume = perc / 50;
	}
	else{
		volume = (50 - (perc - 50)) / 50;
	}
    soundPage2.amp(volume);
    soundPage3.amp(volume);
    soundPage4.amp(volume);
}

function goPage1() {
	soundPage2.stop();
    var pages = document.getElementById('pages');
    if (pages) {
        pages.style.transform = 'translateX(0)';
    }
}

function goPage2() {
	soundPage3.stop();
    soundPage2.play();
    var pages = document.getElementById('pages');
    if (pages) {
        pages.style.transform = 'translateX(-100vw)';
    }
}

function goPage3() {
	soundPage2.stop();
	soundPage4.stop();
    soundPage3.play();
    var pages = document.getElementById('pages');
    if (pages) {
        pages.style.transform = 'translateX(-200vw)';
    }
}

function goPage4() {
	soundPage3.stop();
    soundPage4.play();
    var pages = document.getElementById('pages');
    if (pages) {
        pages.style.transform = 'translateX(-300vw)';
    }
}