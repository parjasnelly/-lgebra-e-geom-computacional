class Transformations{

    translate2D(vector, dx, dy){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 2){
            throw "O vetor deve ser em 2D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(3, [vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1]);
        b = la.dot(b,a);
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    translate3D(vector, dx, dy, dz){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }

    rotation2D(vector, angle){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 2){
            throw "O vetor deve ser em 2D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(3, [vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[Math.cos(angle),-Math.sin(angle),0,Math.sin(angle),Math.cos(angle),0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    rotation3Dx(vector, angle){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,0,0,Math.cos(angle),-Math.sin(angle),0,0,Math.sin(angle),Math.cos(angle),0,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }

    rotation3Dy(vector, angle){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[Math.cos(angle),0,Math.sin(angle),0,0,1,0,0,-Math.sin(angle),0,Math.cos(angle),0,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }

    rotation3Dz(vector, angle){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[Math.cos(angle),-Math.sin(angle),0,0,Math.sin(angle),Math.cos(angle),0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }

    scale2D(vector, kx,ky){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 2){
            throw "O vetor deve ser em 2D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(3, [vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[kx,0,0,0,ky,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    scale3D(vector, kx,ky,kz){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[kx,0,0,0,0,ky,0,0,0,0,kz,0,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }

    reflection2Dx(vector){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 2){
            throw "O vetor deve ser em 2D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(3, [vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[1,0,0,0,-1,0,0,0,1]);
        b= la.dot(b,a);
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }
    reflection2Dy(vector) {
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 2){
            throw "O vetor deve ser em 2D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(3, [vector.get(1),vector.get(2),1])
        let b = new Matrix(3, 3, [-1, 0, 0, 0, 1, 0, 0, 0, 1]);
        b = la.dot(b, a);
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    reflection3Dxz(vector){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4, 4, [1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }
    reflection3Dyz(vector) {
        if (!vector instanceof Vector) {
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if (vector.size != 3) {
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1), vector.get(2), vector.get(3), 1]);
        let b = new Matrix(4, 4, [-1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b, a);
        return new Vector(3, [b.get(1, 1), b.get(2, 1), b.get(3, 1)]);
    }
    reflection3Dxy(vector) {
        if (!vector instanceof Vector) {
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if (vector.size != 3) {
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1), vector.get(2), vector.get(3), 1]);
        let b = new Matrix(4, 4, [1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1]);
        b = la.dot(b, a);
        return new Vector(3, [b.get(1, 1), b.get(2, 1), b.get(3, 1)]);
    }

    projection2Dx(vector){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 2){
            throw "O vetor deve ser em 2D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(3, [vector.get(1),vector.get(2),1])
        let b = new Matrix(3, 3,[1,0,0,0,0,0,0,0,1] );
        b = la.dot(b, a);
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }
    projection2Dy(vector){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 2){
            throw "O vetor deve ser em 2D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(3, [vector.get(1),vector.get(2),1])
        let b = new Matrix(3, 3,[0,0,0,0,1,0,0,0,1] );
        b = la.dot(b, a);
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    projection3Dxy(vector){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }
    projection3Dxz(vector){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }
    projection3Dyz(vector){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 3){
            throw "O vetor deve ser em 3D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(4, [vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }

    shearing(vector, kx, ky){
        if(!vector instanceof Vector){
            throw "O parametro deve ser um objeto do tipo vetor!";
        }
        if(vector.size != 2){
            throw "O vetor deve ser em 2D e ser em coordenadas homogeneas!";
        }
        let la = new LinearAlgebra();
        let a = new Vector(3, [vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[1,kx,0,ky,1,0,0,0,1]);
        b = la.dot(b,a);
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }
}