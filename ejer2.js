/**
 * Función que calcula el salario neto semanal en función de las horas y precio hora
 * 
 * @param {number} numHoras - Horas trabajadas semanales
 * @param {number} precioHora - Precio por hora
 * @returns El salario neto semanal
 */
const calcularSalario = (numHoras, precioHora) => {
    let salarioBruto = 0;
    let salarioNeto = 0;
    if (numHoras<1 || precioHora<1){
        return "No es posible realizar el cálculo de salario";
    } else if (numHoras<=35) {
        salarioBruto = numHoras*precioHora;
    } else {
        salarioBruto = 35*precioHora;
        let horasRestantes = numHoras-35;
        salarioBruto+= horasRestantes*(precioHora*1.5);
    }

    if (salarioBruto<=500) {
        salarioNeto=salarioBruto;
    } else if (salarioBruto<=900) {
        let salarioImpuestos25 = salarioBruto-500;
        salarioNeto = 500 + (salarioImpuestos25*0.75);
    } else {
        let salarioImpuestos45 = salarioBruto - 900;
        salarioNeto = 500 + (400*0.75) + (salarioImpuestos45*0.55);
    }

    return salarioNeto;
}

console.log(calcularSalario(40, 20));

