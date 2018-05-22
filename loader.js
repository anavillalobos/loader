/*
 *
 * Cinema Expandido WEB
 * loader (22/may/2018)
 * Ana Hernández Villalobos
 * 
 *
 * URL
 */

/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */	

 var video;
 var angulo = 0;
 var isLoaded = false;

 /*
 *****************************************
 *****************************************
 * LIFE CYCLE
 *****************************************
 *****************************************
 */

function preload() {

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	initializeVideo();

}

function draw() {
	if (isLoaded == true) {
		drawVideo();
	} else{
		drawLoading();
	}
}

function initializeVideo() {
	video = createVideo('assets/videos/centro.mov', videoLoaded);
}

function videoLoaded() {
	isLoaded = true;
	video.loop();
	video.hide();
}

function drawVideo() {
	image(video, 0, 0);
}

function drawLoading() {
	background(255, 100, 190);
	translate(windowWidth/2, windowHeight/2);
	rotate(angulo);
	strokeWeight(10);
	stroke(0, 0, 255);
	line(0, 0, 100, 100);
	angulo += 0.1;
}

 /*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */