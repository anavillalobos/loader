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
 var holaP;
 var holaP2;
 var container;
 var myFont;

 /*
 *****************************************
 *****************************************
 * LIFE CYCLE
 *****************************************
 *****************************************
 */

function preload() {
	myFont = loadFont("assets/fonts/font.otf");

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	container = createCanvas(500, 300);
	container.position(50, 50);
	container.style('z-index', '-1');
	initializeVideo();
	createP("esto es cansado");
	holaP = select("#holaP");
	holaP.mouseOver(overP);
	holaP.mouseOut(outP);
	holaP2 = select("#holaP2");
	holaP2.mousePressed(pressedP);
	holaP2.position(100, 200);
}

function pressedP() {
	holaP2.html('otra cosa');
}

function overP() {
	holaP.style('background-color', 'blue');
	holaP.style('padding', '30px');
}

function outP () {
	holaP.style('background-color', 'green');
	holaP.style('padding', '15px');
}

function draw() {
	//if (isLoaded == true) {
		drawLoading();
		drawVideo();
	//} else{
		
	//}
}

function initializeVideo() {
	//video = createVideo('assets/videos/centro.mov', videoLoaded);
}

function videoLoaded() {
	isLoaded = true;
	video.loop();
	video.hide();
}

function drawVideo() {
	//image(video, 0, 0);
	noStroke();
	fill(0);
	textFont(myFont);
	textSize(32);
	text("ya me quiero ir", 50, 50);
}

function drawLoading() {
	background(255, 100, 190);
	push();
	translate(windowWidth/2, windowHeight/2);
	rotate(angulo);
	strokeWeight(10);
	stroke(0, 0, 255);
	line(0, 0, 100, 100);
	pop();
	angulo += 0.1;
}

 /*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */