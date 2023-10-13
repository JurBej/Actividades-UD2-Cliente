let countGlobal = 0;
/**
 * Función para contar cartas, que según el valor de la carta incrementará o decrementará la variable countGlobal
 * 
 * @param {number or string} card 
 * @returns El contador global junto a Bet si es positivo o Hold si es negativo o 0
 */
const contarCartas = (card) =>{
    if (card>=2 && card<=6) {
        countGlobal++;
    } else if (card==10 || card=="J" || card=="Q" || card=="K" || card=="A") {
        countGlobal--;
    }

    if (countGlobal>0) {
        return countGlobal + " Bet";
    } else {
        return countGlobal + " Hold"; 
    }
}

console.log(contarCartas(3));
console.log(contarCartas(4));
console.log(contarCartas("J"));
console.log(contarCartas(5));

