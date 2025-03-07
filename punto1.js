// Solicitar al usuario que ingrese el valor de la factura
const prompt=require('prompt-sync')();
let valorFactura = prompt("Por favor, ingrese el valor de la factura:");


// Convertir el valor ingresado a un número
valorFactura = parseFloat(valorFactura);

// Verificar si el valor de la factura es superior a $50,000
if (valorFactura > 50000) {
    // Calcular el 15% de impuestos
    let impuestos = valorFactura * 0.15;
    // Calcular el valor total de la factura con impuestos
    let valorTotal = valorFactura + impuestos;
    // Imprimir el valor total en pantalla
    console.log("El valor total de la factura con impuestos es: $" + valorTotal.toFixed(2));
} else {
    // Imprimir el valor de la factura sin cambios
    console.log("El valor de la factura es: $" + valorFactura.toFixed(2));
}