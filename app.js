let r;
function setup() {
    createCanvas(640, 480,WEBGL);
    createEasyCam();
    r = new Sphere(0, 0, 0, 50,30, 30)

}

function draw() {
    background(255);
    r.setColor("#ffff00")
    //r.rotationX(Math.PI/300)

    //plane(50)
    r.draw();
}