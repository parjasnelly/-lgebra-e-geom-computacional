class Plane{
    constructor(x, y, z, w, h, l) {
        this.points = [];

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x, y + h, z]));
        this.color = "#000000";
        this.t = new Transformations();

    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle);
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle);
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle);
        }
    }

    draw(){

        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        endShape(CLOSE);
    }
}

class Parallelogram{
    constructor(x, y, z, w, h, l) {
        this.points = [];

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x, y + h, z]));

        this.points.push(new Vector(3, [x, y, z - l]));
        this.points.push(new Vector(3, [x + w, y, z - l]));
        this.points.push(new Vector(3, [x + w, y + h, z - l]));
        this.points.push(new Vector(3, [x, y + h, z - l]))
        this.color = "#000000";
        this.t = new Transformations();

        this.faces = [];
        this.faces.push([0,1,3,1,2,3]);
        this.faces.push([4,5,7,5,6,7]);
        this.faces.push([0,3,7,0,4,7]);
        this.faces.push([1,2,6,1,5,6]);
        this.faces.push([0,1,4,1,4,5]);
        this.faces.push([3,2,7,2,7,6]);

    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle);
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle);
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle);
        }
    }

    draw(){

        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);

        for(let i = 0; i < this.faces.length; i++){
            for(let j = 0; j < this.faces[i].length; j++){
                let idx = this.faces[i][j];
                vertex(this.points[idx].get(1), this.points[idx].get(2), this.points[idx].get(3))
            }
        }

        endShape(CLOSE);
    }
}


class Pyramid{
    constructor(x, y, z, w, h, l, hp) {
        this.points = [];

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x, y + h, z]));
        this.points.push(new Vector(3, [w/2+x, h/2 + y, z+hp]))
        this.color = "#000000";
        this.t = new Transformations();

    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle);
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle);
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle);
        }
    }

    draw(){

        //strokeWeight(0);
        //stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);
        // base
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        //triangulos
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        endShape(CLOSE);
    }
}