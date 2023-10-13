/**
 * Función que permite calcular el número de billetes mínimo de cada tamaño, dada una cantidad
 * 
 * @param {number} cantidad - Cantidad de dinero
 * @returns El número de billetes mínimo de cada tamaño
 */
const numBilletes = (cantidad) => {
    let billetes500 = 0;
    let billetes200 = 0;
    let billetes100 = 0;
    let billetes50 = 0;
    let billetes20 = 0;
    let billetes10 = 0;
    let billetes5 = 0;

    if (cantidad%5!==0) {
        return "Debes introducir un múltiplo de 5";
    }

    //Math.floor se queda con la parte entera de la división
    billetes500 = Math.floor(cantidad/500);
    cantidad = cantidad%500;
    billetes200 = Math.floor(cantidad/200);
    cantidad = cantidad%200;
    billetes100 = Math.floor(cantidad/100);
    cantidad = cantidad%100;
    billetes50 = Math.floor(cantidad/50);
    cantidad = cantidad%50;
    billetes20 = Math.floor(cantidad/20);
    cantidad = cantidad%20;
    billetes10 = Math.floor(cantidad/10);
    cantidad = cantidad%10;
    billetes5 = Math.floor(cantidad/5);
    cantidad = cantidad%5;

    return billetes500 + " billetes de 500, " + billetes200 + " billetes de 200, " + billetes100 + " billetes de 100, " 
    + billetes50 + " billetes de 50, " + billetes20 + " billetes de 20, " + billetes10 + " billetes de 10 y " 
    + billetes5 + " billetes de 5";
}

console.log(numBilletes(1985));