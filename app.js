let r;
function setup() {
    createCanvas(640, 480,WEBGL);
    createEasyCam();
    r = new Pyramid(-25, -25, 0, 50,50, 50, 50)

}

function draw() {
    background(52);
    r.setColor("#ffff00")
    //r.rotationX(Math.PI/300)

    //plane(50)
    r.draw();
}