let r;
function setup() {
    createCanvas(640, 480,WEBGL);
    createEasyCam();
    //r = new Circle(200, 200, 100,1000)

}

function draw() {
    background(52);
    //r.setColor("#ffff00")
    //r.rotation(Math.PI/300)
    //r.draw();
    stroke("#ffffff");
    plane(50)
}