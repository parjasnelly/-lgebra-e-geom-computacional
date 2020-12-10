let sun;
let mercury;
let venus;
let earth;
let moon;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;
let pluto;
const raioTerra = 0.732
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    createEasyCam();

    sun = new Sphere(0, 0, 0, raioTerra*109, 20,20);
    mercury = new Sphere(138, 0, 0, raioTerra*0.383, 20,20);
    venus = new Sphere(188, 0, 0, raioTerra*0.949, 20,20);
    earth = new Sphere(229, 0, 0, raioTerra, 30,30);
    moon = new Sphere(232, 0, 0, raioTerra*0.2724, 30,30);
    mars = new Sphere(308, 0, 0, raioTerra*0.532, 20,20);
    jupiter = new Sphere(858, 0, 0, raioTerra*11.21, 20,20);
    saturn = new Sphere(1480, 0, 0, raioTerra*9.45, 20,20);
    uranus = new Sphere(2580, 0, 0, raioTerra*4.01, 20,20);
    neptune = new Sphere(4580, 0, 0, raioTerra*3.88, 20,20);
    pluto = new Sphere(5980, 0, 0, raioTerra*0.186, 20,20);
}

function draw() {
    background(0);
    sun.setColor("#ffff00")
    sun.draw();

    mercury.setColor("#8b4513")
    mercury.draw();

     venus.setColor("#C43E0F")
     venus.draw();

    earth.setColor("#2196f3")
    earth.draw();

    moon.setColor("#a9a9a9")
    moon.draw();

    mars.setColor("#ff0000")
    mars.draw();

    jupiter.setColor("#f4a460")
    jupiter.draw();

    saturn.setColor("#ed9121")
    saturn.draw();

    uranus.setColor("#008080")
    uranus.draw();

    neptune.setColor("#40e0d0")
    neptune.draw();

    pluto.setColor("#d3d3d3")
    pluto.draw();
}