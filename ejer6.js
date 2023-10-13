/* Las siguientes funciones cuyo nombre comienza por 'mirar' sirven para mirar en el array bidimensional la posición
 izquierda, derecha, abajo, arriba, diagonal superior izquierda y derecha, y diagonal inferior izquierda y derecha.
 Si la posición a comprobar es igual a -1, sumaremos 1 a la posición mirada en al array */
const mirarIzquierda=(array,j,i)=>{
    if(array[i][j-1]==-1){
        array[i][j]+=1;
    }
    return array;
}

const mirarDerecha=(array,j,i)=>{
    if(array[i][j+1]==-1){
        array[i][j]+=1;
    }
    return array;
}

const mirarArriba=(array,j,i)=>{
    if(array[i-1][j]==-1){
        array[i][j]+=1;
    }
    return array;
}

const mirarAbajo=(array,j,i)=>{
   if(array[i+1][j]==-1){
        array[i][j]+=1;
    }
    return array;
}

const mirarDiaSupIzq=(array,j,i)=>{
   if(array[i-1][j-1]==-1){
        array[i][j]+=1;
    }
    return array;
}

const mirarDiaSupDer=(array,j,i)=>{
   if(array[i-1][j+1]==-1){
        array[i][j]+=1;
    }
    return array;
}

const mirarDiaInfIzq=(array,j,i)=>{
   if(array[i+1][j-1]==-1){
        array[i][j]+=1;
    }
    return array;
}

const mirarDiaInfDer=(array,j,i)=>{
   if(array[i+1][j+1]==-1){
        array[i][j]+=1;
    }
    return array;
}

/**
 * Función para contar cuantas minas adyacentes existen en posiciones donde no hay minas (0), si existe una mina (-1) quedará el mismo valor.
 * @param {array} array 
 * @returns El array indicando el número de minas adyacentes en posiciones donde no haya minas.
 */
const contandoMinas=(array)=>{
    let izquierda=false;
    let derecha=false;
    let arriba=false;
    let abajo=false;

    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            /* Si la posición a mirar es diferente de -1 
            revisamos los limites del array para comprobar que no estemos intentando acceder a posiciones fuera del array */
            if(array[i][j]!=-1){
                //Limite izquierdo
                if(j!=0){
                    array=mirarIzquierda(array,j,i);
                    izquierda=true;
                }
                //Limite derecho
                if(j!=array[i].length-1){
                    array=mirarDerecha(array,j,i);
                    derecha=true;
                }
                //Limite superior
                if(i!=0){
                    array=mirarArriba(array,j,i);
                    arriba=true;
                }
                //Limite inferior
                if(i!=array.length-1){
                    array=mirarAbajo(array,j,i);
                    abajo=true;
                }
                //Comprobamos que existe diagonal superior izquierda
                if(arriba==true && izquierda==true){
                    array=mirarDiaSupIzq(array,j,i);
                }
                //Comprobamos que existe diagonal superior derecha
                if(arriba==true && derecha==true){
                    array=mirarDiaSupDer(array,j,i);
                }
                //Comprobamos que existe diagonal inferior izquierda
                if(abajo==true && izquierda==true){
                    array=mirarDiaInfIzq(array,j,i);
                }
                //Comprobamos que existe diagonal inferior derecha
                if(abajo==true && derecha==true){
                    array=mirarDiaInfDer(array,j,i);
                }
                //Limites de nuevo a false para volver a iterar
                izquierda=false;
                derecha=false;
                arriba=false;
                abajo=false;    
            }
        }
    }
    return array;
}

const arrayMinas=[
    [0,0,-1,0],
    [-1,-1,-1,0],
    [-1,-1,-1,0],
    [-1,-1,-1,0],
];

console.log(contandoMinas(arrayMinas));
