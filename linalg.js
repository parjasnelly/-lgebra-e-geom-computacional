class LinearAlgebra{
    transpose(a){
       let c;

        if(a instanceof Vector){
            c = new Vector(a.size);
            c.rows = a.cols;
            c.cols = a.rows;

            for(let i = 1; i<=c.size; i++){
                c.set(i, a.get(i));
            }
        }else if(a instanceof Matrix){
            c = new Matrix(a.cols, a.rows);

            for(let j = 1; j <= c.cols; j++){
                for(let i = 1; i <= c.rows; i++){
                    c.set(i, j, a.get(j,i));
                }
            }
        }else {
            throw "O parametro deve ser um objeto do tipo vetor ou matriz!"
        }

        return c;
    }

    plus(a, b){

        if(a.rows != b.rows || a.cols!= b.cols){
            throw "As matrizes são incompatíveis.";
        } else {
            let c = new Matrix(a.rows, a.cols);

            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i, j, a.get(j, i) + b.get(i, j));
                }
            }
            return c;
        }
    }
    times(a, b){
        if(typeof b != "object" || !(b instanceof Matrix)){
            throw "O segundo parâmetro deve ser um objeto do tipo Matriz.";
        }

        let c = new Matrix(b.rows, b.cols);

        if(typeof a == "number"){
            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; i <= c.cols; j++){
                    c.set(i, j, a * b.get(i, j));
                }
            }
        } else if(typeof a == "object" && a instanceof Matrix){
            // verifica se as matrizes são do mesmo tamanho
            if(a.rows != b.rows || a.cols!= b.cols){
                throw "As matrizes são incompatíveis.";
            }

            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; i <= c.cols; j++){
                    c.set(i, j, a.get(i, j) * b.get(i, j));
                }
            }
        } else {
            throw "O primeiro parâmetro deve ser um escalar ou objeto do tipo Matriz.";
        }

        return c;

    }

    div(a, b){
        // verifica se os parâmetros a e b são matrizes
        if(typeof a != "object" || !(a instanceof Matrix) || typeof b != "object" || !(b instanceof Matrix)){
        throw "Os parâmetros deve ser um objetos do tipo Matriz.";
        }
        // verifica se as matrizes são do mesmo tamanho
        if(a.rows != b.rows || a.cols!= b.cols){
            throw "As matrizes são incompatíveis.";
        }
        // verifica se as matriz b contem algum elemento nulo
        for(let i = 0; i<b.values.length; i++){
            if(b.values[i] === 0){
                throw "A matriz b contêm pelo menos um elemento nulo";
            }
        }

        let c = new Matrix(b.rows, b.cols);

        for(let i = 1; i <= c.rows; i++){
            for(let j = 1; i <= c.cols; j++){
                c.set(i, j, a.get(i, j) / b.get(i, j));
            }
        }
    }
    dot(a, b){
        // verifica se os parâmetros a e b são matrizes
        if(typeof a != "object" || !(a instanceof Matrix) || typeof b != "object" || !(b instanceof Matrix)){
            throw "Os parâmetros deve ser um objetos do tipo Matriz.";
        }
        // verifica se as matrizes são do mesmo tamanho
        if(a.cols != b.rows){
            throw "As matrizes são incompatíveis.";
        }

        let c = new Matrix(a.rows, b.cols);

        for(let i = 1; i<= a.rows; i++){
            for(let j = 1; j<= b.cols; j++){
                for(let k = 1; k<= a.cols; k++){
                    c.set(i, j, (c.get(i, j) + a.get(i, k) * b.get(k, j)));
                }
            }
        }

        return c;

    }
    multSomaLine(a, linhaPivo, linhaTermo, k){

        for(let j = 1; j<=a.cols; j++){
            a.set(linhaTermo, j, a.get(linhaPivo, j) * k + a.get(linhaTermo, j));
        }
    }

    multLine(a, linhaPivo, k){
        for(let j = 1; j<=a.cols; j++){
            a.set(linhaPivo, j, Math.round(a.get(linhaPivo, j) * k));
        }
    }
    changeRows(a, row1, row2){
        for(let i = 1; i<=a.cols;i++){
            let aux = a.get(row1,i);
            a.set(row1, i, a.get(row2, i));
            a.set(row2, i, aux);
        }

    }
    solve(a){
        //verifica a matriz entrada
        if(typeof a != "object" || !(a instanceof Matrix)){
            throw "O parâmetro deve ser um objeto do tipo Matriz.";
        }
        if(a.rows!=a.cols-1){
            throw "O parâmetro deve ser uma matriz extendida.";
        }

        // inicia matriz resposta e zera a triangular inferior
        let b = this.gauss(a).matrix;

        //zera a parte acima da diagonal
        for(let j = b.cols-1; j>=2; j--){
            for(let i = j-1; i>=1;i--){
                let k = -(b.get(i, j))/b.get(j, j);
                this.multSomaLine(b, j, i, k)
            }
        }

        // transforma pivos em 1
        for(let i= 1;i<=b.rows;i++){
            let k = 1/b.get(i,i);
            this.multLine(b, i, k);
        }

        // cria um vetor e coloca a coluna dos resultados em um vetor
        let c = new Vector(b.rows);

        for(let i = 1; i<=b.rows;i++){
            c.set(i,b.get(i,b.cols));
        }

        return c
    }
    det(a){
        //verifica a matriz entrada
        if(typeof a != "object" || !(a instanceof Matrix)){
            throw "O parâmetro deve ser um objeto do tipo Matriz.";
        }
        let resp= this.gauss(a);
        let det= resp.coef;
        for(let i=1; i<=resp.matrix.rows;i++){
            det*=resp.matrix.get(i,i);
        }
        return det;
    }
    inverse(a){
        //verifica a matriz entrada
        if(typeof a != "object" || !(a instanceof Matrix)){
            throw "O parâmetro deve ser um objeto do tipo Matriz.";
        }
        // verifica se a matriz é uma matriz quadrada
        if(a.cols!=a.rows){
            throw "A matriz deve ser quadrada!";
        }

        let c = new Matrix(a.rows, a.cols*2);
        //coloca a matriz A e a matriz identidade na matriz C
        for(let i = 1; i <= a.rows; i++) {
            for (let j = 1; j <= a.cols; j++) {
                c.set(i, j, a.get(i, j));
            }
        }
        for(let i = 1; i <= a.rows; i++) {
            c.set(i, a.rows+i, 1);
        }

        //zera a triangular inferior
        c = this.gauss(c).matrix;
        //zera a triangular superior
        for(let j = c.rows; j>=2; j--){
            for(let i = j-1; i>=1;i--){
                let k = -(c.get(i, j))/c.get(j, j);
                this.multSomaLine(c, j, i, k)
            }
        }
        // transforma pivos em 1
        for(let i= 1;i<=c.rows;i++){
            let k = 1/c.get(i,i);
            this.multLine(c, i, k);
        }
        //Pega a matriz inversa e coloca na matriz resp
        let resp = new Matrix(a.rows, a.cols);

        for(let i = 1; i <= c.rows; i++) {
            for (let j = c.rows+1, j2 = 1; j <= c.cols; j++, j2++) {
                resp.set(i, j2, c.get(i, j));
            }
        }
        return resp;
    }
    gauss(a){
        //verifica a matriz entrada
        if(typeof a != "object" || !(a instanceof Matrix)){
            throw "O parâmetro deve ser um objeto do tipo Matriz.";
        }
        // verifica se a matriz é gauss compativel
        if(a.cols<a.rows){
            throw "A matriz possui menos colunas do que linhas!";
        }
        let resp = {
            matrix: new Matrix(a.rows, a.cols, a.values.slice()),
            coef: 1
        }


        //zera a triangular inferior
        for(let j = 1; j<=resp.matrix.rows; j++){
            for(let i = j+1; i<= resp.matrix.rows;i++){
                if(resp.matrix.get(j,j) === 0){
                    for (let k = j+1; k<=resp.matrix.rows;k++){
                        if(resp.matrix.get(k, j)!==0){
                            this.changeRows(resp.matrix, j, k);
                            resp.coef *= -1;
                            break;
                        }
                    }
                }

                let k = -(resp.matrix.get(i, j))/resp.matrix.get(j, j);
                this.multSomaLine(resp.matrix, j, i, k);
            }
        }
        return resp;
    }
}