let bird;
let background, birdImg;


function preload() {
    birdImg = loadImage("assets/bird.png")
    background = loadImage("assets/background.png")
}


function setup() {
    new Canvas(400, 600);

    bird = new Sprite(loadImage("assets/bird.png"))

}


function draw(){
    image(background, 0, 0, width, height);


}



