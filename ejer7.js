/**
 * Función que permite calcular el número de patrones encontrados en una cadena
 * 
 * @param {string} texto - Cadena de texto a comprobar
 * @returns El número de patrones encontrados en la cadena texto
 */
const numeroPatrones = (texto) => {
    let numPatrones = 0;
    const arrayPatrones = ["00", "101", "ABC", "HO"];
    
    /* Recorremos el array de patrones y asignamos a regex una expresión regular, si el texto contiene la expresión
    regular se le asignará a cantidad el número de coincidencias encontradas en el texto de cada patrón, sino 0.
    Y se sumará a numPatrones dicha cantidad. */
    arrayPatrones.forEach(patron => {
        /* En esta regex usamos  "positive lookahead" junto al patrón. Significa que la coincidencia
        debe ocurrir antes de lo que está dentro del paréntesis, 
        pero lo que está dentro del paréntesis no se incluirá en la coincidencia.
        Las siglas 'gi' significan global e insensitive */
        const regex = new RegExp(`(?=${patron})`, 'gi');
        const coincidencias = texto.match(regex);
        const cantidad = coincidencias ? coincidencias.length : 0;
        numPatrones+=cantidad;
    });

    return numPatrones;
}

console.log(numeroPatrones("000ABCOLA"));